// Camera clipping planes
// (from 1*10^-6 to 1*10^27 meters)
// (1 micrometer to 100 billion light years)
var FAR = 1e27
var NEAR = 0.1
var FOV = 70

var renderer = new THREE.WebGLRenderer({})

var clock = new THREE.Clock()
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(
  FOV, window.innerWidth / window.innerHeight, NEAR, FAR
)

function resize() {
  
  var width = window.innerWidth
  var height = window.innerHeight
  
  renderer.setSize( width, height )
  
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  
}

function render() {
  
  // Time delta for camera controls
  var delta = clock.getDelta()
  
  window.requestAnimationFrame( render )
  renderer.render( scene, camera )
  // controls.update( delta )
  
}

window.addEventListener( 'resize', resize )
window.addEventListener( 'DOMContentLoaded', function() {
  
  document.querySelector( 'main' )
    .appendChild( renderer.domElement )
  
  resize()
  render()
  
})
