/**
 * Orbit
 * @return {Orbit}
 */
function Orbit() {

  if( !(this instanceof Orbit) )
    return new Orbit()

  this.apoapsis = 100
  this.periapsis = 100

}

/**
 * Orbit prototype
 * @type {Object}
 */
Orbit.prototype = {

  constructor: Orbit,

}
