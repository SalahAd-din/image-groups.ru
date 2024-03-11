import Hero from "./_sections/Hero";
import About from "./_sections/About";
import Advantages from "./_sections/Advantages";
import Services from "./_sections/Services";
import Reviews from "./_sections/Reviews";
import FAQ from "./_sections/FAQ";
import Map from "./_sections/Map";
import CTA from "./_sections/CTA";
import Models from "./_sections/Models";
import type { Metadata } from "next";
import { Online } from "@/src/components/Online";

export const metadata: Metadata = {
    title: "Продажа и обслуживание спецтехники разного профиля | Образ Групп",
    description:
        "Образ Групп предлагает широкий ассортимент грузовиков, тягачей и самосвалов, а также профессиональное обслуживание и ремонт. Найдите идеальный грузовик для вашего бизнеса с нами.",
    keywords:
        "Образ Групп, продажа тягачей, продажа самосвалов, обслуживание грузовиков, ремонт грузовиков, купить тягач, купить самосвал",
};

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Advantages />
            <Services />
            <Models />
            <Reviews />
            <CTA />
            <FAQ />
            <Map />
            <Online />
        </div>
    );
}
