import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsSearch } from 'react-icons/bs';

export default function NavBar() {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(search);
    router.push(`/${search}`);
  }
  return (
    <div className="flex pt-6 pb-6">
      <Link className="ml-3 mr-auto max-sm:mr-0" href="/">
        <Image alt='logo' src='/logo.jpg' width={100} height={10} />
      </Link>
      <form className="flex mr-auto max-sm:ml-auto">
          <input onChange={handleChange} className="w-[30rem] max-sm:w-40 border-2 border-black rounded-lg rounded-tr-none rounded-br-none pl-3" placeholder="Search..." />
          <button onClick={handleSubmit} className="border-2 border-stone-400 bg-stone-400 rounded-tl-none rounded-bl-none rounded-lg p-2">
            <BsSearch size={30} color={'white'} />
          </button>
      </form>
    </div>
  );
}

