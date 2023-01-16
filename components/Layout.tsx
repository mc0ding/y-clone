import SearchHeader from "./SearchHeader";


export default function Layout({children}:{children: any}) {
  return (
    <>
     <SearchHeader />
      <div>
        {children}
      </div> 
    </>
  );
}

