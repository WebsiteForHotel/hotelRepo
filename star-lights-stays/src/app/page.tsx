import { HomePage, Facilities, Contacts } from "./sections";
import WhyUs from "./sections/whyUs/WhyUs";

export default function Home() {
  return (
    <main>
      <HomePage />
      <Facilities />
      <WhyUs/>
      <Contacts/>
      
    </main>
  );
}
