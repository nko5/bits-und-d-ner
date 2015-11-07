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

  this.resolution = 640
  this.color = new THREE.Color( 'magenta' )

  this.ellipse = new THREE.EllipseCurve(
    0, 0,
    this.apoapsis,
    this.periapsis,
    0, 2 * Math.PI
  )

  this.ellipsePath = new THREE.Path(
    this.ellipse.getPoints( this.resolution )
  )

  this.track = new THREE.Line(
    this.ellipsePath.createPointsGeometry( this.resolution ),
    new THREE.LineBasicMaterial({ color: this.color })
  )

  this.track.name = 'track'
  this.track.rotation.x = Math.PI / 2

  this.add( this.track )

}

/**
 * Orbit prototype
 * @type {Object}
 */
Orbit.prototype = {

  constructor: Orbit,

}

inherit( Orbit, THREE.Group )
