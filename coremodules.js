 const path = require('path'); // we import the path module
 const filename = path.join(__filename); //to find file name
 const basename = path.basename(filename); //to find base 
 const extname = path.extname(basename);
 console.log(filename);
 console.log(basename);
 console.log(extname)