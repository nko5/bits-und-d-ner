ROTATION_SPEED = 0.01
THRUSTER_SPEED = 0.01
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
    bodies.spaceship.angularVelocity.x += -ROTATION_SPEED
  }

  if ( keyMap[83] ) { // S
    bodies.spaceship.angularVelocity.x += ROTATION_SPEED
  }

  // YAW
  if ( keyMap[68] ) { // D
    bodies.spaceship.angularVelocity.y += -ROTATION_SPEED
  }

  if ( keyMap[65] ) { // A
    bodies.spaceship.angularVelocity.y += ROTATION_SPEED
  }

  // ROLL
  if ( keyMap[69] ) { // E
    bodies.spaceship.angularVelocity.z += -ROTATION_SPEED
  }

  if ( keyMap[81] ) { // Q
    bodies.spaceship.angularVelocity.z += ROTATION_SPEED
  }

  // THRUSTER
  if ( keyMap[32] ) { // Space

    rotationMatrix.identity()
    rotationMatrix.extractRotation( spaceship.matrix )

    direction.x = 0
    direction.y = 0
    direction.z = THRUSTER_SPEED
    direction = direction.applyMatrix4( rotationMatrix )

    // bodies.spaceship.velocity.set( direction )

  }

}
