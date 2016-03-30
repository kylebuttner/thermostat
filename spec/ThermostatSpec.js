describe('Thermostat',function(){
  var thermostat;

  beforeEach(function(){
   thermostat = new Thermostat();
  });

  it('it should start at 20degrees',function(){
    expect(thermostat.reading()).toEqual(20);
  });
});
