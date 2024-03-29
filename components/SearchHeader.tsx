import { useRouter } from "next/router";
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SearchHeader() {
  const router = useRouter();
  const keyword = router.query.param;
  const [text, setText] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/videos/${text}`);
  };
  useEffect(() => {
    if(router.pathname === "/videos/[param]" || router.pathname === "/") {
      setText(keyword && typeof keyword === 'string' ? keyword : '') 
    }} , [keyword, router.pathname])

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link href='/' className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

