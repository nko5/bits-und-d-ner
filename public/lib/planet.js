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
        color: new THREE.Color( '#AAEEFF' ),
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

      for( var i = 0; i < 20; i++ ) {
        cloud = createCloud()
        cloud.position.x *= options.radius * 1.1
        cloud.position.y *= options.radius * 1.1
        cloud.position.z *= options.radius * 1.1
        atmo.add( cloud )
      }

    }

  }

  return planet

}

function createSky() {

  var sky = new THREE.Group()

  for( var i = 0; i < 100; i++ ) {
    star = createStar()
    star.position.x *= 10000
    star.position.y *= 10000
    star.position.z *= 10000
    sky.add( star )
  }

  return sky

}

function createStar() {

  var r = 10

  var star = createSphere( r, 2, 2 )

  star.receiveShadow = false
  star.castShadow = false

  star.material = createStar.material
  star.position.copy( randomSpherePoint() )

  return star

}

createStar.material = new THREE.MeshBasicMaterial({
  color: new THREE.Color( 'white' )
})

function createCloud() {

  var r = Math.random() * 0.5 + 0.2

  var cloud = createSphere( r )

  cloud.position.copy( randomSpherePoint() )

  return cloud

}
