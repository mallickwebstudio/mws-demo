import Benefits from "./benefits";
import Feature from "./feature";
import Form from "./form";
import Hero from "./hero";
import Services from "./services";
import Stats from "./stats";
import Testimonial from "./testimonial";

export default function page() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Stats />
      <Feature />
      <Testimonial />
      <Services />
      <Form />
    </main>
  )
}
