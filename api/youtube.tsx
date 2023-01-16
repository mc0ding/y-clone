export default class Youtube {
  private apiClient: any;
  constructor(apiClient: any) {
    this.apiClient = apiClient;
  }

  async search(keyword: string) {
    return keyword ? this.searchByKeyword(keyword) : this.mainVideos();
  }

  async channelImageURL(id: string) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id } })
      .then((res: any) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id: string) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          relatedToVideoId: id,
        },
      })
      .then((res: any) =>
        res.data.items.map((item: any) => ({ ...item, id: item.id.videoId }))
      );
  }

  private async searchByKeyword(keyword: string) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res: any) =>
        res.data.items.map((item: any) => ({ ...item, id: item.id.videoId }))
      );
  }

  private async mainVideos() {
    return this.apiClient
    .search({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: '아기 자장가 찬양',
      },
    })
    .then((res: any) =>
      res.data.items.map((item: any) => ({ ...item, id: item.id.videoId }))
    );
  }
}


// interface Item {
  //   id : {
  //     videoId : string;
  //   }
  // }