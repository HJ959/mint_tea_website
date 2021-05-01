function showCat() {
  var x = document.getElementById("draggableDivCat");
  if (x.style.display === "block") {
    x.style.display = "none";

    x.visibility = "visible";
  } else {
    x.style.display = "block";
    x.visibility = "hidden";
  }
}
function showAbout() {
  var x = document.getElementById("draggableDivAbout");
  if (x.style.display === "block") {
    x.style.display = "none";

    x.visibility = "visible";
  } else {
    x.style.display = "block";
    x.visibility = "hidden";
  }
}

function catCycleNext() {
  var elmntNext = document.getElementById("nextButton");
  var elmntPrevious = document.getElementById("previousButton");
  var buttonValue = elmntNext.value;

  buttonValue++
  if (buttonValue == 8) {
    buttonValue = 0;
  }
  returnCatInfo(buttonValue);
  elmntNext.value = buttonValue;
}

function catCyclePrevious() {
  var elmntNext = document.getElementById("nextButton");
  var elmntPrevious = document.getElementById("previousButton");
  var buttonValue = elmntNext.value;

  buttonValue--
  if (buttonValue == -1) {
    buttonValue = 7;
  }
  returnCatInfo(buttonValue);
  elmntNext.value = buttonValue;
}

// displays the selected div on the catalogue screen
function returnCatInfo(buttonValue) {
  var catIDList = ['catMT001', 'catMT002', 'catMT003', 'catMT004', 'catMTUSB01', 'catMTWL001', 'catMTUSB002', 'catMT005'];
  for (item in catIDList) {
    var itemID = document.getElementById(catIDList[item]);
    itemID.style.display = "none";
  }
  var catID = document.getElementById(catIDList[buttonValue]);
  catID.style.display = "inline";
  console.log(catID.display);
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
  var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
  scene.add( directionalLight );

  // Create a material
  var textureLoader = new THREE.TextureLoader();
  var map = textureLoader.load('media/parts.png');
  var materialColour = new THREE.MeshPhongMaterial({map: map});

  // instantiate a loader
  var loader = new THREE.OBJLoader();

  // load a resource
  loader.load(
  	// resource URL
  	'media/space_shuttle_shard.obj',
  	// called when resource is loaded
  	function ( object ) {

  		scene.add( object );
      object.name = "spaceShuttle";
      spaceShuttle = scene.getObjectByName( "spaceShuttle" );

      // For any meshes in the model, add our material.
      object.traverse( function ( node ) {
        if ( node.isMesh ) node.material = materialColour;
      } );

  	},
  	// called when loading is in progresses
  	function ( xhr ) {

  		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

  	},
  	// called when loading has errors
  	function ( error ) {

  		console.log( 'An error happened' );

  	}
  );

  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.SphereBufferGeometry( 400, 100, 100 );

  var wireframe = new THREE.WireframeGeometry( geometry );

  var line = new THREE.LineSegments( wireframe );
  line.material.depthTest = true;
  line.material.opacity = 0.5;
  line.material.transparent = true;

  var spaceShuttle = 'undefined';

  scene.add( line );

  camera.position.z = 5;

  function animate(time) {
    time *= 0.001;  // seconds

    resizeCanvasToDisplaySize();

    line.rotation.x = time * 0.05;
    line.rotation.y = time * 0.01;

    if (spaceShuttle !== 'undefined') {
      spaceShuttle.rotation.x = time * 0.03;
      spaceShuttle.rotation.y = time * 0.02;
    }

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
