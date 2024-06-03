const fs = require('fs');

const content = 'Hello, this is the content!';
const filePath = 'example.txt';

if (fs.existsSync(filePath)) {
  console.log('File exists.');
} else {
  console.log('File does not exist.');
}

fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been written successfully.');
});
