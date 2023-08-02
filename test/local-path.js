var localPath = process.env.USERPROFILE;
// ^Replace right hand side with the path to the directory that contains the JonasPerssonDevelops.github.io project directory

// Clean up and exporting
localPath = localPath.replace(/\\/g, '/');
module.exports = localPath;
