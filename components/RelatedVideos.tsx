import VideoCard from "./VideoCard";

interface IRelatedVideos {
  isLoading: any;
  error: any;
  videos: [];
}
export default function RelatedVideos({isLoading, error, videos}: IRelatedVideos) {
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😫</p>}
      {videos && (
        <ul>
          {videos.map((video: any) => (
            <VideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}

