var SPACESHIP_START_POSITION = new THREE.Vector3( 0, 0, 20 )

function putToStart( spaceship ) {
  spaceship.position.set(
    SPACESHIP_START_POSITION.x,
    SPACESHIP_START_POSITION.y,
    SPACESHIP_START_POSITION.z
  )
}

function createSpaceship( addToScene ) {
  var loader = new THREE.JSONLoader()

  loader.load('models/spaceship.json', function (geometry) {
    var material = new THREE.MeshPhongMaterial({
      color: '#ED8989',
      shading: THREE.FlatShading
    })

    var spaceship = new THREE.Mesh(
      geometry,
      material
    )

    spaceship.rotation.y = Math.PI

    putToStart( spaceship )
    addCamera( spaceship )
    addToScene( spaceship )
  })
}

function addCamera( mesh ) {
  window.spaceshipCamera = new THREE.PerspectiveCamera(
    FOV, window.innerWidth / window.innerHeight, NEAR, FAR
  )

  mesh.add( spaceshipCamera )
  mesh.rotation.y = Math.PI

  spaceshipCamera.position.z = -20
  spaceshipCamera.position.y = 12
  spaceshipCamera.lookAt( mesh.position )

  if ( !DEBUG ) {
    window.currentCamera = spaceshipCamera
  } else {
    scene.add( new THREE.CameraHelper( spaceshipCamera ) )
    mesh.add( new THREE.AxisHelper( 5 ) )
  }
}


var raytraceRotationMatrix = new THREE.Matrix4()
var raycaster = new THREE.Raycaster()
function raytrace() {
  if ( !window.spaceship ) {
    return
  }

  rotationMatrix.identity()
  rotationMatrix.extractRotation( spaceship.matrix )
  direction = direction.applyMatrix4( rotationMatrix )
  raycaster.set( spaceship.position, direction, 1, 10 )

  var intersects = raycaster.intersectObjects( scene.children )

  for ( var i = 0; i < intersects.length; i++ ) {
    if ( intersects[i].object.name === 'planet' ||
      intersects[i].object.name === 'asteroid' ) {

      createExplosion( spaceship.position )
      putToStart( spaceship )
      adjustHealthScore( -1 )
    }
  }
}
