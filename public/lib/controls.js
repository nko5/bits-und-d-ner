ROTATION_SPEED = 0.1
THRUSTER_SPEED = 0.5

var map = []
onkeydown = onkeyup = function( e ){
  map[e.keyCode] = e.type === 'keydown'
}

function updateSpaceship() {
  // PITCH
  if ( map[87] ) { // W
    spaceship.rotateX( ROTATION_SPEED )
  }

  if ( map[83] ) { // S
    spaceship.rotateX( -ROTATION_SPEED )
  }

  // YAW
  if ( map[68] ) { // D
    spaceship.rotateY( -ROTATION_SPEED )
  }

  if ( map[65] ) { // A
    spaceship.rotateY( ROTATION_SPEED )
  }

  // ROLL
  if ( map[69] ) { // E
    spaceship.rotateZ( ROTATION_SPEED )
  }

  if ( map[81] ) { // Q
    spaceship.rotateZ( -ROTATION_SPEED )
  }

  // THRUSTER
  if ( map[32] ) { // Space
    var matrix = new THREE.Matrix4()
    matrix.extractRotation( spaceship.matrix )

    var direction = new THREE.Vector3( 0, 0, THRUSTER_SPEED )
    direction = direction.applyMatrix4( matrix )

    spaceship.position.add( direction )
  }
}
