function setupScene() {

  var sky = createSky()
  var planet = createPlanet({
    atmosphere: true,
    clouds: true,
    radius: 10,
    x: 20,
    y: 10,
    color: new THREE.Color( '#55BB55' )
  })

  createSpaceship( function( mesh ) {
    window.spaceship = mesh
    scene.add( mesh )
  })

  createAsteroid( function( mesh ) {
    scene.add( mesh )
  })

  scene.add( sky )
  scene.add( planet )

  var sunLight = new THREE.PointLight()
  sunLight.name = 'sunlight'
  sunLight.castShadow = true
  sunLight.position.z = 1000

  var ambientLight = new THREE.AmbientLight( 0x101010 )

  scene.add( sunLight )
  scene.add( ambientLight )

  window.sceneCamera = new THREE.PerspectiveCamera(
    FOV, window.innerWidth / window.innerHeight, NEAR, FAR
  )
  var controls = new THREE.OrbitControls(sceneCamera)

  // sceneCamera
  sceneCamera.position.z = 100
  sceneCamera.position.y = 50
  sceneCamera.position.x = 50
  sceneCamera.lookAt( scene.getObjectByName( 'planet' ).position )
  window.currentCamera = sceneCamera

  // Renderer options
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.shadowMap.cullFace = THREE.CullFaceBack
  renderer.shadowMap.cascade = true

  // Helpers
  if( DEBUG ) {

    var sunLightHelper = new THREE.PointLightHelper( sunLight, 10 )
    scene.add( sunLightHelper )

    var gridHelper = new THREE.GridHelper( 1000, 100 )
    gridHelper.material.opacity = 0.3
    gridHelper.material.transparent = true

    scene.add( gridHelper )

    var axisHelper = new THREE.AxisHelper( 1000 )
    scene.add( axisHelper )

  }

}
