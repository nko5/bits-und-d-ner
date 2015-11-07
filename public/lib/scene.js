function setupScene() {

  var sky = createSky()
  var planet = createPlanet({
    atmosphere: true,
    clouds: true,
    radius: 300,
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
  camera.position.z = 800
  camera.position.y = 200
  camera.position.x = 200
  camera.lookAt( scene.getObjectByName( 'planet' ).position )

  // Renderer options
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.shadowMap.cullFace = THREE.CullFaceFront
  renderer.shadowMap.cascade = true

  // Helpers
  if( DEBUG ) {

    var gridHelper = new THREE.GridHelper( 1000, 100 )
    gridHelper.material.opacity = 0.3
    gridHelper.material.transparent = true

    scene.add( gridHelper )

    var axisHelper = new THREE.AxisHelper( 1000 )
    scene.add( axisHelper )

  }

}
