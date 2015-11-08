ROTATION_SPEED = 0.01
THRUSTER_SPEED = 0.5
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

  if( !bodies.spaceship || !window.spaceship )
    return

  rotationMatrix.identity()
  rotationMatrix.extractRotation( spaceship.matrix )

  direction.x = 0
  direction.y = 0
  direction.z = 0

  // PITCH
  if ( keyMap[87] ) { // W
    direction.x += ROTATION_SPEED
  }

  if ( keyMap[83] ) { // S
    direction.x += -ROTATION_SPEED
  }

  // YAW
  if ( keyMap[68] ) { // D
    direction.y += -ROTATION_SPEED
  }

  if ( keyMap[65] ) { // A
    direction.y += ROTATION_SPEED
  }

  // ROLL
  if ( keyMap[69] ) { // E
    direction.z += ROTATION_SPEED
  }

  if ( keyMap[81] ) { // Q
    direction.z += -ROTATION_SPEED
  }

  direction = direction.applyMatrix4( rotationMatrix )

  bodies.spaceship.angularVelocity.x += direction.x
  bodies.spaceship.angularVelocity.y += direction.y
  bodies.spaceship.angularVelocity.z += direction.z

  // THRUSTER
  if ( keyMap[32] ) { // Space

    rotationMatrix.identity()
    rotationMatrix.extractRotation( spaceship.matrix )

    direction.x = 0
    direction.y = 0
    direction.z = THRUSTER_SPEED
    direction = direction.applyMatrix4( rotationMatrix )

    bodies.spaceship.velocity.set(
      bodies.spaceship.velocity.x + direction.x,
      bodies.spaceship.velocity.y + direction.y,
      bodies.spaceship.velocity.z + direction.z
    )

  }

}
