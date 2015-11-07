document.addEventListener("keydown", function( event ) {
  // PITCH
  if ( event.keyCode === 87 ) { // W
    spaceship.rotateX( 0.1 )
  }

  if ( event.keyCode === 83 ) { // S
    spaceship.rotateX( -0.1 )
  }

  // YAW
  if ( event.keyCode === 68 ) { // D
    spaceship.rotateY( -0.1 )
  }

  if ( event.keyCode === 65 ) { // A
    spaceship.rotateY( 0.1 )
  }

  // ROLL
  if ( event.keyCode === 69 ) { // E
    spaceship.rotateZ( 0.1 )
  }

  if ( event.keyCode === 81 ) { // Q
    spaceship.rotateZ( -0.1 )
  }

});
