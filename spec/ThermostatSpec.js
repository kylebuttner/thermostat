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

  it('should have a power saving mode on by default',function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it('temperature can be reset to 20', function(){
    thermostat.increaseTemperature();
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
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

  describe('power saving mode is off', function(){
    beforeEach(function() {
      thermostat.powerSavingMode = false;
    });
    it('should have a maximum temperature of 32 degrees', function(){
      for (i=0;i<13;i++) {
        thermostat.increaseTemperature();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('energy usage', function() {

    it('displays low usage if temperature is less than 18', function(){
      for (i=0;i<4;i++){
        thermostat.decreaseTemperature();
      }
      expect(thermostat.getEnergyUsage()).toEqual('low-usage')
    });

    it('displays medium usage if temperature is between 18 and 25', function(){
      expect(thermostat.getEnergyUsage()).toEqual('medium-usage')
    });

    it('displays high usage if temperature is over 25', function(){
      for (i=0;i<6;i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.getEnergyUsage()).toEqual('high-usage')
    });
  });
});
