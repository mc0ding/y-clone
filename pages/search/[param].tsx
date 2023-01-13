import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// export async function getServerSideProps(params: any) {
//   const query = params.params.param;
//   const getData = () => axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`);
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery('data', getData);
  
//   return {
//     props: {
//       query,
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   }
// }

export default function Search() {
  const router = useRouter();
  const [data, setData] = useState<[]>();
  useEffect(() => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${router.query.param}&key=${API_KEY}`).then(r => setData(r.data.items))
  }, [])
  console.log(data);
  
  // const { data } = useQuery('data', getData);
  
  const handlerClick = (id: string) => {
    router.push(`/video/${id}`)
  }
  
  return (
    <div className='grifont-dodum grid grid-cols-auto-fill auto-rows-auto gap-y-5 place-items-center'>
      {data ? data.map((content: any, index: number) =>
        <div onClick={() => handlerClick(content.id.videoId)} className=" max-w-[320px]" key={index}>
          <Image alt='thumbnails' src={content.snippet.thumbnails.medium.url} width={320} height={180} />
          <div className="text-xs font-semibold">{content.snippet.title}</div>
          <div className="text-xs">{content.snippet.channelTitle}</div>
          <div className="text-xs">{
          Math.floor((new Date().getTime() - new Date(content.snippet.publishedAt).getTime())/1000/60/60/24/30/12) > 0
          ? `${Math.floor((new Date().getTime() - new Date(content.snippet.publishedAt).getTime())/1000/60/60/24/30/12)}년 전`
          : Math.floor((new Date().getTime() - new Date(content.snippet.publishedAt).getTime())/1000/60/60/24/30) > 0
          ? `${Math.floor((new Date().getTime() - new Date(content.snippet.publishedAt).getTime())/1000/60/60/24/30)}개월 전`
          : Math.floor((new Date().getTime() - new Date(content.snippet.publishedAt).getTime())/1000/60/60/24) > 0
          ? `${Math.floor((new Date().getTime() - new Date(content.snippet.publishedAt).getTime())/1000/60/60/24)}일 전`
          : Math.floor((new Date().getTime() - new Date(content.snippet.publishedAt).getTime())/1000/60/60) > 24
          ? `${Math.floor((new Date().getTime() - new Date(content.snippet.publishedAt).getTime())/1000/60/60)}시간 전`
          : Math.floor((new Date().getTime() - new Date(content.snippet.publishedAt).getTime())/1000/60) > 60
          ? `${Math.floor((new Date().getTime() - new Date(content.snippet.publishedAt).getTime())/1000/60)}분 전`
          : '방금 전' }</div>
        </div>
      ): null}
        
    </div>
  );
}