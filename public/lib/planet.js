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
      new THREE.SphereGeometry( options.radius * 1.2, options.x, options.y ),
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
        cloud.position.x *= options.radius * 1.1
        cloud.position.y *= options.radius * 1.1
        cloud.position.z *= options.radius * 1.1
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

  var cloud = new THREE.Mesh(
    new THREE.SphereGeometry( radius, x, y ),
    new THREE.MeshPhongMaterial({
      color: new THREE.Color( 'white' ),
      shading: THREE.FlatShading
    })
  )

  cloud.receiveShadow = true
  cloud.castShadow = true

  return cloud

}

function createCloud() {

  var x = Math.random() - 0.5, y = Math.random() - 0.5, z = Math.random() - 0.5
  var k = Math.sqrt( x * x + y * y + z * z )

  while ( k < 0.2 || k > 0.3 ) {
    x = Math.random() - 0.5
    y = Math.random() - 0.5
    z = Math.random() - 0.5
    k = Math.sqrt( x * x + y * y + z * z )
  }

  var r = Math.random() * 8 + 2

  var cloud = createSphere( r )

  cloud.position.x = x / k
  cloud.position.y = y / k
  cloud.position.z = z / k

  return cloud

}
