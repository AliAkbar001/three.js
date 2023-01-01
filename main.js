import * as THREE from 'three';

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

//Add Lights
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(0, 10, 10)
scene.add(light)

//What do you wanna see
const camera = new THREE.PerspectiveCamera(50, 800/600)
camera.position.z = 20
scene.add(camera)

//Render
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGL1Renderer({canvas})

//Size of renderer
renderer.setSize(800, 600)

renderer.render(scene, camera)