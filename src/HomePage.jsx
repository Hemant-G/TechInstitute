import Navbar from './Navbar';
import Hero from './Hero';
import PopularCourses from './PopularCourses';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import Footer from './Footer';
import TopBar from './TopBar';
import RegisterNow from './RegisterNow';
import TopCourses from './TopCourses';
import Testimonials from './Testimonials';
import AboutUsPage from './AboutUsPage';
import ContactPage from './ContactPage'
function HomePage() {
  return (
    <div>
      <Hero />
      <PopularCourses />
      <RegisterNow />
      <TopCourses />
      <FAQ />
      <Testimonials />
    </div>
  );
}

export default HomePage