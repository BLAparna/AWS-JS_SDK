/**https://github.com/awsdocs/aws-doc-sdk-examples/blob/master/javascript/example_code/s3/s3.js
 * refer the above link for all such fun parts.
 * Better way to create bucket by passing bucket name in starting
 */
if (process.argv.length < 5   && process.argv[4] == 'CB') {
    console.log('Usage: node s3.js <the bucket name> <the AWS Region to use>\n' +
      'Example: node s3.js my-test-bucket us-east-2 CB');
    process.exit(1);
  }

//while creating a bucket if region is us-east-1, dont even mention the location  constraint
var AWS = require('aws-sdk');
var async = require ('async'); //to call ops asynchronously
//use the below when you want to mention other regions
//aws.config.update({ region: 'us-east-1'});

var credentials = new AWS.SharedIniFileCredentials({profile: 'devpd'});
AWS.config.credentials = credentials;
const s3 = new AWS.S3({
    accessKeyId: AWS.config.credentials.accessKeyId,
    secretAccessKey: AWS.config.credentials.secretAccessKey

});
if(process.argv[4] == 'CB') {
/*const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "ap-southeast-1"  
    }
};
 //for create bucket
s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});*/


}

else {
 //to list buckets in a region

//  var params = {};

// s3.listBuckets(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     else console.log('list of buckets', data);
// });
}

if (process.argv.length < 3) {
    console.log('Usage: node s3.js <the bucket name> <the AWS Region to use>\n' +
      'Example: node createbucket.js');
     var params = {};

  s3.listBuckets(params, function(err, data) {
    if (err) console.log(err, err.stack);
     else console.log('list of buckets', data.Buckets);
 });


}
