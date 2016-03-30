describe('Feature',function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  describe('can increase the temperature',function(){
    thermostat.up
    expect(thermostat.temperature).toBeGreaterThan(20);
  });
});
