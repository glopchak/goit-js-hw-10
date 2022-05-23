import {allRefs} from './getRefs';
const refs = allRefs();

function createCountryInfo(data) {
  const countryMarkup = data.map(({ flags, name, capital, population, languages }) => {
    const populationCountry = population.toLocaleString();
    const languagesCountry = Object.values(languages).join(', ');
    return `
            <div class="country-list__item">
                <img src="${flags.svg}" width="100">
                <h1>${name.official}</h1>
            </div>
            <ul>
                <li><b>Capital:</b>${capital}</li>
                <li><b>Population:</b>${populationCountry}</li>
                <li><b>Languages:</b>${languagesCountry}</li>
            </ul>
            `;
  });
  refs.countryInfo.innerHTML = countryMarkup;
}

function createCountryList(data) {
  const countriesListMarkup = data
    .map(
      ({ flags, name }) => `
            <li class="country-list__item">
                <img src="${flags.svg}" width="60">
                <p>${name.official}</p>
            </li>
        `,
    )
    .join('');
  refs.countryList.innerHTML = countriesListMarkup;
}

export { createCountryInfo, createCountryList };
