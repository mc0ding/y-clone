import axios from "axios";
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
  console.log(data);
  
  return (
    <div>
      {data?.data.items.map((content: any) => content.snippet.title)}
    </div>
  );
}