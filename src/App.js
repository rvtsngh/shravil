
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Service/Services';
import Testimonial from './components/Testimonial/Testimonial';
import WorkProcess from './components/WorkProcess/WorkProcess';

function App() {
  return (
    <>
      <div data-bs-spy="scroll" data-bs-target=".navbar-nav" data-bs-offset="75" class="offset-nav">

        <div class="loader">
          <div class="loader-inner">
            <div class="cssload-loader"></div>
          </div>
        </div>
        {/* Preloader */}
        
        <Header />
        <Hero />
        <Services />
        <WorkProcess />
        <Portfolio />
        <Testimonial />
      </div>
    </>
  );
}

export default App;
