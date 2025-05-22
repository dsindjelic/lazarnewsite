import { useRef } from 'react';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav style={{ padding: '10px', background: '#f0f0f0', position: 'sticky', top: 0, zIndex: 100 }}>
        <button onClick={() => scrollTo(aboutRef)} style={{ marginRight: '15px' }}>O nama</button>
        <button onClick={() => scrollTo(servicesRef)} style={{ marginRight: '15px' }}>Usluge</button>
        <button onClick={() => scrollTo(contactRef)}>Kontakt</button>
      </nav>

      <header style={{ height: '100vh', backgroundColor: '#e6f2ff', padding: '50px' }}>
        <h1>Dobrodošli</h1>
      <p>Mlekara Lazar d.o.o.</p>
      </header>

      <section ref={aboutRef} style={{ height: '100vh', backgroundColor: '#fff', padding: '50px' }}>
        <h2>O nama</h2>
        <p>  Preduzeće Lazar počelo je sa radom davne 1994. godine kao trgovina robom široke potrošnje sa upošljena dva radnika. Godine 1998. dolazi do proširenja delatnosti na preradu mleka i proizvodnju mlečnih proizvoda. Razlog za to je bila zdrava ekološka sredina u kojoj živimo i mogućnost iskorišćenja resursa. Planirani kapacitet je bio 1000 litara dnevne prerade mleka. 1999. godine počela je sa radom mlekara Lazar. Primarni proizvod je bio i ostao Blački kačkavalj. Odgovarajući svakodnevnim zahtevima tržišta, koristeći savremenu tehnologiju, do sada smo napravili još desetak novih proizvoda: jogurt, pasterizovano mleko, kačkavalj, sitan sir, feta sir, krem sirevi, paprika u pavlaci i maslac. 2003. godine kupili smo D.P. Napredak Blace, preduzeće u stečaju. Zgradu površine 1500 metara kvadratnih, uspeli smo da renoviramo i adaptiramo za mlekarsku delatnost za samo 90 dana i na taj način smo unapredili svoju proizvodnju kako bismo što bolje zadovoljili svakim danom sve veću potražnju.

U novom objektu sada prerađujemo oko 50.000 litara mleka dnevno a kapaciteti su 80.000 litara. Broj zaposlenih je višestruko povećan. 120 radnika trenutno radi u mlekari Lazar a preko 2.500 gazdinstava proizvodi mleko za potrebe naše proizvodnje. Mlekara otkupljuje mleko iz Topličkog i Rasinskog okruga, koji se nalaze u južnom, odnosno centralnom delu Republike. Ovo mleko se odlikuje visokim kvalitetom jer je proizvedeno na ekološkom području koje se oslanja na obronke planine Kopaonik i Jastrebac.

U toku protekle 3 godine uvezli smo iz Austrije više od 500 mlečnih krava rase Simental koje smo rasporedili na gazdinstva naših istaknutih kooperanata. Simentalke spadaju u najstarija i najčešće distribuirana goveda u svetu. Ovaj projekat je bio vrlo uspešan, jer je osvežio genetski sastav stočarstva u našem kraju i naravno podigao produktivnost i finansijsku isplativost bavljenja ovim poslom.

Mlekara Lazar je završila još jedan projekat koji se takođe bavi sirovinom. Izgrađena je štala za 300 krava u selu Draguša, 5 km od Blaca. U ovom objektu, površine 6.500 metara kvadratnih, koji je smešten na 8 ha zemljišta, proizvodićemo sveže mleko ekstra klase sa kojim ćemo da konkurišemo i na tržište Evropske unije.

Kao doprinos što boljem kvalitetu proizvoda, završili smo proces sertifikacije HACCP i ISO 9000/2000. Sertifikate smo dobili u junu 2006. godine. Stalnim usavršavanjem i primenom novih tehnologija, garantujemo odličan kvalitet i ukus svih naših proizvoda.
</p>
      </section>

      <section ref={servicesRef} style={{ height: '100vh', backgroundColor: '#f9f9f9', padding: '50px' }}>
        <h2>Usluge</h2>
        <ul>
          <li>Proizvodnja mlečnih proizvoda</li>
          <li>Distribucija</li>
          <li>Sertifikovani HACCP sistem</li>
        </ul>
      </section>

      <section ref={contactRef} style={{ height: '100vh', backgroundColor: '#e6f2ff', padding: '50px' }}>
        <h2>Kontakt</h2>
        <h3>Lazar doo Blace</h3>
        <p>Kralja Petra I br. 6, 18420 Blace, Republika Srbija<br/>
          PIB: 100371248<br/>
          Matični broj: 17273094</p><br/>
        <h3>Telefoni</h3>
        <p>027/370020<br/>
          027/370021, 027/370022, 027/370023</p><br/>
        <h3>E-mail</h3>
        <p>mail</p><br/>
    <h3>Kontakt osobe</h3><br/>
    <p>direktor i vlasnik: Milan Vidojević, tel.:065/8145970<br/>
    zamenik direktora: Biljana Vidojević, tel.:065/8112246<br/>
    šef računovodstva: Jasmina Lukić<br/>
    prodaja: Aleksandra Jovanović<br/>
    nabavka: Biljana Vidojević</p>
      </section>
    </div>
  );
}

export default App;
