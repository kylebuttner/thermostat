function Thermostat(){
 this.temperature = 20;
 this.powerSavingMode = false;
};

// Thermostat.prototype.reading = function () {
// return this._defaultTemperature;
// };

Thermostat.prototype.increaseTemperature = function() {
  if (this.powerSavingMode === true) {
    if (this.temperature < 25) {
      return this.temperature++;
    } else {
      return this.temperature;
    };
  } else {
    return this.temperature++;
  };

};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > 10) {
    return this.temperature--;
  }
  else {
    this.temperature;
  };
};
