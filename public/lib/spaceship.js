var loader = new THREE.JSONLoader()

loader.load('models/spaceship.json', function (geometry) {
  var material = new THREE.MeshPhongMaterial({
    color: '#ed8989',
    shading: THREE.FlatShading,
    colorAmbient: [0.5, 0.5, 0.5],
    colorDiffuse: [0.5, 0.5, 0.5],
    colorSpecular: [0.9, 0.9, 0.9]
  })

  spaceShip = new THREE.Mesh(
    geometry,
    material
  )

  spaceShip.scale.x = 10
  spaceShip.scale.y = 10
  spaceShip.scale.z = 10

  spaceShip.position.z = 250

  scene.add(spaceShip)
})
