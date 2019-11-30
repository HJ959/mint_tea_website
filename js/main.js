function showCat(elmnt) {
  var x = document.getElementById("draggableDivCat");
  if (x.style.display === "block") {
    x.style.display = "none";

    x.visibility = "visible";
  } else {
    x.style.display = "block";
    x.visibility = "hidden";
  }
}
function showAbout(elmnt) {
  var x = document.getElementById("draggableDivAbout");
  if (x.style.display === "block") {
    x.style.display = "none";

    x.visibility = "visible";
  } else {
    x.style.display = "block";
    x.visibility = "hidden";
  }
}

// Make the DIV element draggable:
dragElement(document.getElementById("draggableDivCat"));
dragElement(document.getElementById("draggableDivAbout"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 400, pos4 = 400;
  if (document.getElementById(elmnt.id + 'Header')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + 'Header').onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
/*
////////////////////////////////////////////////////////////////////////////////
   // taken from: https://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5
   const ctx = document.querySelector("#c").getContext("2d");
   ctx.canvas.width = window.innerWidth;
   ctx.canvas.height = window.innerHeight;
////////////////////////////////////////////////////////////////////////////////
   async function render(time) {
     time = 4000;
     resizeCanvasToDisplaySize(ctx.canvas);

     ctx.globalAlpha = 0.5;

     drawPolygon(ctx, 'rgba(0, 200, 230, 0.6)');
     drawPolygon(ctx, 'rgba(200, 50, 220, 0.4)');
     drawPolygon(ctx, 'rgba(200, 240, 0, 0.5)');
     drawPolygon(ctx, 'rgba(100, 220, 50, 0.2)');
     drawPolygon(ctx, 'rgba(0, 0, 255, 0.1)');

     ctx.save();
     ctx.restore();
     await sleep(time);
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     requestAnimationFrame(render);
   }
   requestAnimationFrame(render);
////////////////////////////////////////////////////////////////////////////////
   function resizeCanvasToDisplaySize(canvas) {
      // look up the size the canvas is being displayed
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      // If it's resolution does not match change it
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
      }
      return false;
   }
////////////////////////////////////////////////////////////////////////////////
function drawPolygon(ctx, rgbaValue) {
  ctx.beginPath();
  first_flag = true;
  randomSides = getRandomInt(2, 4);

  for (i = 0; i < randomSides; i++) {
    randomHeight1 = getRandomInt(0, ctx.canvas.height);
    randomHeight2 = getRandomInt(0, ctx.canvas.height);
    randomWidth1 = getRandomInt(0, ctx.canvas.width);
    randomWidth2 = getRandomInt(0, ctx.canvas.width);

    randomColour = getRandomInt(0, 8);

    if (first_flag === true) {
      ctx.fillStyle = rgbaValue;
      ctx.moveTo(randomHeight1, randomHeight2)
      first_flag = false;
    }
    ctx.lineTo(randomHeight2, randomWidth2)
  }
  ctx.closePath();
  ctx.fill();
  return(ctx);
}

*/
function sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
   }
////////////////////////////////////////////////////////////////////////////////
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}



  var scene = new THREE.Scene();

  // There's no reason to set the aspect here because we're going
  // to set it every frame anyway so we'll set it to 2 since 2
  // is the the aspect for the canvas default size (300w/150h = 2)
  const camera = new THREE.PerspectiveCamera(70, 2, 1, 1000);

  var renderer = new THREE.WebGLRenderer();

  // White directional light at half intensity shining from the top.
  var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  scene.add( directionalLight );

  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.SphereBufferGeometry( 400, 100, 100 );

  var wireframe = new THREE.WireframeGeometry( geometry );

  var line = new THREE.LineSegments( wireframe );
  line.material.depthTest = true;
  line.material.opacity = 0.5;
  line.material.transparent = true;

  scene.add( line );

  // Instantiate a loader
  var loader = new THREE.GLTFLoader();

  // Load a glTF resource
  loader.load(
	// resource URL
	  'media/metamaterial.glb',
	  // called when the resource is loaded
	  function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Scene
		gltf.scenes; // Array<THREE.Scene>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
	},
  // called while loading is progressing
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// called when loading has errors
	function ( error ) {
		console.log( 'An error happened' );
	}
);

  camera.position.z = 5;

  function animate(time) {
    time *= 0.001;  // seconds

    resizeCanvasToDisplaySize();

    line.rotation.x = time * 0.05;
    line.rotation.y = time * 0.01;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  // taken from Stackoverflow: https://stackoverflow.com/questions/29884485/threejs-canvas-size-based-on-container
  function resizeCanvasToDisplaySize() {
    const canvas = renderer.domElement;
    // look up the size the canvas is being displayed
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // adjust displayBuffer size to match
    if (canvas.width !== width || canvas.height !== height) {
      // you must pass false here or three.js sadly fights the browser
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      // update any render target sizes here
    }
  }
