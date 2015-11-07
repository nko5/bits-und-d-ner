/**
 * OrbitHelper
 * @return {OrbitHelper}
 */
function OrbitHelper( orbit ) {

  if( !(this instanceof OrbitHelper) )
    return new OrbitHelper()

  THREE.Group.call( this )

  this.name = 'orbitHelper'

  this.orbit = orbit

  this.resolution = 640
  this.color = new THREE.Color( 'magenta' )

  this.track = new THREE.Line(
    new THREE.BoxGeometry(),
    new THREE.LineBasicMaterial({ color: this.color })
  )

  this.track.name = 'track'
  this.track.rotation.x = Math.PI / 2

  this.calculateTrack()
  this.add( this.track )

}

/**
 * OrbitHelper prototype
 * @type {Object}
 */
OrbitHelper.prototype = {

  constructor: OrbitHelper,

  calculateTrack: function() {

    var ellipse = new THREE.EllipseCurve(
      0, 0,
      this.orbit.apoapsis,
      this.orbit.periapsis,
      0, 2 * Math.PI
    )

    var ellipsePath = new THREE.Path(
      ellipse.getPoints( this.resolution )
    )

    this.track.geometry = ellipsePath.createPointsGeometry( this.resolution )
    this.rotation.z = this.orbit.inclination

  }

}

inherit( OrbitHelper, THREE.Group )
