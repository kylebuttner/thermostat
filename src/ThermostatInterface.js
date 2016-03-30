var thermostat = new Thermostat();
$(document).ready(function(){
  var city;
  var temp;

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var token = '&appid=9ea5a671785aad32d59406d70b29abaf';
    var units = '&units=metric'
    $.get( url + city + units + token,function(data){
        $('#city-temp').html('Current temperature in '+ data.name + ': '+ data.main.temp + '&deg;C');
    });
  };

  $('#get-city-temp').submit(function(event) {
    event.preventDefault();
    var city = $('input[name=city]').val();
    displayWeather(city);
  });



  function updateTemperature(){
    $('#temperature').html('<div id="number">' + thermostat.getCurrentTemperature() + '</div>');
    $('#temperature').attr('class',thermostat.getEnergyUsage());
  };

  $('#temperature').html('<div id="number">' + thermostat.getCurrentTemperature() + '</div>');
  $('button#temperature-up').click(function(){
    thermostat.increaseTemperature();
     updateTemperature();
  });
  $('button#temperature-down').click(function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  });
  $('button#temperature-reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });
  $('button#powersaving-on').click(function(){
    thermostat.powerSavingMode = true;
    $('span#power-saving-status').text("on");
  });
  $('button#powersaving-off').click(function(){
    thermostat.powerSavingMode = false;
    $('span#power-saving-status').text("off");
  });
})
