import * as three from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Create a new scene
const scene = new three.Scene()

// Create a new geometry
const geometry = new three.BoxGeometry(1, 1)

// Create a new material
const material = new three.MeshBasicMaterial({ color: 0xff0000 })

// Create a new mesh
const mesh = new three.Mesh(geometry, material)

// Add the mesh to the scene
scene.add(mesh)

// Set sizes of the renderer
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// Create a new camera (FoF, Aspect Ratio, Near, Far)
const camera = new three.PerspectiveCamera(75, sizes.width / sizes.height)

// Set the position of the camera
camera.position.z = 3

// Add the camera to the scene
scene.add(camera)

// Renderer
const renderer = new three.WebGLRenderer({
  canvas: canvas
})

// Set the size of the renderer
renderer.setSize(sizes.width, sizes.height)

// Render the scene
renderer.render(scene, camera)
