var Cloudinary = require('cloudinary');

Cloudinary.config({ 
  cloud_name: process.env.cloudinary_cloud_name, 
  api_key: process.env.cloudinary_api_key, 
  api_secret: process.env.cloudinary_secret
});

Cloudinary.api.delete_resources_by_prefix('spots/', function(result){});
