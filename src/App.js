import Hero  from './Components/Sections/Hero'
import PopularProduct from './Components/Sections/PopularProduct';
import Services from './Components/Sections/Services';
import SuparQuality from "./Components/Sections/SuparQuality";
import CustomerReviews from './Components/Sections/CustomerReviews';
import Footer from './Components/Sections/Footer';
import Special from './Components/Sections/Special'
import Subcribe from "./Components/Sections/Subcribe";
import NavBar from './Components/NavBar';
import './index.css';
function App() {
  return (
    <>
      <main className="relative">
    <NavBar/>
    <section className="xl:padding-l wide:padding-r padding-b" >
      <Hero />
    </section>
    <section className="padding" >
<PopularProduct/>
    </section>
    <section className="padding" >
<SuparQuality />
    </section>
    <section className="padding-x py-10" >
<Services/>
    </section>
    <section className="padding" >
<Special/>
    </section>
    <section className="padding " >
<CustomerReviews/>  
 </section>
    <section className="padding-x sm:py-32 py-16 w-full " >
<Subcribe/>
    </section>
    <section className="padding-x padding-t pb-8 bg-black " >
<Footer/>
    </section>
      </main>
    </>
  );
}

export default App;
