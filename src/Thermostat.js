function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MIN_TEMPERATURE = 10;

};

// Thermostat.prototype.reading = function () {
// return this._defaultTemperature;
// };

Thermostat.prototype.increaseTemperature = function() {
  if (this.powerSavingMode === true) {
    if (this.temperature < this.MAX_LIMIT_PSM_ON) {
      return this.temperature++;
    } else {
      return this.temperature;
    };
  } else {
    if (this.temperature < this.MAX_LIMIT_PSM_OFF) {
      return this.temperature++;
    } else {
      return this.temperature;
    };
  };

};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > this.MIN_TEMPERATURE) {
    return this.temperature--;
  }
  else {
    this.temperature;
  };
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.getEnergyUsage = function () {
  if (this.temperature < 18){
    return 'low-usage';
  } else if (this.temperature >=18 && this.temperature <25){
    return 'medium-usage';
  } else {
    return 'high-usage';
  };
};
