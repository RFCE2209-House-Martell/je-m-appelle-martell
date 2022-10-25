import generateUploadURL from './s3.js';

const s3API = {
  getSecureS3URL: (file) => {
    return generateUploadURL(file).then((res) => {
      return res;
    }).catch((err) => 'Err uploading image in api');
  }
};

export default s3API;