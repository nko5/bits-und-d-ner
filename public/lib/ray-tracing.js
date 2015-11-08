var raytraceRotationMatrix = new THREE.Matrix4()
var raycaster = new THREE.Raycaster()
function raytraceCollision() {
  if ( !window.spaceship ) {
    return
  }

  rotationMatrix.identity()
  rotationMatrix.extractRotation( spaceship.matrix )
  direction = direction.applyMatrix4( rotationMatrix )
  raycaster.set( spaceship.position, direction, 1, 10 )

  var intersects = raycaster.intersectObjects( scene.children )

  for ( var i = 0; i < intersects.length; i++ ) {
    var intersectName = intersects[i].object.name

    if ( intersectName === 'planet' ||
      intersectName === 'asteroid' ) {

      movementEnabled = false
      createExplosion( spaceship.position )
      adjustHealthScore( -1 )

      setTimeout( function() {
        putToStart( spaceship )
        movementEnabled = true
      }, 1000)
    }

    if ( intersectName === 'tv' ||
      intersectName === 'tire' ||
      intersectName === 'bin' ||
      intersectName === 'bottle' ) {
      scene.remove(intersects[i].object)
      adjustRubbishScore( 1 )
      playRubbish()
    }
  }
}
