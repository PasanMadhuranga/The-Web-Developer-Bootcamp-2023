const fs = require('node:fs');
const folderName = process.argv[2] || 'Project';
try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }

    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (err) {
    console.log('Something went wrong!');
    console.error(err);
}

