// Camera clipping planes
// (from 1*10^-6 to 1*10^27 meters)
// (1 micrometer to 100 billion light years)
var FAR = 1e27
var NEAR = 0.1
var FOV = 70

var fps = new Stats()
var ms = new Stats()
var mb = new Stats()

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

  if( DEBUG ) {
    fps.begin()
    ms.begin()
    mb.begin()
  }

  // Time delta for camera controls
  var delta = clock.getDelta()

  renderer.render( scene, camera )
  // controls.update( delta )

  if( DEBUG ) {
    fps.end()
    ms.end()
    mb.end()
  }

  window.requestAnimationFrame( render )

}

function addStats() {

  fps.setMode( 0 )
  fps.domElement.style.position = 'absolute'
  fps.domElement.style.right = '0px'
  fps.domElement.style.bottom = '0px'

  ms.setMode( 1 )
  ms.domElement.style.position = 'absolute'
  ms.domElement.style.right = '80px'
  ms.domElement.style.bottom = '0px'

  mb.setMode( 2 )
  mb.domElement.style.position = 'absolute'
  mb.domElement.style.right = '160px'
  mb.domElement.style.bottom = '0px'

  document.body.appendChild( fps.domElement )
  document.body.appendChild( ms.domElement )
  document.body.appendChild( mb.domElement )

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
