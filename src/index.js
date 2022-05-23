import './css/styles.css';
import { fetchCountries } from '/fetchCountries.js';
import { allRefs } from './getRefs';
import { createCountryInfo, createCountryList } from './templates';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = allRefs();
const DEBOUNCE_DELAY = 300;
const MAX_NUMBER_OF_NAMES = 10;

refs.inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  const inputValue = evt.target.value.trim();

  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';

  if (!inputValue) {
    return;
  }

  fetchCountries(inputValue)
    .then(createCountries)
    .catch(error => {
      console.log('error', error)
      return Notify.failure('Oops, there is no country with that name');
    });
}

function createCountries(data) {
  if (data.length >= MAX_NUMBER_OF_NAMES) {
    return Notify.info('Too many matches found. Please enter a more specific name.');
  }

  if (data.length === 1) {
    return createCountryInfo(data);
  }
  createCountryList(data);
}

