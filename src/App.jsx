import Navbar from "./components/layout/Navbar";
import Hero from "./pages/home/components/Hero";
import CourseSection from "./features/product/components/CourseSection";
import BannerCTA from "./pages/home/components/BannerCTA";
import Footer from "./components/layout/Footer";

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
