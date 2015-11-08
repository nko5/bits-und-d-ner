var EXPLOSION_TIMEOUT = 1000

var explosionColors = [
  '#FF7558',
  '#FF9858',
  '#FD575B',
  '#FFFF77'
]

var explosionMaterials = explosionColors.map( function( color ) {
  return new THREE.MeshPhongMaterial({
    color: color,
    shading: THREE.FlatShading
  })
})

function createExplosion( position ) {
  var size = 3

  var explosion = new THREE.Group()
  explosion.position.copy( position )

  for( var i = 0; i < 20; i++ ) {
    var randomIndex = Math.floor(explosionMaterials.length * Math.random())
    var material = explosionMaterials[ randomIndex ]

    // Seems to crash webGL?
    // material.opacity = 0.5
    // material.transparent = true
    // material.shininess = 0

    var shard = createSphere( 2, 0, 0, 0, material )
    shard.position.copy( randomSpherePoint() )
    shard.position.x *= size
    shard.position.y *= size
    shard.position.z *= size
    explosion.add( shard )
  }

  scene.add( explosion )

  playExplosion()

  setTimeout( function() {
    scene.remove( explosion )
  }, EXPLOSION_TIMEOUT )
}
