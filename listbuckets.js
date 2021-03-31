// @ts-nocheck
  (async function () {
      const {S3Client, ListBucketsCommand, ListObjectsCommand, Bucket, ListObjectsV2Command} = require('@aws-sdk/client-s3');
      const {fromIni} = require("@aws-sdk/credential-provider-ini");
      const s3Client = new S3Client({credentials: fromIni({profile:'devpd'})});
      try {
      const results = await s3Client.send(new ListBucketsCommand({}));
      const Names = results.Buckets.map(({Name})=>{ return {Name}; }); 
      Names.forEach(Names => {
        var Bucket = Names.Name; console.log("bucket is ::::::::::::::::::::::::::",{Bucket})
        const run = async () => {
          try {
            const data = await s3Client.send(new ListObjectsCommand({Bucket}));                  
            if (data.Contents) {
              const keys = data.Contents.map(({Key})=>{ return {Key}; }); 
              console.log("Success", data.Name,keys) } 
              else {
                const rem = async () => {
                  try {
                    const data = await s3.send(new DeleteBucketCommand({Bucket}));
                    console.log("Success - bucket deleted", Bucket);
                  } catch (err) {
                    console.log("Error", err);
                  }
                };                // Invoke run() so these examples run out of the box.
                rem();
                console.log("no objects in " ,{Bucket})};
          } catch (err) {
            console.log("Error", err);
          }
        };
        run();
        //const objs =  s3Client.send(new ListObjectsCommand({Bucket}));
       // console.log(objs);
        });} catch (e) {console.log(e);}   
        
})();


//(async function () {}());
       // try { const objs = await s3Client.send(new ListObjectsV2Command({parm}));}
       // catch (e) {console.log(e);}      }
      // const Names = results.Buckets.map(({Name})=>{ return {Name}; });  
      // for(Name in Names) {
      //     console.log("For each bucket ${Names[Name]} ",Names[Name]);
      //     try {
      //      // const objs = await s3Client.send(new ListObjectsCommand(Names[Name]));}
      //       console.log("hello");}
      //       catch(err){console.log(err)}
      // }    
