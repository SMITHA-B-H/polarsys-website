import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Contact.css';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const service = e.target.service.value;
    const message = e.target.message.value;

    const phoneNumber = "919964585585"; // International format for India
    const text = `Hello Polarsys!%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="contact-page">
      {/* HEADER SECTION */}
      <section className="contact-hero">
        <div className="container text-center text-white">
          <h1 data-aos="fade-down">Contact Us</h1>
          <p data-aos="fade-up">We're here to help! Reach out to us for any inquiries or support</p>
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="contact-main py-5">
        <div className="container">

          {/* SHARED HEADING ROW
    <div className="contact-title-row" data-aos="fade-up">
      <h2>Send Us a Message</h2>
      <h2>Get in Touch</h2>
    </div> */}

          <div className="row g-5 align-items-stretch">
            {/* LEFT: FORM */}
            <div className="col-lg-7" data-aos="fade-right">
              <h2 className="mb-4 fw-bold">Send Us a Message</h2>
              <form onSubmit={handleWhatsAppSend} className="contact-form">
                <div className="mb-3">
                  <label>Full Name *</label>
                  <input type="text" name="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label>Email Address *</label>
                  <input type="email" name="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label>Service of Interest *</label>
                  <select name="service" className="form-select" required>
                    <option value="">Select a service</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Networking (LAN/WAN)">Networking (LAN/WAN)</option>
                    <option value="Fire Alarm Systems">Fire Alarm Systems</option>
                    <option value="Public Address Systems">Public Address Systems</option>
                    <option value="Access Control">Access Control</option>
                    <option value="Fire Hydrant Systems">Fire Hydrant Systems</option>
                    <option value="Home/Building Automation">Home/Building Automation</option>
                    <option value="CCTV & Surveillance">CCTV & Surveillance</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label>Message *</label>
                  <textarea name="message" rows="5" className="form-control" placeholder="Tell us about your requirements..." required></textarea>
                </div>
                <button type="submit" className="btn-send">Send Message</button>
              </form>
            </div>

            {/* RIGHT: INFO */}
      <div className="col-lg-5" data-aos="fade-left">
        <h2 className="mb-4 fw-bold">Get in touch</h2>
        <div className="contact-info h-100">
          <p className="text-muted mb-4">
            Have questions? We're here to help. Reach out to us through any of the following channels.
          </p>

          <InfoBox icon="bi-geo-alt" label="ADDRESS" detail="163/8, Bidarahosahalli Rd, next to Aryabhata international school, Maddur T, Mandya Dist, Karnataka,India,571422" />
          <InfoBox icon="bi-telephone" label="PHONE" detail="9964 585 585 <br/> 9964 585 567" />
          <InfoBox icon="bi-envelope" label="EMAIL" detail="info@polarsys.in" />
          <InfoBox icon="bi-globe" label="WEBSITE" detail="www.polarsys.in" />
          <InfoBox icon="bi-clock" label="BUSINESS HOURS" detail="Monday - Saturday: 9:00 AM - 6:00 PM" />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* MAP SECTION */}
      <section className="map-section py-5 text-center">
        <h2 className="fw-bold mb-4">Find Us Here</h2>
        <div className="container">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.9170876157477!2d77.0309486!3d12.4552424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf071ce137a72d%3A0x4eaccca0667534ac!2sPolarsys%20global%20IT%20solutions%20pvt%20Ltd!5e0!3m2!1sen!2sin!4v1768973884340!5m2!1sen!2sin" 
            width="100%" height="450" style={{border:0, borderRadius: '15px'}} allowFullScreen="" loading="lazy">
           </iframe>
           
           <p className="mt-3 text-muted">Located in Bidarahosahalli, Mandya District, Karnataka, India</p>
        </div>
      </section>

      {/* SOCIAL SECTION */}
      <section className="social-connect py-5 text-center bg-light">
        <h2 className="fw-bold">Connect With Us</h2>
        {/* <p className="text-muted">Follow us on social media for updates and news</p> */}
        <div className="social-icons d-flex justify-content-center gap-3 mt-4">
          <div className="social-circle"><i className="bi bi-facebook"></i></div>
          <div className="social-circle"><i className="bi bi-twitter-x"></i></div>
          <div className="social-circle"><i className="bi bi-linkedin"></i></div>
          <div className="social-circle"><i className="bi bi-instagram"></i></div>
        </div>
      </section>
    </div>
  );
};

const InfoBox = ({ icon, label, detail }) => (
  <div className="d-flex mb-4 align-items-start">
    <div className="info-icon-box me-3">
      <i className={`bi ${icon}`}></i>
    </div>
    <div>
      <h6 className="fw-bold mb-1" style={{fontSize: '0.85rem', color: '#666'}}>{label}</h6>
      <p className="mb-0 text-dark" dangerouslySetInnerHTML={{ __html: detail }}></p>
    </div>
  </div>
);

export default ContactPage;