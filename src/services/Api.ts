class Api {
  private apiUrl = 'https://api.holidu.com';
  private apiVersion = 'v6';
  private searchTerm = 'Mallorca, Spanien';

  public getOffers = () =>
    fetch(
      `${this.apiUrl}/rest/${this.apiVersion}/search/offers?searchTerm=${encodeURI(
        this.searchTerm,
      )}`,
    );
}

export default new Api();
