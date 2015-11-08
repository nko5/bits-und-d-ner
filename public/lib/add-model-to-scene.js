function addModelToScene( name, z, scale ) {
  var loader = new THREE.JSONLoader()

  loader.load('models/' + name + '.json', function (geometry) {
    var material = new THREE.MeshPhongMaterial({
      color: '#777',
      shading: THREE.FlatShading
    })

    mesh = new THREE.Mesh(
      geometry,
      material
    )

    mesh.material.shininess = 0
    mesh.position.z = z
    mesh.scale.x = scale
    mesh.scale.x = scale
    mesh.scale.x = scale

    mesh.name = name

    scene.add( mesh )
  })
}
