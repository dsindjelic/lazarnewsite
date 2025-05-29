import React, { use, useState, useEffect } from 'react';
import kackavalj from './assets/kackavalj.jpg';
import kopaonicki from './assets/kopaonicki.jpg';
import kremsir from './assets/kremsir.jpg';
import maslac from './assets/maslac.jpg';
import pavlaka from './assets/kiselapavlaka.jpg'
import pup from './assets/pup.jpg';


  const products = [
                { src: kackavalj, title: 'Kačkavalj', Description: 'Polutvrdi, polumasni sir parenog testa sa zrenjem' },
                { src: kopaonicki, title: 'Kopaonički sir', Description: 'Polutvrdi, polumasni sir od mleka sa padina Kopaonika' },
                { src: kremsir, title: 'Krem sir' , Description: 'Ekstra krem sir. Dobijen od 100% kravljeg mleka'},
                { src: maslac, title: 'Maslac', Description: 'Maslac od 100% kravljeg mleka, bez dodataka' },
                { src: pup, title: 'Paprika  u pavlaci', Description: '"Izuzetno kvalitetna pavlaka sa dodatkom paprike, pikantno i jako ukusno.'+
                                                                        'Ako probate nećete moći više zamisliti dnevni obrok bez nje.."' },
                { src: pavlaka, title: 'Kisela pavlaka', Description: 'Ima visoku biološku i energetsku vrednost zbog čega je '+
                                                                        'važan proizvod u lekovitoj ishrani.' }
              ]

function Card(){   
    const [selectedProduct, setSelectedProduct] = useState(null); 
     const [isModalOpen, setIsModalOpen] = useState(false);

  // Funkcija za blokiranje scroll-a
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup funkcija
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);
  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  if (isModalOpen) {
    window.addEventListener('keydown', handleKeyDown);
  }

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [isModalOpen]);
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 30); // Čekamo da animacija završi
  };

    return(
        <div className="card-container">
            {products.map((p, index) => ( 
            <div className="card" key={index} onClick={() => openModal(p)}>
            <img className='card-image' src={p.src} alt={p.title}/>
            <h3>{p.title}</h3>      
        </div>
         ))}
     
       {  /* Modal za prikaz detalja */}
         {selectedProduct && (
            <div className="modal-overlay" onClick={closeModal}>
                <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                    <button className='close-button' onClick={closeModal}>X</button>
                    <img 
                        src={selectedProduct.src}
                        alt={selectedProduct.title}
                        className='modal-image' 
                    />
                <h2 className='h2-modal-font'>{selectedProduct.title}</h2>
                <p className='p-modal-font'>{selectedProduct.Description}</p>
                </div>
            </div>
         )}
        </div>
    );  
}


export default Card;