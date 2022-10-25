import AWS from 'aws-sdk';
const bucketName = 'front-end-capstone';
const accessKeyID = process.env.REACT_APP_AWS_ACCESS_KEY;
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;

const s3 = new AWS.S3({
  region: 'us-west-1',
  apiVersion: '2012-10-17',
  signatureVersion: 'v4',
  accessKeyId: accessKeyID,
  secretAccessKey: secretAccessKey
});

export default async function generateUploadURL(file) {
  const params = ({
    Bucket: bucketName,
    Key: file.name,
    Expires: 60,
  });

  try {
    const uploadURL = await s3.getSignedUrlPromise('putObject', params);
    return uploadURL.split('?')[0];
  } catch (err) {
    return 'Error ' + err;
  }

}