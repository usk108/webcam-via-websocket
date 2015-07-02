

//②
    this.onmessage = function(event) {

      var data = event.data.data;

      var t = event.data.context.getImageData(0,0, 200, 1600);
      t.data.set(new Uint8ClampedArray(data));

      postMessge({t:t})
      //event.data.context.putImageData(t, 0, 0);

      //postMessage({str: strChars, buf: buf});
    }

