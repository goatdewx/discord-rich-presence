const { readFileSync } = require('fs'),
    yaml = require('yaml');

module.exports = function (fileName) {
    return new Promise((resolve) => {
        try {
            resolve(yaml.parse(readFileSync(fileName, 'utf-8')));
        } catch (err) {
            resolve({});
            console.log("ERRO! Desbugar: " + err);
        }
    })
}