function createTv( addToScene ) {
  var loader = new THREE.JSONLoader()

  loader.load('models/tv.json', function (geometry) {
    var material = new THREE.MeshPhongMaterial({
      color: '#777',
      shading: THREE.FlatShading
    })

    tv = new THREE.Mesh(
      geometry,
      material
    )

    tv.material.shininess = 0

    tv.position.z = 35

    tv.name = 'tv'

    addToScene( tv )
  })
}
