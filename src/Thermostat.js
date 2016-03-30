function Thermostat(){
 this._defaultTemperature = 20
}

Thermostat.prototype.reading = function () {
return this._defaultTemperature;
};
