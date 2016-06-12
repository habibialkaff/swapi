import * as axios from 'axios';

const cache = {};

function get(url) {
  return new Promise((resolve) => {
    if (cache[url]) {
      resolve(cache[url]);
    } else {
      axios.get(url).then(({data}) => {
        cache[url] = data;
        resolve(data);
      });
    }
  });
}

const httpRequest = {
  get
};

export {httpRequest};
