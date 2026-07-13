import './App.css';
import Header from "./components/Header/Header"
import Intro from './components/Intro/Intro';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Seo from './components/SEO/Seo';
import { TEXT_DEFAULTS } from './data/siteDefaults';
import { useSiteText } from './context/SiteContentContext';

function App() {
  const phone = useSiteText(
    'contact.phone_front_desk',
    TEXT_DEFAULTS['contact.phone_front_desk']
  );

  return (
    <div className="App">
      <Seo
        title="Premium Farmhouse Stay in Mandva, Wada"
        description="Rustic Farm Villa is a premium farmhouse getaway in Mandva, Wada, Maharashtra, blending rustic charm with modern luxury. Book your stay for families, couples, and celebrations."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Rustic Farm Villa",
          image: "https://www.rusticfarmvilla.com/og-image.jpg",
          telephone: phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Near Mandawa Grampanchayat, Mandva",
            addressLocality: "Wada",
            addressRegion: "Maharashtra",
            postalCode: "421303",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 19.7019817,
            longitude: 73.2099689,
          },
          url: "https://www.rusticfarmvilla.com",
        }}
      />
      <Header/>
      <Intro/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
