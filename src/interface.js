var thermostat = new Thermostat();

$( document ).ready(function () {
  display();

  $('#increase').click(function () {
    thermostat.increase();
    display();
  });

  $('#decrease').click(function () {
    thermostat.decrease();
    display();
  });

  $('#reset').click(function () {
    thermostat.resetTemperature();
    display();
  });

  $('#PSM').click(function() {
    thermostat.powerSavingMode();
    $(this).toggleClass('toggle-button-selected');
    display();
  });

  function display(){
    $('#temperature').html(thermostat.temperature + 'ºC');
    if(thermostat.energyUsage === 'medium') {
      $('#screen').css('background-color', '#98f5c8');
    } else if(thermostat.energyUsage === 'low') {
      $('#screen').css('background-color', '#98d6f4');
    } else {
      $('#screen').css('background-color', '#f9a72a');
    }
  }

  function displayWeather(city){
    var url   = 'http://api.openweathermap.org/data/2.5/weather?q=' + city ;
    var key   = '&appid=19569d86978d1b271daecc3cb220ecd9';
    var units = '&units=metric';
    $.get( url + key + units, function(data) {
      $('#cityTemperature').text(Math.round(data.main.temp) + 'ºC')
    });
  }

  displayWeather('Quito');

  $('#selectCity').submit(function(event){
    event.preventDefault();
    var city = $('#chosenCity').val();
    displayWeather(city);
  })
});
