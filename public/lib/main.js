// Camera clipping planes
// (from 1*10^-6 to 1*10^27 meters)
// (1 micrometer to 100 billion light years)
var FAR = 1e27
var NEAR = 0.1
var FOV = 70

var renderer = new THREE.WebGLRenderer({})
// renderer.setClearColor(new THREE.Color('lightblue'), 1)

var clock = new THREE.Clock()
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(
  FOV, window.innerWidth / window.innerHeight, NEAR, FAR
)

var controls = new THREE.OrbitControls(camera)

function resize() {

  var width = window.innerWidth
  var height = window.innerHeight

  renderer.setPixelRatio( window.devicePixelRatio )
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

  setupScene()
  resize()
  render()

})
