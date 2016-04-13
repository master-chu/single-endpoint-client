$(function(){
  /*==================================*\
  |         Stubbing fixtures          |
  \*==================================*/
  // var LOCATIONS_FIXTURE = [
  //   {
  //     "address": "370 Congress St",
  //     "description": "370 Congress St - Residence Inn",
  //     "distance": "0.096931432218279557589414352483819570814",
  //     "distance_unit": "mi",
  //     "latitude": "1234",
  //     "longitude": "1234",
  //     "location_id": 1706002427,
  //     "vehicles": [
  //       {
  //         "image_url": "http://media.zipcar.com/images/model-image?model_id=1298956229&mode=med",
  //         "location_id": 1706002427,
  //         "make": "Honda",
  //         "model": "Fit",
  //         "name": "Micah",
  //         "currency_html_entity": "$",
  //         "daily_cost_max": null,
  //         "daily_cost_min": null,
  //         "dayAvailability": "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
  //         "hourly_cost_max": 3.81,
  //         "hourly_cost_min": 3.5,
  //         "location_id": 81343210,
  //         "model_id": 1298956229,
  //         "pool_id": 81568710,
  //         "unlimited": true,
  //         "vehicle_id": 1621700612
  //       }
  //     ]
  //   }, {
  //     "address": "2 Center Plaza",
  //     "description": "2 Center Plaza",
  //     "distance": "0.8008545054",
  //     "distance_unit": "mi",
  //     "in_communications": true,
  //     "latitude": 42.3595659,
  //     "location_id": 81343210,
  //     "longitude": -71.060189,
  //     "vehicles": [
  //       {
  //         "currency_html_entity": "$",
  //         "daily_cost_max": null,
  //         "daily_cost_min": null,
  //         "dayAvailability": "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
  //         "hourly_cost_max": 3.81,
  //         "hourly_cost_min": 3.5,
  //         "image_url": "http://media.zipcar.com/images/model-image?model_id=1298956229&mode=med",
  //         "location_id": 81343210,
  //         "make": "BMW",
  //         "model": "X1",
  //         "model_id": 1298956229,
  //         "name": "Bendt",
  //         "pool_id": 81568710,
  //         "unlimited": false,
  //         "vehicle_id": 1621700612
  //       },
  //       {
  //         "currency_html_entity": "$",
  //         "daily_cost_max": null,
  //         "daily_cost_min": null,
  //         "dayAvailability": "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
  //         "hourly_cost_max": 3.69,
  //         "hourly_cost_min": 3.38,
  //         "image_url": "http://media.zipcar.com/images/model-image?model_id=68438186&mode=med",
  //         "location_id": 81343210,
  //         "make": "Subaru",
  //         "model": "Impreza AWD 5-door",
  //         "model_id": 68438186,
  //         "name": "Scott G",
  //         "pool_id": 81568872,
  //         "unlimited": false,
  //         "vehicle_id": 1577476714
  //       }
  //     ]
  //   }
  // ];

  // var server = new Pretender(function() {
  //   this.get('http://localhost:8081/vehicles/nearby', function(request) {
  //     return [200, {"Content-Type": "application/json"}, JSON.stringify(LOCATIONS_FIXTURE)]
  //   });
  // });

  /*==================================*\
  |     Configure network settings     |
  \*==================================*/
  var host = 'http://localhost:8081';
  // var host = 'http://qaweb1.zipcar.com/api/3.0';
  var endpointUrl = host + '/vehicles/nearby';

  /*==================================*\
  |         Configure defaults         |
  \*==================================*/
  var DEFAULT_LATITUDE = '42.3512914';
  var DEFAULT_LONGITUDE = '-71.0470125';

  var now = moment();
  var lastHalfHour = now.startOf('hour').add((now.minutes >= 30 ? 30 : 0), 'm');
  var DEFAULT_START_TIME = lastHalfHour.format('YYYY-MM-DDTHH:mm:ssZZ');
  var DEFAULT_END_TIME = lastHalfHour.add(1, 'h').format('YYYY-MM-DDTHH:mm:ssZZ');

  var DEFAULT_ACCOUNT_ID = 1247133268;
  var DEFAULT_DRIVER_ID = 1247131032;
  var DEFAULT_FLEXIBLE = false;
  var DEFAULT_USER_ID = 1181079380;
  /*==================================*\
  |          React Components          |
  \*==================================*/
  var FlashMessages = React.createClass({
    render: function() {
      var messages = this.props.messages;
      var clearButton;
      if (messages.length > 0) {
        clearButton =
          <button onClick={this.props.onClearFlashMessages} className='btn btn-sm btn-primary'>
            Clear
          </button>;
      }

      var formattedMessages = messages.map(function(message) {
        var className = message.className || 'warning';
        return (
          <div className={'bg-' + className + ' flash-message'}>
            <span className={'text-' + className}>
              {message.content}
            </span>
          </div>
        );
      });

      return (
        <div id='flash-messages'>
          {formattedMessages}
          {clearButton}
        </div>
      );
    }
  });

  var LoadingSpinner = React.createClass({
    render: function() {
      return (
        <div>
          Searching... <img width='25px' height='25px' src='gifs/sonic_right.gif' />
        </div>
      );
    }
  });

  var LocationSearch = React.createClass({
    getInitialState: function() {
      return {
        locations: [],
        flashMessages: [],
        isSearching: false
      };
    },
    render: function() {
      return (
        <div>
          <FlashMessages
            messages={this.state.flashMessages}
            onClearFlashMessages={this.clearFlashMessages} />
          <div className="row">
            <LocationSearchForm
              onSearch={this.handleSearch}
              onPushFlashMessage={this.handlePushFlashMessage}
              isSearching={this.state.isSearching}
            />
            <LocationsTable
              locations={this.state.locations}
              isSearching={this.state.isSearching}
            />
          </div>
        </div>
      );
    },
    handleSearch: function(params) {
      this.setState({isSearching: true});
      this.loadLocationsFromServer(params);
    },
    handlePushFlashMessage: function(message) {
      this.pushFlashMessage(message);
    },
    clearFlashMessages: function() {
      this.setState({
        flashMessages: []
      });
    },
    pushFlashMessage: function(message) {
      this.setState({
        flashMessages: this.state.flashMessages.concat([message])
      });
    },
    loadLocationsFromServer: function(params) {
      console.log('searching...');
      params['userId'] = params['userId'] || DEFAULT_USER_ID;
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
          'driver_id': params['driverId'],
          'flexible': params['flexible']
        },
        headers: {
          'Zc-User-Id': params['userId']
        },
        success: function(locations) {
          console.log('search completed');
          this.setState({locations: locations});
          this.setState({isSearching: false});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
          this.pushFlashMessage({
            content: [this.props.url, status, err.toString()].join(" "),
            className: 'danger'
          });
          this.setState({locations: []});
          this.setState({isSearching: false});
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
    handleFlexibleChange: function(event) {
      this.setState({flexible: event.target.checked});
    },
    getInitialState: function() {
      return {
        latitude: DEFAULT_LATITUDE,
        longitude: DEFAULT_LONGITUDE,
        startTime: DEFAULT_START_TIME,
        endTime: DEFAULT_END_TIME,
        accountId: DEFAULT_ACCOUNT_ID,
        driverId: DEFAULT_DRIVER_ID,
        flexible: DEFAULT_FLEXIBLE,
        userId: DEFAULT_USER_ID
      };
    },
    componentDidMount: function() {
      // this.initializeDateTimePickers();
      this.initializeGooglePlacesAutocomplete();
      this.initializeUserGeolocation();
    },
    initializeDateTimePickers: function() {
      $('#start-time-datetimepicker').datetimepicker({
        format: 'YYYY-MM-DDTHH:mm:ssZZ',
        stepping: 30
      });
      $('#end-time-datetimepicker').datetimepicker({
        format: 'YYYY-MM-DDTHH:mm:ssZZ',
        stepping: 30,
        useCurrent: false
      });
      $("#start-time-datetimepicker").on("dp.change", function(e) {
        $('#end-time-datetimepicker').data("DateTimePicker").minDate(e.date);
      });
      $("#end-time-datetimepicker").on("dp.change", function(e) {
        $('#start-time-datetimepicker').data("DateTimePicker").maxDate(e.date);
      });
    },
    initializeGooglePlacesAutocomplete: function() {
      var _this = this;

      var input = /** @type {!HTMLInputElement} */(
        document.getElementById('google-places-search-input'));

      var autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
          _this.pushFlashMessage({
            content: 'Google Places Autocomplete could not find a location :(',
            className: 'danger'
          });
          return;
        } else {
          _this.setState({
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng()
          });
        }
      });
    },
    initializeUserGeolocation: function() {
      var _this = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        _this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    },
    pushFlashMessage: function(message) {
      this.props.onPushFlashMessage(message);
    },
    search: function(event) {
      event.preventDefault();
      var _this = this;

      var requiredSearchKeys = ['latitude', 'longitude', 'startTime', 'endTime', 'accountId', 'driverId'];
      var optionalSearchKeys = ['flexible'];

      var searchParams = {};
      requiredSearchKeys.concat(optionalSearchKeys).forEach(function(key) {
        searchParams[key] = _this.state[key];
      });

      if (requiredSearchKeys.some(function(key) { return !searchParams[key]; })) {
        this.pushFlashMessage({
          content: 'Missing at least 1 required search parameter',
          className: 'danger'
        });
        return;
      } else {
        this.props.onSearch(searchParams);
      }
    },
    render: function() {
      var searchButtonClassNames = "btn btn-primary";
      var searchButtonText = "Search";
      if (this.props.isSearching) {
        searchButtonClassNames += " disabled";
        searchButtonText += "ing...";
      }

      return (
        <div className="col-sm-3">
          <form onSubmit={this.search}>
            <div className="form-group">
              <label htmlFor="google-places-search-input"> Location </label>
              <input
                id="google-places-search-input"
                className="form-control input-sm"
              />
            </div>
            <div className="form-group">
              <label htmlFor="latitude"> Latitude </label>
              <input
                id="latitude"
                className="form-control input-sm"
                type="text"
                value={this.state.latitude}
                onChange={this.handleLatitudeChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="longitude"> Longitude </label>
              <input
                id="longitude"
                className="form-control input-sm"
                type="text"
                value={this.state.longitude}
                onChange={this.handleLongitudeChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="start-time"> Start Time </label>
              <input
                id="start-time"
                className="form-control input-sm"
                type="text"
                value={this.state.startTime}
                onChange={this.handleStartTimeChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="end-time"> End Time </label>
              <input
                id="end-time"
                className="form-control input-sm"
                type="text"
                value={this.state.endTime}
                onChange={this.handleEndTimeChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="account-id"> Account Id </label>
              <input
                id="account-id"
                className="form-control input-sm"
                type="text"
                value={this.state.accountId}
                onChange={this.handleAccountIdChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="driver-id"> Driver Id </label>
              <input
                id="driver-id"
                className="form-control input-sm"
                type="text"
                value={this.state.driverId}
                onChange={this.handleDriverIdChange}
              />
            </div>
            <div class="checkbox">
              <label>
                <input
                  type="checkbox"
                  value={this.state.flexible}
                  onChange={this.handleFlexibleChange}
                />
                &nbsp;my time is flexible
              </label>
            </div>
            <input
              id="search-button"
              className={searchButtonClassNames}
              type="submit"
              value={searchButtonText}
            />
          </form>
        </div>
      );
    }
  });

  var LocationsTable = React.createClass({
    render: function() {
      var locations = this.props.locations;
      var table;

      if (this.props.isSearching) {
        table = (
          <LoadingSpinner />
        );
      } else if (locations.length > 0) {
        var vehiclesCount = this.vehiclesCount(locations);
        table = (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th> location </th>
                <th> {vehiclesCount} cars returned </th>
                <th> price </th>
              </tr>
            </thead>
            <LocationsTableBody locations={locations} />
          </table>
        );
      } else {
        table = (
          <span> No locations to display </span>
        );
      }

      return (
        <div className="col-sm-9"> {table} </div>
      );
    },
    vehiclesCount: function(locations) {
      return locations.reduce(function(acc, location) {
        return acc + location.vehicles.length;
      }, 0);
    }
  });

  var LocationsTableBody = React.createClass({
    render: function() {
      var allVehicleRows = this.props.locations.reduce(function(acc, location) {
        var vehicles = location.vehicles.map(function(vehicle, index) {
          return (
            <VehicleRow
              vehicle={vehicle}
              location={location}
              index={index}
              rowSpan={location.vehicles.length}
            />
          );
        })
        return acc.concat(vehicles);
      }, []);

      return (
        <tbody>
          {allVehicleRows}
        </tbody>
      );
    }
  });

  var LocationDataCell = React.createClass({
    render: function() {
      var location = this.props.location;
      return (
        <td className="location" rowSpan={this.props.rowSpan}>
          <label>
            <a
              className="location-address"
              data-toggle="tooltip"
              data-placement="top"
              title={this.tooltipText(location)}
            >
              {location.address}
            </a>
          </label>
          <br />
          {location.description}
          <span className='location-distance'>
            &nbsp;({this.formattedDistance(location)})
          </span>
        </td>
      );
    },
    formattedDistance: function(location) {
      return (Math.round(location.distance * 100) / 100) + " " + location.distance_unit;
    },
    tooltipText: function(location) {
      return 'location_id: ' + location.location_id + '\n' +
        'latitude: ' + location.latitude + '\n' +
        'longitude: ' + location.longitude + '\n' +
        'distance: ' + location.distance + ' ' + location.distance_unit + '\n' +
        'timezone: ' + location.timezone + '\n' +
        'in_communications: ' + location.in_communications;
    }
  })

  var VehicleRow = React.createClass({
    componentDidMount: function() {
      this.enableTooltips();
    },
    enableTooltips: function() {
      $('[data-toggle="tooltip"]').tooltip();
    },
    tooltipText: function(vehicle) {
      return 'vehicle_id: ' + vehicle.vehicle_id + '\n' +
        'pool_id: ' + vehicle.pool_id + '\n' +
        'model_id: ' + vehicle.model_id + '\n' +
        'currency_html_entity: ' + vehicle.currency_html_entity + '\n';
    },
    render: function() {
      var vehicle = this.props.vehicle;
      var dataCells = [
        <td>
          <img src={this.formattedImage(vehicle.image_url)} />
          <span className="vehicle-full-name">
            <a
              data-toggle="tooltip"
              data-placement="top"
              title={this.tooltipText(vehicle)}
            >
              {this.fullName(vehicle)}
            </a>
          </span>
        </td>,
        <td>
          {this.formattedHourlyCost(vehicle)}
          <br />
          {this.formattedDailyCost(vehicle)}
        </td>
      ];

      if (this.props.index === 0) {
        dataCells.unshift(
          <LocationDataCell location={this.props.location} rowSpan={this.props.rowSpan} />
        );
      }

      return (
        <tr>
          {dataCells}
        </tr>
      );
    },
    fullName: function(vehicle) {
      var oneWay = vehicle.unlimited ? '(one-way)' : '';
      return vehicle.make + ' ' + vehicle.model + ' "' + vehicle.name + '" ' + oneWay;
    },
    formattedHourlyCost: function(vehicle) {
      return this.formattedCost(vehicle, "hour");
    },
    formattedDailyCost: function(vehicle) {
      return this.formattedCost(vehicle, "day");
    },
    formattedCost: function(vehicle, lengthOfTime) {
      var min = lengthOfTime === "day" ? vehicle.daily_cost_min : vehicle.hourly_cost_min;
      var max = lengthOfTime === "day" ? vehicle.daily_cost_max : vehicle.hourly_cost_max;
      var symbol = vehicle.currency_html_entity;
      var result = symbol.concat(min);
      if (min !== max) {
        result.concat(" - " + symbol + max);
      }
      return result.concat(" / " + lengthOfTime);
    },
    formattedImage: function(image_url) {
      return image_url.replace('http://localhost:8081', 'http://qaweb1.zipcar.com').
        concat('&mode=med');
    }
  });

  ReactDOM.render(
    <LocationSearch url={endpointUrl} />,
    document.getElementById('entry-point')
  );
});
