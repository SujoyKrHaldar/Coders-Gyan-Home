import Layout from "../components/layout/Layout";
import CourseSection from "../components/pages/home/CourseSection";
import HeroSection from "../components/pages/home/HeroSection";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <CourseSection />
    </Layout>
  );
}

export default Home;
