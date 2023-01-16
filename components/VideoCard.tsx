import Image from "next/image";
import { useRouter } from "next/router";
import {format} from 'timeago.js';
import formatAgo from "../util/date";

interface VideoProps {
  video: any;
  type: string;
}

export default function VideoCard({ video, type }: VideoProps) {
  const router = useRouter();
  const { title, thumbnails, channelTitle, publishedAt, channelId, description } = video.snippet;
  const isList = type === 'list';
  const query = {id: video.id, title, channelTitle, channelId, description }
  const handleClick = () => {
    router.push({
      pathname: `/videos/watch/${video.id}`,
      query
    })
  };
  console.log(thumbnails);
  
  return (
    <li 
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={handleClick}
    >
      <Image
        className={isList ? 'w-60 h-36 mr-2' : 'w-full'}
        src={thumbnails.medium.url}
        alt={title}
        width={thumbnails.medium.width}
        height={thumbnails.medium.height}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opcity-80">{channelTitle}</p>
        <p className="text-sm opcity-80">{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}

