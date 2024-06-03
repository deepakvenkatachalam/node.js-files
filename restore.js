const fs = require('fs');

const filePath = 'example.txt';
const content = 'Hello, this is some additional content!';

if (fs.existsSync(filePath)) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Content has been appended to the file.');
    });
} else {
    console.log('File does not exist.');
}
