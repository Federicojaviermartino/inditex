const fs = require('fs');

function readJSONFile(filePath) {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
}