function createTire( addToScene ) {
  var loader = new THREE.JSONLoader()

  loader.load('models/tire.json', function (geometry) {
    var material = new THREE.MeshPhongMaterial({
      color: '#777',
      shading: THREE.FlatShading
    })

    tire = new THREE.Mesh(
      geometry,
      material
    )

    tire.material.shininess = 0

    tire.position.z = 30

    tire.name = 'tire'

    addToScene( tire )
  })
}
