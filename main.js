import * as THREE from 'three';
import "./style.css"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls" 

const scene = new THREE.Scene()

//Shape
const geometry =  new THREE.SphereGeometry(3, 64, 64)

//How its look like
const material = new THREE.MeshStandardMaterial({
    color: "#00ff83"
})

//Combination of geometry and material
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Size
const size = {
  width: window.innerWidth,
  height: window.innerHeight
}

//Add Lights
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(0, 10, 10)
scene.add(light)

//What do you wanna see
const camera = new THREE.PerspectiveCamera(50, size.width / size.height, 0.1, 100)
camera.position.z = 15
scene.add(camera)


//Render
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGL1Renderer({canvas})

//Size of renderer
renderer.setSize(size.width, size.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)

//Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = true
controls.enableZoom = true
controls.autoRotate = true
controls.autoRotateSpeed = 5

//Dynamic Size
window.addEventListener("resize", ()=>{
  //Update Size
  size.width = window.innerWidth,
  size.height = window.innerHeight

  //Update Camera
  camera.aspect = size.width/size.height
  camera.updateProjectionMatrix()
  renderer.setSize(size.width, size.height)
})

const loop = () =>{
  //Update Control
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}

loop()