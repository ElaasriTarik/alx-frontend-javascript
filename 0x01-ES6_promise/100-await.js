import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return ({
      photo,
      user,

    });
  } catch (error) {
    return ({
      photo: null,
      user: null,
    });
  }
}