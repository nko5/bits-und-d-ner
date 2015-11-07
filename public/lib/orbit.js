var G = 6.6740831 * 10e-11

/**
 * Orbit
 * @return {Orbit}
 */
function Orbit( body ) {

  if( !(this instanceof Orbit) )
    return new Orbit( body )

  this.body = body

  this.apoapsis = 200
  this.periapsis = 100
  this.eccentricity = 0
  this.inclination = 0

}

/**
 * Orbit prototype
 * @type {Object}
 */
Orbit.prototype = {

  constructor: Orbit,

}
