import Navbar from "./components/organism/Navbar";
import Hero from "./components/organism/Hero";
import CourseSection from "./components/organism/CourseSection";
import BannerCTA from "./components/organism/BannerCTA";
import Footer from "./components/organism/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-360 mx-auto w-full flex flex-col gap-6 py-7 px-5 lg:gap-16 lg:py-16 lg:px-30">
        <Hero />

        <CourseSection />

        <BannerCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;
