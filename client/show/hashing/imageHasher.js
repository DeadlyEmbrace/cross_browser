// Generated by CoffeeScript 1.10.0
(function() {
  var emscript, hashRGB, hasher, ref, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.emscript = emscript = (ref = root.emscript) != null ? ref : Module();

  hasher = null;

  root.hashRGB = hashRGB = function(pixels) {
    var RGB, b64, i, j, ref1;
    RGB = new Uint8Array(pixels.length * 3.0 / 4.0);
    for (i = j = 0, ref1 = pixels.length / 4.0; 0 <= ref1 ? j < ref1 : j > ref1; i = 0 <= ref1 ? ++j : --j) {
      RGB[3 * i + 0] = pixels[4 * i + 0];
      RGB[3 * i + 1] = pixels[4 * i + 1];
      RGB[3 * i + 2] = pixels[4 * i + 2];
    }
    hasher = hasher != null ? hasher : emscript.cwrap('pixelsToHashCode', 'string', ['array', 'number']);
    b64 = hasher(RGB, RGB.length);
    return b64;
  };

}).call(this);