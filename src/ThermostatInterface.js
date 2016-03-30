var thermostat = new Thermostat();
$(document).ready(function(){

  function updateTemperature(){
    $('h1#temperature').text(thermostat.getCurrentTemperature());
    $('h1#temperature').attr('class',thermostat.getEnergyUsage());
  };

  $('h1#temperature').text(thermostat.getCurrentTemperature());
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
