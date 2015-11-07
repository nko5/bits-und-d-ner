var loader = new THREE.JSONLoader()

loader.load('models/spaceship.json', function (geometry) {
  var material = new THREE.MeshPhongMaterial({
    color: '#ed8989',
    shading: THREE.FlatShading
  })

  spaceShip = new THREE.Mesh(
    geometry,
    material
  )

  spaceShip.scale.x = 10
  spaceShip.scale.y = 10
  spaceShip.scale.z = 10

  spaceShip.position.z = 500

  scene.add(spaceShip)
})
