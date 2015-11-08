// Camera clipping planes
// (from 1*10^-6 to 1*10^27 meters)
// (1 micrometer to 100 billion light years)
var FAR = 1e6
var NEAR = 0.1
var FOV = 70

var fps = new Stats()

var renderer = new THREE.WebGLRenderer()
renderer.setClearColor(new THREE.Color('lightblue'), 1)

var clock = new THREE.Clock()
var scene = new THREE.Scene()

function resize() {

  var width = window.innerWidth
  var height = window.innerHeight

  renderer.setPixelRatio( window.devicePixelRatio )
  renderer.setSize( width, height )

  currentCamera.aspect = width / height
  currentCamera.updateProjectionMatrix()

}

function render() {

  if ( DEBUG ) {
    fps.begin()
  }

  // Time delta for camera controls
  var delta = clock.getDelta()

  updatePhysics()
  updateSpaceship()
  raytraceCollision()

  renderer.render( scene, window.currentCamera )

  if( DEBUG ) {
    fps.end()
  }

  window.requestAnimationFrame( render )

}

function addStats() {

  fps.setMode( 0 )
  fps.domElement.style.position = 'absolute'
  fps.domElement.style.bottom = '0px'

  document.body.appendChild( fps.domElement )

}

window.addEventListener( 'resize', resize )
window.addEventListener( 'DOMContentLoaded', function() {

  document.querySelector( 'main' )
    .appendChild( renderer.domElement )

  if( DEBUG ) {
    addStats()
  }

  setupScene()
  resize()
  render()

})
