function createSpaceship( addToScene ) {
  var loader = new THREE.JSONLoader()

  loader.load('models/spaceship.json', function (geometry) {
    var material = new THREE.MeshPhongMaterial({
      color: '#ed8989',
      shading: THREE.FlatShading
    })

    mesh = new THREE.Mesh(
      geometry,
      material
    )

    mesh.position.z = 20

    addCamera( mesh )
    addToScene( mesh )
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
    if ( intersects[i].object.name === 'planet' ) {
      alert( 'Bro you crashed into a planet' )
      location.reload()
    }

    if ( intersects[i].object.name === 'asteroid' ) {
      alert( 'Bro you crashed into an asteroid' )
      location.reload()
    }
  }
}
