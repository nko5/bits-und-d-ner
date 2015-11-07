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

function addCamera() {
  window.spaceshipCamera = new THREE.PerspectiveCamera(
    FOV, window.innerWidth / window.innerHeight, NEAR, FAR
  )

  mesh.add( spaceshipCamera )

  spaceshipCamera.position.z = -20
  spaceshipCamera.position.y = 12
  spaceshipCamera.lookAt( mesh.position )

  if (!DEBUG) {
    window.currentCamera = spaceshipCamera
  } else {
    scene.add( new THREE.CameraHelper( spaceshipCamera ) )
    mesh.add( new THREE.AxisHelper( 5 ) )
  }
}
