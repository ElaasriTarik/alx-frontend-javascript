// import { uploadPhoto } from './uploadPhoto';
export default function uploadPhoto(filename) {
  const promise = new Promise((resolve, reject) => {
    reject(Error(`${filename} cannot be processed`));
  });
  return promise;
}
