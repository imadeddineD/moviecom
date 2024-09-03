import BannerHome from "@/components/BannerHome";
import Popular from "@/components/Popular";
import data from "../../movies.json"
import HorizontalScollCard from "@/components/HorizontalScrollCard";

export default function Home() {

  return (      
        <>
        <main  className="sm:mt-0 mt-16">
          <BannerHome/>
          <Popular/>
          <HorizontalScollCard data={data} heading={"Trending"} trending={true}/>
        </main>
        </>  
  );
}
