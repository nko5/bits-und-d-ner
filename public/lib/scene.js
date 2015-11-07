function setupScene() {

  var planet = createPlanet({
    atmosphere: true,
    clouds: true,
    radius: 300,
    x: 20,
    y: 10,
    color: new THREE.Color( '#55BB55' )
  })

  scene.add( planet )

  // Lighting
  var sunLight = new THREE.DirectionalLight()
  sunLight.castShadow = true
  sunLight.position.z = 100

  var ambientLight = new THREE.AmbientLight( 0x404040 )

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

}
