ROTATION_SPEED = 0.05
THRUSTER_SPEED = 0.25
movementEnabled = true

var keyMap = {}
var rotationMatrix = new THREE.Matrix4()
var direction = new THREE.Vector3( 0, 0, THRUSTER_SPEED )

function setKey( e ) {
  keyMap[e.keyCode] = e.type === 'keydown'
}

window.addEventListener( 'keydown', setKey )
window.addEventListener( 'keyup', setKey )

function updateSpaceship() {

  if (!movementEnabled) {
    return
  }

  // PITCH
  if ( keyMap[87] ) { // W
    spaceship.rotateX( ROTATION_SPEED )
  }

  if ( keyMap[83] ) { // S
    spaceship.rotateX( -ROTATION_SPEED )
  }

  // YAW
  if ( keyMap[68] ) { // D
    spaceship.rotateY( -ROTATION_SPEED )
  }

  if ( keyMap[65] ) { // A
    spaceship.rotateY( ROTATION_SPEED )
  }

  // ROLL
  if ( keyMap[69] ) { // E
    spaceship.rotateZ( ROTATION_SPEED )
  }

  if ( keyMap[81] ) { // Q
    spaceship.rotateZ( -ROTATION_SPEED )
  }

  if ( keyMap[74] ) { // J
    shooting = true
  } else {
    shooting = false
  }

  // THRUSTER
  if ( keyMap[32] ) { // Space

    rotationMatrix.identity()
    rotationMatrix.extractRotation( spaceship.matrix )

    direction.x = 0
    direction.y = 0
    direction.z = THRUSTER_SPEED
    direction = direction.applyMatrix4( rotationMatrix )

    spaceship.position.add( direction )

  }

}
