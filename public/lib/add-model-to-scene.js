var modelLoader = new THREE.JSONLoader()

function addModelToScene( name, z, scale ) {

  modelLoader.load('models/' + name + '.json', function (geometry) {
    var material = new THREE.MeshPhongMaterial({
      color: '#777',
      shading: THREE.FlatShading
    })

    var mesh = new THREE.Mesh(
      geometry,
      material
    )

    mesh.material.shininess = 0
    mesh.position.z = z
    mesh.scale.x = scale
    mesh.scale.y = scale
    mesh.scale.z = scale

    mesh.name = name
    scene.add( mesh )
  })
}
