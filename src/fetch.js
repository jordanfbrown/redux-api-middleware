import fetch from 'isomorphic-fetch';

export default fetch = (endpoint, options) => {
  window.__fetching = true;

  console.log('fetching');

  return fetch(endpoint, options).then(() => {
    console.log('done fetching');
    window.__fetching = false;
  });
};
