var s3 = require("aws-sdk/clients/s3");
var {s3,listBuckets}  
const params = {
region:"us-east-1"
};
s3.listBuckets(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
  