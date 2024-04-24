import signup from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(fursstname, lastname, filename) {
  return Promise.allSettled([uploadPhoto(filename), signup(fursstname, lastname)])
    .then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return {
          status: 'fulfilled',
          value: result.value,
        };
      }
      return {
        status: 'rejected',
        reason: result.reason,
      };
    }));
}
