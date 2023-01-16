import Image from "next/image";

interface IChannelInfo {
  name: string;
  url: string;
}

export default function ChannelInfo({name, url}: IChannelInfo) {
  return (
    <div className="flex my-4 mb-8 items-center">
      {url && <Image className="w-10 h-10 rounded-full" src={url} alt={name} width={100} height={100} />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
}

