import Image from "next/image";
import Hero from "./_sections/Hero";
import About from "./_sections/About";
import Gallery from "./_sections/Gallery";
import Advantages from "./_sections/Advantages";
import Services from "./_sections/Services";
import Reviews from "./_sections/Reviews";
import FAQ from "./_sections/FAQ";
import Map from "./_sections/Map";
import CTA from "./_sections/CTA";
import News from "./_sections/News";
import Models from "./_sections/Models";
export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            {/* <Gallery /> */}
            <Advantages />
            <Services />
            <Models />
            <Reviews />

            <FAQ />
            <News />
            <CTA />
            <Map />
        </div>
    );
}
