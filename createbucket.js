const {S3Client, CreateBucketCommand, } = require('@aws-sdk/client-s3');
const {fromIni} = require("@aws-sdk/credential-provider-ini");
const s3Client = new S3Client({credentials: fromIni({profile:'devpd'})});
//just a reference to pass the bucketname
console.log('Usage: node s3.js <the bucket name> <the AWS Region to use>\n' +
    'Example: node createbucket.js <bucketname>');

const params = {Bucket: process.argv[2]};
  //CreateBucketConfiguration: {  LocationConstraint: "ap-southeast-1" }
console.log(params, {params}, typeof params, typeof {params});
const create = async () => {  try {
    const data = await s3Client.send(new CreateBucketCommand(params));
    console.log("Success - bucket created", data);
  } catch (err) {
    console.log("Error", err);
  }
};               
create();
