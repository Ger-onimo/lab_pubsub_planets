const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:click', (event) => {
    const selectedPlanet = event.detail;
    this.publishSolarSystemDetail(selectedPlanet);
  });
};

SolarSystem.prototype.publishSolarSystemDetail = function (planetIndex) {
  const selectedPlanet = this.planets[planetIndex];
  PubSub.publish('SolarSystem:clicked-planet', selectedPlanet);
};


module.exports = SolarSystem;
