import HeroPage from "./HeroPage";
import Listing from "./Listing";
import ShowDate from "./ShowDate";

const Homepage = () => {

  return (
    <section className="HomePage">
       <HeroPage />
       <ShowDate />
       <Listing />
    </section>
  )
}

export default Homepage;