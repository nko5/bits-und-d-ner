function createAsteroid( addToScene ) {
  var loader = new THREE.JSONLoader()

  loader.load('models/asteroid.json', function (geometry) {
    var material = new THREE.MeshPhongMaterial({
      color: '#777',
      shading: THREE.FlatShading
    })

    mesh = new THREE.Mesh(
      geometry,
      material
    )

    mesh.material.shininess = 0

    mesh.scale.x = 0.1
    mesh.scale.y = 0.1
    mesh.scale.z = 0.1

    mesh.position.z = 25

    addToScene( mesh )
  })
}
