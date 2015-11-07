document.addEventListener("keydown", function( event ) {
  // PITCH
  if ( event.keyCode === 87 ) { // W
    spaceship.rotation.x -= 0.1
  }

  if ( event.keyCode === 83 ) { // S
    spaceship.rotation.x += 0.1
  }

  // YAW
  if ( event.keyCode === 68 ) { // D
    spaceship.rotation.y -= 0.1
  }

  if ( event.keyCode === 65 ) { // A
    spaceship.rotation.y += 0.1
  }

  // ROLL
  if ( event.keyCode === 69 ) { // E
    spaceship.rotation.z -= 0.1
  }

  if ( event.keyCode === 81 ) { // Q
    spaceship.rotation.z += 0.1
  }

});
