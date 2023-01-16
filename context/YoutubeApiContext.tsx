// import { createContext, useContext } from "react";
// import Youtube from "../api/youtube";
// import YoutubeClient from "../api/youtubeClient";

// export const YoutubeApiContext = createContext({});

// const client = new YoutubeClient();
// const value = new Youtube(client);

// export function YoutubeApiProvider({ children }: any) {
//   return (
//     <YoutubeApiContext.Provider value={ value }>
//       { children }
//     </YoutubeApiContext.Provider>
//   );
// }

// export function useYoutubeApi() {
//   return useContext(YoutubeApiContext);
// }

export default function YoutubeApiContext() {};