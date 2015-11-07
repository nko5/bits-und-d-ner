function createAsteroid( addToScene ) {
  var loader = new THREE.JSONLoader()

  loader.load('models/asteroid.json', function (geometry) {
    var material = new THREE.MeshPhongMaterial({
      color: '#777',
      shading: THREE.FlatShading
    })

    asteroid = new THREE.Mesh(
      geometry,
      material
    )

    asteroid.material.shininess = 0

    asteroid.scale.x = 0.1
    asteroid.scale.y = 0.1
    asteroid.scale.z = 0.1

    asteroid.position.z = 25

    asteroid.name = 'asteroid'

    addToScene( asteroid )
  })
}
