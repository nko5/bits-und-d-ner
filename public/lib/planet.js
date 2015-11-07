function createPlanet( options ) {

  var planet = new THREE.Mesh(
    new THREE.SphereGeometry( options.radius, options.x, options.y ),
    new THREE.MeshPhongMaterial({
      color: options.color,
      shading: THREE.FlatShading
    })
  )

  planet.name = 'planet'
  planet.castShadow = true
  planet.receiveShadow = true
  planet.material.shininess = 10

  if( options.atmosphere ) {

    var atmo = new THREE.Mesh(
      new THREE.SphereGeometry( options.radius * 1.1, options.x, options.y ),
      new THREE.MeshPhongMaterial({
        color: new THREE.Color( 'white' ),
        shading: THREE.FlatShading
      })
    )

    atmo.name = 'atmo'
    atmo.material.opacity = 0.3
    atmo.material.transparent = true
    atmo.material.shininess = 0

    planet.add( atmo )

    if( options.clouds ) {

      var cloud = null
      // debugger
      for( var i = 0; i < 20; i++ ) {
        cloud = createCloud()
        cloud.position.x *= options.radius
        cloud.position.y *= options.radius
        cloud.position.z *= options.radius
        atmo.add( cloud )
      }

    }

  }

  setInterval( function() {
    planet.rotation.y += 0.005
  }, 25)

  return planet

}

function createSphere( radius, x, y ) {
  return new THREE.Mesh(
    new THREE.SphereGeometry( radius, x, y ),
    new THREE.MeshPhongMaterial({
      color: new THREE.Color( 'white' ),
      shading: THREE.FlatShading
    })
  )
}

function createCloud() {

  var a = Math.random() * 2 - 1
  var b = Math.random() * Math.PI * 2

  var x = Math.cos( a ) * Math.cos( b )
  var y = Math.sin( b )
  var z = Math.cos( a ) * Math.sin( b )

  var r = Math.random() * 10

  var cloud = createSphere( r )

  cloud.position.x = x
  cloud.position.y = y
  cloud.position.z = z

  return cloud

}
