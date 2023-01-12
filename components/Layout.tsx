import NavBar from "./NavBar";

export default function Layout({children}:{children: any}) {
  return (
    <>
     <NavBar />
      <div>
        {children}
      </div> 
    </>
  );
}

