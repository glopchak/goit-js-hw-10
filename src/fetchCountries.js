const BASE_URL = 'https://restcountries.com/v3.1/name/';
const options = '?fields=name,capital,population,flags,languages';

export  function fetchCountries(name) {
  const url = `${BASE_URL}${name}${options}`;
  return fetch(url).then(res => {
    if (res.ok) {
     return res.json();
    }
    throw new Error(res);
  });
}

// export async function fetchCountries(name) {
//   const res = await fetch`${BASE_URL}${name}${options}`;
//   if (res.ok) {
//     return res.json();
//   }
//   throw new Error(res.statusText);
// }
