class Api {
  public searchTerm: string;

  private apiUrl = 'https://api.holidu.com';
  private apiVersion = 'v6';

  public getOffers = () =>
    fetch(
      `${this.apiUrl}/rest/${this.apiVersion}/search/offers?searchTerm=${encodeURI(
        this.searchTerm,
      )}`,
    );
}

export default new Api();
