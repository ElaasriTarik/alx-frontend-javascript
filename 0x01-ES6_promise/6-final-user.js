import signup from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(fursstname, lastname, filename) {
  return Promise.all([uploadPhoto(filename), signup(fursstname, lastname)])
    .then((res) => [{
      status: res.status,
      value: res.value,
    },
    {
      status: res.status,
      value: res.value,
    }]).then((error) => error);
}
