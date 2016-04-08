$(function() {
  var latitude = 42.35129149999999;
  var longitude = -71.0470125;
  var startTime = '2016-04-20T12:00:00+0000';
  var endTime = '2016-04-20T13:00:00+0000';
  var accountId = 1247133268;
  var driverId = 1247131032;
  var userId = 629178709;

  $.ajax({
    type: 'get',
    url: 'http://localhost:8081/vehicles/nearby',
    data: {
      'latitude': latitude,
      'longitude': longitude,
      'start_time': startTime,
      'end_time': endTime,
      'account_id': accountId,
      'driver_id': driverId
    },
    headers: {
      'Zc-User-Id': userId
    },
    success: renderVehicles,
    error: function() {
      $('#flash').html("error :/")
    }
  });

  function renderVehicles(locations) {
    $('#flash').empty();
    console.log('locations fetched');


    var vehiclesCount = 0;
    locations.forEach(function(location, index) {
      var vehicles = location.vehicles.map(function(vehicle) {
        vehiclesCount++;
        return vehicle.make + ' ' + vehicle.model + ' ' + vehicle.name;
      }).join(', ');

      var roundedDistance = Math.round(location['distance'] * 100) / 100;

      var rowId = 'location-row-' + index;
      $('#locations-table-body').append('<tr id="' + rowId + '">' +
        '<td>' + location['address'] + '</td>' +
        '<td>' + roundedDistance + ' ' + location['distance_unit'] + '</td>' +
        '<td>' + vehicles + '</td>' +
      '</tr>');

      $('#vehicles-count').html("Number of vehicles: " + vehiclesCount);
    });
  }
});