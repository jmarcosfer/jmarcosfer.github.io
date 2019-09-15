function byId(id) { return document.getElementById(id); }

const hxCanvas = byId('hx-canvas');
const hxc = hxCanvas.getContext('2d');
const hxImg = byId('hexadrum');

function setCanvas() 
{
  hxCanvas.style.left = hxImg.offsetLeft +'px';
  hxCanvas.style.top = hxImg.offsetTop +'px';

  hxCanvas.setAttribute('width', hxImg.clientWidth +'px');
  hxCanvas.setAttribute('height', hxImg.clientHeight +'px');

  hxc.fillStyle = 'rgba(249, 179, 95, 0.4)';
  hxc.strokeStyle = 'rgba(247, 148, 29, 0.6)';
  hxc.lineWidth = 1;
  hxc.lineJoin = 'round';
}

function drawPoly(coordStr) 
{
  let mCoords = coordStr.split(',');
  let i, n;
  n = mCoords.length;

  hxc.beginPath();
  hxc.moveTo(mCoords[0], mCoords[1]);
  for (i=2; i<n; i+=2)
  {
    hxc.lineTo(mCoords[i], mCoords[i+1]);
  }

  hxc.lineTo(mCoords[0], mCoords[1]);
  hxc.stroke();
  hxc.fill();
}

function myLeave()
{
  hxc.clearRect(0, 0, hxCanvas.width, hxCanvas.height);
}

function myHover(element)
{
  let areaCoords = element.getAttribute('coords');
  drawPoly(areaCoords);
}

// function myClick(element)
// {
//   hxc.fillStyle = 'rgba(249, 179, 95, 1)';
//   myHover(element);
// }

// function myClickOut()
// {
//   myLeave();
// }

$( setCanvas() );

window.onresize = () => {
  setCanvas();
};