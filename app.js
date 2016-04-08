$(function(){
  var startTime = '2016-04-20T12:00:00+0000',
    endTime = '2016-04-20T13:00:00+0000',
    accountId = 1247133268,
    driverId = 1247131032,
    userId = 629178709;

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
          'latitude': params["latitude"],
          'longitude': params["longitude"],
          'start_time': startTime,
          'end_time': endTime,
          'account_id': accountId,
          'driver_id': driverId
        },
        headers: {
          'Zc-User-Id': userId
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
    getInitialState: function() {
      return {latitude: '42.35129149999999', longitude: '-71.0470125'};
    },
    search: function(event) {
      event.preventDefault();
      var latitude = this.state.latitude.trim();
      var longitude = this.state.longitude.trim();
      if (!longitude || !latitude) {
        return;
      }
      this.props.onSearch({latitude: latitude, longitude: longitude});
    },
    render: function() {
      return (
        <form onSubmit={this.search}>
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
      return (Math.round(this.props.distance * 1000) / 1000) + " " + this.props.distance_unit;
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
