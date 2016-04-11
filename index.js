var fs = require('fs');
var path = require('path');

var svgRE = /^(.*)\.svg$/;

module.exports = fs.readdirSync(__dirname)
    .reduce(function(icons, iconFilename) {
        var match = svgRE.exec(iconFilename);
        if(match && iconFilename != 'background.svg') {
            icons[match[1]] = path.join(__dirname, iconFilename);
        }
        return icons;
    }, {});
