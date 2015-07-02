var room;
var last;
var ascii;

var broadcasting = false;
var color = false;


var client = new BinaryClient('ws://' + window.location.host + ':9001');
var stream;

var video = document.getElementById('v');
var canvas = document.getElementById('c');
console.log(canvas);
var context = canvas.getContext('2d');

var worker = new Worker("./js/render.js");
//③
worker.onmessage = draw;

client.on('open', function(){
  stream = client.createStream({room: room, type: 'read'});
  stream.on('data', function(data) {

	//①
	//worker.postMessage(data);
	//worker.postMessage({data: data, context: context});

	  var t = context.getImageData(0,0, 200, 1600);
	  t.data.set(new Uint8ClampedArray(data));
	  context.putImageData(t, 0, 0);
	  //console.log(new Uint8Array(data));

  });
});

//④
function draw(event) {
  var finalt = event.data.t;
  context.putImageData(finalt, 0, 0);
}
