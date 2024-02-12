import Header from './Sections/Header'
import LandingSection from './Sections/LandingSection';
import AboutSection from './Sections/AboutSection';
import WhySection from './Sections/WhySection';
import CountdownSection from './Sections/CountdownSection'
import CTASection from './Sections/CTASection';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <main>
      <LandingSection/>
      <AboutSection/>
      <WhySection/>
      <CountdownSection seconds={600}/>
      <CTASection/>
    </main>
    </>
  );
}

export default App;
