TIMESTEP = 1 / 60

window.physics = new CANNON.World()

physics.gravity.set( 0, 0, 0 )
physics.broadphase = new CANNON.NaiveBroadphase()
physics.broadphase.useBoundingBoxes = true
physics.solver.iterations = 10

var bodies = {}
var meshes = {}

function setupPhysics() {

  bodies.planet = new CANNON.Body({ mass: 10e9 })
  meshes.planet = scene.getObjectByName( 'planet' )
  bodies.planet.addShape(
    new CANNON.Sphere(
      meshes.planet.geometry.boundingSphere.radius
    )
  )

  bodies.spaceship = new CANNON.Body({ mass: 500 })
  meshes.spaceship = scene.getObjectByName( 'spaceship' )
  bodies.spaceship.addShape(
    new CANNON.Sphere(
      meshes.spaceship.geometry.boundingSphere.radius
    )
  )

  physics.addBody( bodies.planet )
  physics.addBody( bodies.spaceship )

  bodies.planet.angularVelocity.set( 0, 0.2, 0 )

  for( var k in bodies ) {
    bodies[k].position.copy( meshes[k].position )
    bodies[k].quaternion.copy( meshes[k].quaternion )
  }

}

function updatePhysics() {

  physics.step( TIMESTEP )

  for( var k in bodies ) {
    meshes[k].position.copy( bodies[k].position )
    meshes[k].quaternion.copy( bodies[k].quaternion )
  }

}
