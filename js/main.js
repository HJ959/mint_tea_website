function showAbout() {
  var x = document.getElementById("draggable_div");
  if (x.style.display === "block") {
    x.style.display = "none";

    x.visibility = "visible";
  } else {
    x.style.display = "block";
    x.visibility = "hidden";
  }
}


// Make the DIV element draggable:
dragElement(document.getElementById("draggable_div"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
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

////////////////////////////////////////////////////////////////////////////////
   // taken from: https://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5
   const ctx = document.querySelector("#c").getContext("2d");
   ctx.canvas.width = window.innerWidth;
   ctx.canvas.height = window.innerHeight;
////////////////////////////////////////////////////////////////////////////////
   async function render(time) {
     time = 4000;
     resizeCanvasToDisplaySize(ctx.canvas);

     //ctx.globalAlpha = 0.5;
     drawPolygon(ctx, 'rgba(0, 200, 200, 0.6)');
     drawPolygon(ctx, 'rgba(200, 50, 200, 0.4)');
     drawPolygon(ctx, 'rgba(200, 200, 0, 0.5)');


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

  for (i = 0; i < 3; i++) {
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
////////////////////////////////////////////////////////////////////////////////
// Changes the RGB/HEX temporarily to a HSL-Value, modifies that value
// and changes it back to RGB/HEX.

function changeHue(rgb, degree) {
    var hsl = rgbToHSL(rgb);
    hsl.h += degree;
    if (hsl.h > 360) {
        hsl.h -= 360;
    }
    else if (hsl.h < 0) {
        hsl.h += 360;
    }
    return hslToRGB(hsl);
}

// exepcts a string and returns an object
function rgbToHSL(rgb) {
    // strip the leading # if it's there
    rgb = rgb.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(rgb.length == 3){
        rgb = rgb.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(rgb.substr(0, 2), 16) / 255,
        g = parseInt(rgb.substr(2, 2), 16) / 255,
        b = parseInt(rgb.substr(4, 2), 16) / 255,
        cMax = Math.max(r, g, b),
        cMin = Math.min(r, g, b),
        delta = cMax - cMin,
        l = (cMax + cMin) / 2,
        h = 0,
        s = 0;

    if (delta == 0) {
        h = 0;
    }
    else if (cMax == r) {
        h = 60 * (((g - b) / delta) % 6);
    }
    else if (cMax == g) {
        h = 60 * (((b - r) / delta) + 2);
    }
    else {
        h = 60 * (((r - g) / delta) + 4);
    }

    if (delta == 0) {
        s = 0;
    }
    else {
        s = (delta/(1-Math.abs(2*l - 1)))
    }

    return {
        h: h,
        s: s,
        l: l
    }
}

// expects an object and returns a string
function hslToRGB(hsl) {
    var h = hsl.h,
        s = hsl.s,
        l = hsl.l,
        c = (1 - Math.abs(2*l - 1)) * s,
        x = c * ( 1 - Math.abs((h / 60 ) % 2 - 1 )),
        m = l - c/ 2,
        r, g, b;

    if (h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else {
        r = c;
        g = 0;
        b = x;
    }

    r = normalize_rgb_value(r, m);
    g = normalize_rgb_value(g, m);
    b = normalize_rgb_value(b, m);

    return rgbToHex(r,g,b);
}

function normalize_rgb_value(color, m) {
    color = Math.floor((color + m) * 255);
    if (color < 0) {
        color = 0;
    }
    return color;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
