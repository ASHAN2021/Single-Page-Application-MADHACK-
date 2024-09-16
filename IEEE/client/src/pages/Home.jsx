import { useRef } from "react";
import Navbar from "../components/Navbar"
import Homesection from "../components/Homesection";
import Aboutsection1 from "../components/aboutsection1";
import Aboutsection2 from "../components/Aboutsection2";
import Timelinesection from "../components/Timelinesection";
// import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Prizesection from "../components/prizesection";
import Faqsection from "../components/Faqsection";
import Contactsection from "../components/Contactsection";





const Home = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const timelineRef = useRef(null);
    const prizesRef = useRef(null);
    const faqRef = useRef(null);
    const contactRef = useRef(null);
  
    // Function to scroll to a section
    const scrollToSection = (section) => {
      switch(section) {
        case 'home':
          homeRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'about':
          aboutRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'timeline':
          timelineRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'prizes':
          prizesRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'faq':
          faqRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'contact':
          contactRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          break;
      }
    };

    
  return (
    <>
    {/* Navbar */}
    <Navbar scrollToSection={scrollToSection} />
    {/* Sections */}
    <section ref={homeRef} className="bg-black h-screen">
        <Homesection />
      </section>

      <section ref={aboutRef} className="bg-black h-screen">
          <Aboutsection1 />
      </section>
      <section ref={aboutRef} className="bg-black h-screen">
          <Aboutsection2 />
      </section>
      <section ref={timelineRef} className="bg-black h-screen">
          <Timelinesection/>
      </section>
      <section ref={prizesRef} className="bg-black h-screen">
          <Prizesection/>
      </section>

      <section ref={faqRef} className="bg-black h-screen">
        <Faqsection />
      </section>
      <section ref={contactRef} className="bg-black h-screen">
          <Contactsection/>
      </section>
    </>
    

    
  )
}

export default Home