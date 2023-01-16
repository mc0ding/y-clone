import axios from 'axios';

export default class YoutubeClient {
  private httpClient: any;
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params: string) {
    return this.httpClient.get('search', params);
  }

  async videos(params: string) {
    return this.httpClient.get('videos', params);
  }

  async channels(params: string) {
    return this.httpClient.get('channels', params);
  }
}
