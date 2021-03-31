//the below code is using callback
//while creating a bucket if region is us-east-1, dont even mention the location  constraint
//const { Response } = require('aws-sdk');
const AWS = require('aws-sdk');
//AWS.config.logger = console;
var d_param;

const credentials = new AWS.SharedIniFileCredentials({profile: 'devpd'});
AWS.config.credentials = credentials;
   
const s3 = new AWS.S3 ({
        accessKeyId: AWS.config.credentials.accessKeyId,
        secretAccessKey: AWS.config.credentials.secretAccessKey  });
        
if (process.argv.length < 3) {
    console.log('Usage: node s3.js <the bucket name> <the AWS Region to use>\n' +
              'Example: node asynclist.js ');
    const params = {};
        
    s3.listBuckets(params, function(err, data) {
            if (err) console.log(err, err.stack);
             else 
             //console.log(data.Buckets); //typeof object gives the type of the object
             for (var idx in data.Buckets) {
                 var bucket = data.Buckets[idx].Name;
                  console.log(bucket) ;
                  d_param =  "'" + bucket +"'";
                 //deleBucket(d_param);
                }
         });
         debugger;        
    } 
   //ss deleBucket(d_param);
        function deleBucket(d_param) {  
                d_param = {'Bucket' : "autocred-s3"};
                console.log('\nDeleting the bucket named ' +d_param + '...\n');
                s3.deleteBucket(d_param, function(err, data) { if (err) {
            console.log("Error", err);
           } else {
           console.log("Deleted",data);
            }
         });
    


     debugger;
    }





