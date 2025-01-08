import BeyondClass from "./BeyondClass/BeyondClass"
import Carousel from "./Carousel/Carousel"
import Welcome from "./Welcome/Welcome"

const Home = () => {
  return (
    <section className="common-bg">
      <Carousel/>
      <Welcome/>
      <BeyondClass/>
    </section>
  )
}

export default Home
