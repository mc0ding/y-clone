import { dehydrate, QueryClient, useQuery } from "react-query";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";
import VideoCard from "../components/VideoCard";

const client = new YoutubeClient();
export const youtube = new Youtube(client);

export default function Home() {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos'], () => youtube.search(''), {
    staleTime: 1000 * 60 * 1,
  });
  return (
    <>
    {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😫</p>}
      {videos && (
        <ul className="px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video: any) => (
            <VideoCard key={video.id} video={video} type='' />
          ))}
        </ul>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  const data = await queryClient.prefetchQuery('data', () => youtube.search(''));  

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}