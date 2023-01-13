import { useRouter } from "next/router";

export default function VideoId() {
  const router = useRouter();
  
  return (
    <div>
      <iframe id="ytplayer" width="720" height="405"
              src={`https://www.youtube.com/embed/${router.query.id}`}></iframe>
    </div>
  );
}

