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

    mesh.position.z = 550

    addToScene( mesh )
  })
}
