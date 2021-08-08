// import Users from '../../../src/node_models/users';
const multer = require("multer");
const path = require('path');

//middleware: upload.array()
const multerProductStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		// console.log(req.originalUrl);
		var destination = "../../../static/images/";
		
        console.log();
        
        req.destination= path.join(__dirname, destination);
        console.log(req.destination);
	  	cb(null, req.destination);
      
	},
	filename: (req, file, cb) => {
	  const ext = file.mimetype.split('/')[1];

	  
      var name = `${Date.now()}.${ext}`;
    //   var name = "sd.png";
      req.name=name;
      req.route="images/"+name;
      console.log(req.name);
      cb(null, name);
	}
  });

  const multerFilter = (req, file, cb) => {
      // console.log("file mimetype:" + file.mimetype);
	if (file.mimetype.startsWith('image')) {
	  cb(null, true);
	} else {
	  cb(new AppError('Not an image! Please upload an image.', 400), false);
	}
  };
var uploads = multer({
	storage: multerProductStorage,
  fileFilter: multerFilter,

});


module.exports = uploads;