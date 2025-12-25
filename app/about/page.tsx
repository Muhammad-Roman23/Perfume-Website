import AboutHeroBanner from "../Components/AboutHeroBanner";
import ForEveryoneSection from "../Components/ForEveryoneSection";
import IngredientsCraftsmanshipSection from "../Components/IngredientsCraftsmanshipSection";
import MissionVisionValuesSection from "../Components/MissionVisionValuesSection";
import OurPhilosophySection from "../Components/OurPhilosophySection";
import OurStorySection from "../Components/OurStorySection";

export default function About () {
    return(
        <>
        <AboutHeroBanner />
        <OurStorySection />
        <OurPhilosophySection />
        <MissionVisionValuesSection />
        <ForEveryoneSection />
        <IngredientsCraftsmanshipSection />
        </>
    )
}