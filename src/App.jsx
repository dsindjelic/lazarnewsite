import { useRef } from 'react';
import './App.css';
import headerImage from './assets/background.jpg';
import aboutImage from './assets/cows3.jpg';
import productsImage from './assets/cheeseproduction.jpg';
import logo from './assets/logo.png';
import Card from './Card.jsx';
import  ContactForm from './ContactForm.jsx';


function App() {
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#ffffffcc',
    color: '#333',
    cursor: 'pointer',
    backdropFilter: 'blur(5px)',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
  };
  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav  style={{
    padding: '15px',
    background: '#f5f5f5',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  }}>
        <button onClick={() => scrollTo(topRef)} className="hero-button">Početna</button>
        <button onClick={() => scrollTo(aboutRef)} className="hero-button">O nama</button>
        <button onClick={() => scrollTo(productsRef)} className="hero-button">Proizvodi</button>
        <button onClick={() => scrollTo(contactRef)} className="hero-button">Kontakt</button>
      </nav>

     <header
          ref={topRef}
          style={{
            height: '60vh',
            backgroundImage: `url(${headerImage})`,
            opacity: 0.8,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '50px',
            position: 'relative', // mora za overlay
            overflow: 'hidden'
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 0
            }}
          ></div>

          {/* Sadržaj iznad overlaya */}
             <img src={logo} alt="Lazar Mlekara Logo" 
                  style={{ 
                    width: '70px', 
                    height: 'auto',
                    border: '5px solid white',
                    borderRadius: '50%',
                    marginBottom: '3px',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                  }} 
    />
          <h1 style={{ zIndex: 1, marginBottom: '10px', marginTop: '5px' }}>Dobrodošli</h1>
          <h2 style={{ zIndex: 1, marginBottom: '5px' }}>Mlekara Lazar d.o.o.</h2>
          <h2 style={{ zIndex: 1, marginBottom: '0px' }}>Blace</h2>
          <div style={{ display: 'flex',  zIndex: 1 }}>
           </div>
</header>


      <section ref={aboutRef} style={{
            height: '60vh',
            backgroundImage: `url(${aboutImage})`,
            opacity: 0.6,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '50px',
            position: 'relative', // mora za overlay
            overflow: 'hidden'
          }}>
        <h2>O nama</h2>
        <p>  Preduzeće Lazar počelo je sa radom 1994. godine. Godine 1998. dolazi do proširenja delatnosti na preradu mleka i proizvodnju mlečnih proizvoda. Planirani kapacitet je bio 1000 litara dnevne prerade mleka. 1999. godine počela je sa radom mlekara Lazar. Primarni proizvod je bio i ostao Blački kačkavalj. 

U novom objektu sada prerađujemo oko 50.000 litara mleka dnevno a kapaciteti su 80.000 litara. Broj zaposlenih je višestruko povećan. Mlekara otkupljuje mleko iz Topličkog i Rasinskog okruga. Ovo mleko se odlikuje visokim kvalitetom jer je proizvedeno na ekološkom području koje se oslanja na obronke planine Kopaonik i Jastrebac.

U toku protekle 3 godine uvezli smo iz Austrije više od 500 mlečnih krava rase Simental koje smo rasporedili na gazdinstva naših istaknutih kooperanata. Ovaj projekat je bio vrlo uspešan, jer je osvežio genetski sastav stočarstva u našem kraju i podigao produktivnost i finansijsku isplativost bavljenja ovim poslom.

Mlekara Lazar je završila još jedan projekat koji se takođe bavi sirovinom. Izgrađena je štala za 300 krava u selu Draguša. U ovom objektu, površine 6.500 metara kvadratnih, koji je smešten na 8 ha zemljišta, proizvodimo sveže mleko ekstra klase sa kojim ćemo da konkurišemo i na tržište Evropske unije.

Kao doprinos što boljem kvalitetu proizvoda, završili smo proces sertifikacije HACCP i ISO 9000/2000. Stalnim usavršavanjem i primenom novih tehnologija, garantujemo odličan kvalitet i ukus svih naših proizvoda.
</p>
      </section>

      <section ref={productsRef}  style={{
            height: '60vh',
            backgroundImage: `url(${productsImage})`,
            opacity: 0.6,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '50px',
            position: 'relative', // mora za overlay
            overflow: 'hidden'
          }}>
  <h2>Proizvodi</h2>
          <Card />
      </section>

      <section ref={contactRef} style={{ height: '100vh', backgroundColor: '#e6f2ff', padding: '1px' }}>
       
        <h2>Kontakt</h2>
        <h3 style={{
        fontSize: '1.3rem',
        margin: '5px 0 5px 0',
        color: '#2b6cb0'}}>Lazar doo Blace</h3>
        <p className='p-contact'>Kralja Petra I br. 6, 18420 Blace, Republika Srbija<br/>
          PIB: 100371248<br/>
          Matični broj: 17273094</p><br/>
        <h3 style={{
        fontSize: '1.3rem',
        margin: '5px 0 5px 0',
        color: '#2b6cb0'}}>Telefoni</h3>
        <p className='p-contact'>027/370020<br/>
          027/370021, 027/370022, 027/370023</p><br/>
        
        <h3 style={{
        fontSize: '1.3rem',
        margin: '5px 0 5px 0',
        padding: '0 0 1px 0',
        color: '#2b6cb0'}}>Kontakt osobe</h3><br/>
        <p className='p-contact'>direktor i vlasnik: Milan Vidojević, tel.:065/8145970<br/>
        zamenik direktora: Biljana Vidojević, tel.:065/8112246<br/>
        </p>
         <ContactForm />
      </section>
    </div>
  );
}

export default App;
