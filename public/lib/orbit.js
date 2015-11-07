/**
 * Orbit
 * @return {Orbit}
 */
function Orbit() {

  if( !(this instanceof Orbit) )
    return new Orbit()

  THREE.Object3D.call( this )

}

/**
 * Orbit prototype
 * @type {Object}
 */
Orbit.prototype = {

  constructor: Orbit,

}

inherit( Orbit, THREE.Object3D )
