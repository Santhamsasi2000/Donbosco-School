import BeyondClass from "./BeyondClass/BeyondClass"
import Carousel from "./Carousel/Carousel"
import Message from "./Message/Message"
import Welcome from "./Welcome/Welcome"

const Home = () => {
  return (
    <section className="common-bg">
      <Carousel/>
      <Welcome/>
      <Message/>
      <BeyondClass/>
    </section>
  )
}

export default Home
