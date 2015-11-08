function createExplosion( position ) {
  var size = 3

  var explosion = new THREE.Group()
  explosion.position.copy( position )

  for( var i = 0; i < 20; i++ ) {
    var shard = createSphere( 2 )
    shard.position.copy( randomSpherePoint() )
    shard.position.x *= size
    shard.position.y *= size
    shard.position.z *= size
    explosion.add( shard )
  }

  scene.add( explosion )
}
