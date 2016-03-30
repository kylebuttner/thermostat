describe('Thermostat',function(){
  var thermostat;

  beforeEach(function(){
   thermostat = new Thermostat();
  });

  it('it should start at 20degrees',function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('should increase the temperature',function(){
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toBeGreaterThan(20);
  });

  it('should decrease the temperature',function(){
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toBeLessThan(20);
  });

  it('should have a minimum temperature of 10 degreees',function(){
    for (i=0;i<11;i++) {
      thermostat.decreaseTemperature();
    };
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('should have a power saving mode',function() {
    expect(thermostat.powerSavingMode).toEqual(false);
  });

  describe('power saving mode is on',function() {
    beforeEach(function() {
      thermostat.powerSavingMode = true;
    });

    it('should have a maximum temperature of 25 degrees', function() {
      for (i=0;i<6;i++) {
        thermostat.increaseTemperature();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(25)
    });
  });
});
