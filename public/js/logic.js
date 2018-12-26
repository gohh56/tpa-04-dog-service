import { getDog } from './api.js';
import {
  renderDog,
  renderError,
} from './view.js';

const handleFormSubmit = function(id) {
  getDog(id)
    .then((dogData) => {
      renderDog(dogData);
    })
    .catch(() => {
      renderError('That dog does not exist.');
    });
};

export {
  handleFormSubmit,
};
