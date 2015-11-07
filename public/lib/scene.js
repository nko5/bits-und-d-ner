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

  // Camera
  camera.position.z = 100
  camera.position.y = 50
  camera.position.x = 50
  camera.lookAt( scene.getObjectByName( 'planet' ).position )

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
