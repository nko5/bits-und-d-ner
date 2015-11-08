TIMESTEP = 1 / 60

window.physics = new CANNON.World()

physics.gravity.set( 0, 0, 0 )
physics.broadphase = new CANNON.NaiveBroadphase()
physics.broadphase.useBoundingBoxes = true
physics.solver.iterations = 10

var bodies = {}

function setupPhysics() {

  bodies.planet = new CANNON.Body({ mass: 10e9 })
  bodies.planet.mesh = scene.getObjectByName( 'planet' )
  bodies.planet.addShape(
    new CANNON.Sphere(
      bodies.planet.mesh.geometry.boundingSphere.radius
    )
  )

  bodies.spaceship = new CANNON.Body({ mass: 500 })
  bodies.spaceship.mesh = scene.getObjectByName( 'spaceship' )
  bodies.spaceship.addShape(
    new CANNON.Sphere(
      bodies.spaceship.mesh.geometry.boundingSphere.radius
    )
  )

  physics.addBody( bodies.planet )
  physics.addBody( bodies.spaceship )

  bodies.planet.angularVelocity.set( 0, 0.2, 0 )

  for( var k in bodies ) {
    bodies[k].position.copy( bodies[k].mesh.position )
    bodies[k].quaternion.copy( bodies[k].mesh.quaternion )
  }

}

function resetSpaceship() {
  adjustHealthScore( -1 )
  movementEnabled = false
  setTimeout( function() {
    putToStart( spaceship )
    movementEnabled = true
  }, 1000)
}

function updatePhysics() {

  physics.step( TIMESTEP )

  for( var k in bodies ) {
    bodies[k].mesh.position.copy( bodies[k].position )
    bodies[k].mesh.quaternion.copy( bodies[k].quaternion )
  }

  var colls = physics.narrowphase.result

  for( var i = 0; i < colls.length; i++ ) {
    if( colls[i].bj === bodies.spaceship ) {
      resetSpaceship()
    }
    createExplosion( colls[i].bj.position )
  }

}
