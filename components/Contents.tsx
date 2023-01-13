import axios from "axios";
import Image from "next/image";
import { useRef } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";

export const getData = () => axios.get(`data/popular.json`);

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('data', getData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Contents(props: any) {
  const { data } = useQuery('data', getData);
  const timeRef = useRef(null);
  console.log(data);
  if (timeRef && timeRef.current) {
    const today = new Date().getTime();
    const time = new Date(timeRef.current['value']).getTime();
    let duration = (today - time)/1000/60/60/24;
    if (duration < 1) { duration = (today - time)/1000/60/60; }
  };

  
  return (
    <div className='grifont-dodum grid grid-cols-auto-fill auto-rows-auto gap-y-5 place-items-center'>
      {data?.data.items.map((content: any) =>
        <div className=" max-w-[320px]" key={content.id}>
          <Image alt='thumbnails' src={content.snippet.thumbnails.medium.url} width={content.snippet.thumbnails.medium.width} height={content.snippet.thumbnails.medium.height} />
          <div className="text-xs font-semibold">{content.snippet.title}</div>
          <div className="text-xs">{content.snippet.channelTitle}</div>
          <input type='hidden' ref={timeRef} value={content.snippet.publishedAt} />
          <div className="text-xs">{content.snippet.publishedAt}</div>
        </div>
      )}
        
    </div>
  );
}