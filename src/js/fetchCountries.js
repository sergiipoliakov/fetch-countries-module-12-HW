export default class fetchCountries {
  constructor() {
    this.searchQuery = '';
  }
  fetchCountriesByMane() {
    return fetch(`https://restcountries.eu/rest/v2/name/${this.searchQuery}/`)
      .then(response => response.json())
      .then(countries => {
        // console.log(countries);
        return countries;
      });
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
    console.log(this.searchQuery);
  }
}
