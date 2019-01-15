const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function () {


};


PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:clicked-planet', (event) => {
    const planet = event.detail;
    this.render(planet);
  });
};

PlanetInfoView.prototype.render = function (planet) {
  const planetInfo = document.createElement('p');
  planetInfo.textContent = planet;
  this.container.innerHTML = '';
  this.container.appendChild(planetInfo);
};

module.exports = PlanetInfoView;
