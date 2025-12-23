
import AboutAndSocialSections from "./Components/AboutAndSocialSections";
import BenefitsSection from "./Components/BenefitsSection";
import {FeaturedProducts} from "./Components/FeaturedProducts";
import Follow from "./Components/Follow";
import Footer from "./Components/Footer";
import  HomeBanner  from "./Components/HomeBanner";
import  Navbar  from "./Components/Navbar";
import NewsletterSection from "./Components/NewsletterSection";
import SensoryStorySection from "./Components/SensoryStorySection";
import TestimonialsSection from "./Components/TestimonialsSection";

export default function Home() {      
  return( 
    <>
    <Navbar />
    <HomeBanner/>
    <AboutAndSocialSections />
    <FeaturedProducts />
    <NewsletterSection />
    <TestimonialsSection />
    <BenefitsSection />
    <Follow />
    <SensoryStorySection />
    <Footer />
      
    </>

  )
}
