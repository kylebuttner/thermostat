describe('thermostat',function(){
  var thermostat

  beforeEach(function(){
   thermostat = new thermostat();
  });

  it('it should start at 20degrees',function(){
    expect(thermostat.reading).toEqual(20)
  });
});
