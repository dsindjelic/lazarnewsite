
import { useState } from 'react';


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
const validate = () => {
  const newErrors = {};
  if (!formData.name) newErrors.name = 'Ime je obavezno';
  if (!formData.email.includes('@')) newErrors.email = 'Email nije validan';
  if (!formData.message) newErrors.message = 'Poruka je obavezna';
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
  const handleSubmit = (e) => {
    if (!validate()) return;
    e.preventDefault();
    // Ovde biste u stvarnoj aplikaciji poslali podatke na server
    console.log('Forma poslata:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Resetujemo poruku o uspehu nakon 3 sekunde
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="contact-form-container">
      <h3>Pošaljite nam poruku</h3>
      {isSubmitted && (
        <div className="success-message">
          Hvala vam! Vaša poruka je uspešno poslata.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ime i prezime:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Poruka:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        
        <button type="submit" className="submit-button">
          Pošalji
        </button>
      </form>
    </div>
  );
}

export default ContactForm;