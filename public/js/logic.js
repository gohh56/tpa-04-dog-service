import { getDog } from './api.js';
import {
  renderDog,
  renderError,
} from './view.js';

const handleFormSubmit = function(id) {
  getDog(id)
    .catch(error => renderError('That dog does not exist.'))
    .then((dogData) => {
      renderDog(dogData);
    });

  //getDog(id)
  //  .then((dogData) => {
  //    if (dogData.id !== undefined) {
  //      renderDog(dogData);
  //    } else {
  //      renderError('That dog does not exist.');
  //    }
  //  });
};

export {
  handleFormSubmit,
};
