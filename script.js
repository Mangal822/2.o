function send() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chatBox");

  if (!input.value) return;

  chat.innerHTML += `<div class="user">🧑 ${input.value}</div>`;

  setTimeout(() => {
    chat.innerHTML += `<div class="ai">🤖 AI Suggestion: Automate this task using workflows.</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 800);

  input.value = "";
}

function pay() {
  alert("Stripe integration ready. Add your API key.");
}

// 3D background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bg") });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
