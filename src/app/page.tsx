import AboutMe from "@/app/components/AboutMe";
import CardInfo from "@/app/components/CardInfo";
import Contact from "@/app/components/Contact";
import DescriptionText from "@/app/components/DescriptionText";
import MyWork from "@/app/components/MyWork";
import Navigation from "@/app/components/Navigation";

export default function HomePage() {
  return (
    <div className="bg-zinc-200 px-12 py-4 sm:px-44 sm:py-7">
      <>
        <Navigation />
        <DescriptionText />
        <CardInfo />
        <AboutMe />
        <MyWork />
        <Contact />
      </>
      <div className="pt-12">
        <Navigation />
      </div>
    </div>
  );
}
