const fs = require('fs');
const bmp = require("bmp-js");

const args = process.argv.slice(2);

const bmpBuffer = fs.readFileSync(args[0]);
const bmpData = bmp.decode(bmpBuffer);

// Works with 8x12 tiles only for now, adapt if needed
const font_width = 8; // must be divisible with 8, but untested with != 8
const font_height = 12;
const font_total = font_height * (font_width / 8);

const x_tiles = bmpData.width / font_width;
const y_tiles = bmpData.height / font_height;
const total = x_tiles * y_tiles;

let bits = [];

for (var i = 0; i < bmpData.data.length; i += 4) {
  const A = bmpData.data[i];
  const B = bmpData.data[i + 1];
  const G = bmpData.data[i + 2];
  const R = bmpData.data[i + 3];

  const bit = A || B || G || R ? 1 : 0;
  bits.push(bit);
}

let bytes = [];

for (var j = 0; j < bits.length; j += 8) {
  const byte = (bits[j] << 7) +
        (bits[j + 1] << 6) +
        (bits[j + 2] << 5) +
        (bits[j + 3] << 4) +
        (bits[j + 4] << 3) +
        (bits[j + 5] << 2) +
        (bits[j + 6] << 1) +
        bits[j + 7];

  bytes.push(byte);
}

for (var y = 0; y < y_tiles; ++y) {
  const y_offset = y * x_tiles * font_total;

  for (var x = 0; x < x_tiles; ++x) {
    let line = '';
    const x_offset = x * (font_width / 8);

    for (var h = 0; h < font_height; ++h) {
      const offset = y_offset + x_offset + h * x_tiles;
      const byte = bytes[offset];

      line += `0x${byte.toString(16).padStart(2, "0").toUpperCase()}, `;
    }

    console.log(line);
  }
}
