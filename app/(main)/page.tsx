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
import type { Metadata } from "next";
import { Online } from "@/src/components/Online";

export const metadata: Metadata = {
    title: "Продажа и обслуживание спецтехники разного профиля | Волга Трак Центр",
    description:
        "Волга Трак Центр предлагает широкий ассортимент грузовиков, тягачей и самосвалов, а также профессиональное обслуживание и ремонт. Найдите идеальный грузовик для вашего бизнеса с нами.",
    keywords:
        "Волга Трак Центр, продажа тягачей, продажа самосвалов, обслуживание грузовиков, ремонт грузовиков, купить тягач, купить самосвал",
};

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
            <CTA />
            <FAQ />
            {/*  <News /> */}

            <Map />
            <Online />
        </div>
    );
}
