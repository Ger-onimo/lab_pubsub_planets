const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:all-planets-ready', (event) => {
    const allPlanets = event.detail;
    this.populate(allPlanets);
  });
};


module.exports = SelectView;
