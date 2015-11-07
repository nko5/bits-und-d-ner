/**
 * Orbit
 * @return {Orbit}
 */
function Orbit() {

  if( !(this instanceof Orbit) )
    return new Orbit()

  THREE.Group.call( this )

  this.apoapsis = 100
  this.periapsis = 100

  this.ellipse = new Three.EllipseCurve(
    0, 0,
    this.apoapsis,
    this.periapsis,
    0, 2 * Math.PI,
    false
  )

  this.track = new THREE.Path( this.ellipse.getPoints( this.resolution ) )
  this.track.name = 'track'

  this.add( track )

}

/**
 * Orbit prototype
 * @type {Object}
 */
Orbit.prototype = {

  constructor: Orbit,

}

inherit( Orbit, THREE.Group )
