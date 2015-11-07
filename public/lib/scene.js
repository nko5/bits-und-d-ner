function setupScene() {

  var planet = createPlanet({
    atmosphere: true,
    clouds: true,
    radius: 100,
    x: 20,
    y: 10,
    color: new THREE.Color( '#55BB55' )
  })

  scene.add( planet )

  // Lighting
  var sunLight = new THREE.DirectionalLight()
  sunLight.castShadow = true
  sunLight.position.z = 100

  scene.add( sunLight )

  // Camera
  camera.position.z = 500
  camera.position.y = 200
  camera.position.x = 200
  camera.lookAt( scene.getObjectByName( 'planet' ).position )

  // Renderer options
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.shadowMap.cullFace = THREE.CullFaceFront
  renderer.shadowMap.cascade = true

}
