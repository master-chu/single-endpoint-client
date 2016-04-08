$(function(){
  var DEFAULT_LATITUDE = '42.35129149999999',
    DEFAULT_LONGITUDE = '-71.0470125',
    DEFAULT_START_TIME = '2016-04-20T12:00:00+0000',
    DEFAULT_END_TIME = '2016-04-20T13:00:00+0000',
    DEFAULT_ACCOUNT_ID = 1247133268,
    DEFAULT_DRIVER_ID = 1247131032,
    DEFAULT_USER_ID = 629178709;

  var LocationSearch = React.createClass({
    getInitialState: function() {
      return { locations: [] };
    },
    render: function() {
      return (
        <div>
          <LocationSearchForm onSearch={this.handleSearch} />
          <LocationsTable locations={this.state.locations}/>
        </div>
      );
    },
    handleSearch: function(params) {
      this.loadLocationsFromServer(params);
    },
    componentDidMount: function() {
      // called automatically after first render
      //TODO: Render a "no locations searched" message or something
    },
    loadLocationsFromServer: function(params) {
      console.log('searching...');
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        type: 'get',
        data: {
          'latitude': params['latitude'],
          'longitude': params['longitude'],
          'start_time': params['startTime'],
          'end_time': params['endTime'],
          'account_id': params['accountId'],
          'driver_id': params['driverId']
        },
        headers: {
          'Zc-User-Id': params['userId']
        },
        success: function(locations) {
          this.setState({locations: locations});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    }
  });

  var LocationSearchForm = React.createClass({
    /*
      "In React, components should always represent the state
      of the view and not only at the point of initialization."
       - https://facebook.github.io/react/docs/tutorial.html#controlled-components
    */
    handleLatitudeChange: function(event) {
      this.setState({latitude: event.target.value});
    },
    handleLongitudeChange: function(event) {
      this.setState({longitude: event.target.value});
    },
    handleStartTimeChange: function(event) {
      this.setState({startTime: event.target.value});
    },
    handleEndTimeChange: function(event) {
      this.setState({endTime: event.target.value});
    },
    handleAccountIdhange: function(event) {
      this.setState({accountId: event.target.value});
    },
    handleDriverIdChange: function(event) {
      this.setState({driverId: event.target.value});
    },
    getInitialState: function() {
      return {
        latitude: DEFAULT_LATITUDE,
        longitude: DEFAULT_LONGITUDE,
        startTime: DEFAULT_START_TIME,
        endTime: DEFAULT_END_TIME,
        accountId: DEFAULT_ACCOUNT_ID,
        driverId: DEFAULT_DRIVER_ID,
        userId: DEFAULT_USER_ID
      };
    },
    componentDidMount: function() {
      this.initializeGooglePlacesAutocomplete();
    },
    initializeGooglePlacesAutocomplete: function() {
      var _this = this;

      var input = /** @type {!HTMLInputElement} */(
        document.getElementById('google-places-search-input'));

      var autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
          console.error('Google Places Autocomplete could not find a location :(');
          return;
        } else {
          this.setState({
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng()
          });
        }
      });
    },
    search: function(event) {
      event.preventDefault();
      var _this = this;

      var searchKeys = ['latitude', 'longitude', 'startTime', 'endTime', 'accountId', 'driverId'];
      var searchParams = {};
      searchKeys.forEach(function(key) {
        searchParams[key] = _this.state[key];
      });

      if (searchKeys.some(function(key) { return !searchParams[key]; })) {
        console.error('Missing at least 1 required search parameter');
        return;
      } else {
        this.props.onSearch(searchParams);
      }
    },
    render: function() {
      return (
        <form onSubmit={this.search}>
          <div className="form-group">
            <label htmlFor="google-places-search-input"> Location </label>
            <input
              id="google-places-search-input"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="latitude"> Latitude </label>
            <input
              id="latitude"
              className="form-control"
              type="text"
              value={this.state.latitude}
              onChange={this.handleLatitudeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="longitude"> Longitude </label>
            <input
              id="longitude"
              className="form-control"
              type="text"
              value={this.state.longitude}
              onChange={this.handleLongitudeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="start-time"> Start Time </label>
            <input
              id="start-time"
              className="form-control"
              type="text"
              value={this.state.startTime}
              onChange={this.handleStartTimeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="end-time"> End Time </label>
            <input
              id="end-time"
              className="form-control"
              type="text"
              value={this.state.endTime}
              onChange={this.handleEndTimeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="account-id"> Account Id </label>
            <input
              id="account-id"
              className="form-control"
              type="text"
              value={this.state.accountId}
              onChange={this.handleAccountIdChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="driver-id"> Driver Id </label>
            <input
              id="driver-id"
              className="form-control"
              type="text"
              value={this.state.driverId}
              onChange={this.handleDriverIdChange}
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Search" />
        </form>
      );
    }
  });

  var LocationsTable = React.createClass({
    render: function() {
      if (this.props.locations.length > 0) {
        return (
          <table className="table">
            <thead>
              <tr>
                <th> Address </th>
                <th> Distance </th>
                <th> Vehicles </th>
              </tr>
            </thead>
            <LocationsTableBody locations={this.props.locations} />
          </table>
        );
      } else {
        return (
          <div> <br /> No locations to display </div>
        );
      }
    }
  });

  var LocationsTableBody = React.createClass({
    render: function() {
      var rows = this.props.locations.map(function(location) {
        return (
          <LocationsTableRow
            address={location.address}
            distance={location.distance}
            distance_unit={location.distance_unit}
          />
        );
      });
      return (
        <tbody> {rows} </tbody>
      );
    }
  });

  var LocationsTableRow = React.createClass({
    formattedDistance: function() {
      return (Math.round(this.props.distance * 100) / 100) + " " + this.props.distance_unit;
    },
    render: function() {
      return (
        <tr>
          <td> {this.props.address} </td>
          <td> {this.formattedDistance()} </td>
          <td> vehicles... </td>
        </tr>
      );
    }
  });

  ReactDOM.render(
    <LocationSearch url="http://localhost:8081/vehicles/nearby" />,
    document.getElementById('entry-point')
  );
});
