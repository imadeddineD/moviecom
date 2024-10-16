

import BannerHome from "@/components/BannerHome";
import HorizontalScollCard from "@/components/HorizontalScrollCard";
import Popular from "@/components/Popular";
import data from "../../movies.json";

export default function Home() {
  return (
    <>
      <main className="relative sm:mt-0 mt-16 min-h-screen">
        {/* BannerHome Section */}
        <BannerHome />

        {/* Popular Section with absolute positioning */}
        <div className="absolute bottom-0 w-full">
          <Popular />
        </div>
      </main>
      <HorizontalScollCard data={data} heading={"Trending"} trending={true}/>
    </>
  );
}




























// import BannerHome from "@/components/BannerHome";
// import Popular from "@/components/Popular";
// import data from "../../movies.json"
// import HorizontalScollCard from "@/components/HorizontalScrollCard";

// export default function Home() {

//   return (      
//         <>
//         <main  className="sm:mt-0 mt-16">
//           <BannerHome/>
//           <Popular/>
//           <HorizontalScollCard data={data} heading={"Trending"} trending={true}/>
//         </main>
//         </>  
//   );
// }
