import templatesMarkup from './tenplates/counrtis-cadr.hbs';
import FetchCoutries from './js/fetchCountries';
import getRefs from './js/get-refs';
import renderLIstOfCountris from './tenplates/countries-list.hbs';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

const fetchCoutries = new FetchCoutries();

console.log(fetchCoutries);

const refs = getRefs();
refs.searchForm.addEventListener('input', onInputForm);

function onInputForm(evt) {
  evt.preventDefault();

  fetchCoutries.query = evt.target.value;

  fetchCoutries.fetchCountriesByMane().then(appendMarkup);
}

function appendMarkup(counrties) {
  renderLIstOfCountrisMarkup(counrties);
  console.log(counrties);
  if (counrties.length > 10) {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
      type: 'info',
    });
  } else if (counrties.length === 1) {
    const markup = templatesMarkup(counrties[0]);
    //   console.log(markup);
    refs.cardContainer.innerHTML = markup;
  } else if (counrties.length > 1) {
  }
}
function renderLIstOfCountrisMarkup(counrties) {
  const items = counrties.map(country => country.name);
  const itensMarkup = renderLIstOfCountris(items);
  refs.searchList.innerHTML = itensMarkup;
  console.log(itensMarkup);
}
