// cube
function calculateCube() {
    let side = document.getElementById("cubeSide").value;
    let volume = side ** 3;
    document.getElementById("cubeOutput").innerText = `Volume: ${volume.toFixed(
      2
    )}`;
  }
  //sphere
  function calculateSphere() {
    let radius = document.getElementById("sphereRadius").value;
    let volume = (4 / 3) * Math.PI * radius ** 3;
    document.getElementById("sphereOutput").innerText = `Volume: ${volume.toFixed(
      2
    )}`;
  }
  
  // Cylinder
  function calculateCylinder() {
    let radius = document.getElementById("cylinderRadius").value;
    let height = document.getElementById("cylinderHeight").value;
    let volume = Math.PI * radius ** 2 * height;
    document.getElementById(
      "cylinderOutput"
    ).innerText = `Volume: ${volume.toFixed(2)}`;
  }
  
  // Cone
  function calculateCone() {
    let radius = document.getElementById("coneRadius").value;
    let height = document.getElementById("coneHeight").value;
    let volume = (1 / 3) * Math.PI * radius ** 2 * height;
    document.getElementById("coneOutput").innerText = `Volume: ${volume.toFixed(
      2
    )}`;
  }
  
  // Rectangular Prism
  function calculatePrism() {
    let length = document.getElementById("prismLength").value;
    let width = document.getElementById("prismWidth").value;
    let height = document.getElementById("prismHeight").value;
    let volume = length * width * height;
    document.getElementById("prismOutput").innerText = `Volume: ${volume.toFixed(
      2
    )}`;
  }
  
  // Pyramid
  function calculatePyramid() {
    let base = document.getElementById("pyramidBase").value;
    let height = document.getElementById("pyramidHeight").value;
    let volume = (1 / 3) * base ** 2 * height;
    document.getElementById(
      "pyramidOutput"
    ).innerText = `Volume: ${volume.toFixed(2)}`;
  }
  
  // Hemisphere
  function calculateHemisphere() {
    let radius = document.getElementById("hemisphereRadius").value;
    let volume = (2 / 3) * Math.PI * radius ** 3;
    document.getElementById(
      "hemisphereOutput"
    ).innerText = `Volume: ${volume.toFixed(2)}`;
  }
  
  // Tetrahedron
  function calculateTetrahedron() {
    let edge = document.getElementById("tetrahedronEdge").value;
    let volume = edge ** 3 / (6 * Math.sqrt(2));
    document.getElementById(
      "tetrahedronOutput"
    ).innerText = `Volume: ${volume.toFixed(2)}`;
  }