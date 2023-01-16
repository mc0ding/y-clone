import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Youtube from "../../../api/youtube";
import YoutubeClient from "../../../api/youtubeClient";
import ChannelInfo from "../../../components/ChannelInfo";
import RelatedVideos from "../../../components/RelatedVideos";

const client = new YoutubeClient();
export const youtube = new Youtube(client);

export default function VideoDetail() {
  const router = useRouter();
  const { id, title, channelId, channelTitle, description } = router.query;
  const { data: channelUrl } = useQuery(
    ['channel', channelId],
    () => youtube.channelImageURL(typeof channelId === 'string' ? channelId : ''),
    { staleTime: 1000 * 60 * 5 }
  );
  const { isLoading, error, data: videos } = useQuery(
    ['related', id],
    () => youtube.relatedVideos(typeof id === 'string' ? id : ''),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id='player'
          width='100%'
          height='640'
          src={`https://www.youtube.com/embed/${id}`}
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo name={typeof channelTitle === 'string' ? channelTitle : ''} url={channelUrl} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos isLoading={isLoading} error={error} videos={videos} />
      </section>
    </section>
  );
}

export async function getServerSideProps(context: any) {
  const url = context.query.channelId;
  const id = context.query.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('url', () => youtube.channelImageURL(url));
  await queryClient.prefetchQuery('related', () => youtube.relatedVideos(id));
  
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}