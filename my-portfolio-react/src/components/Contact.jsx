import React from 'react';

const Contact = () => {
    // Fungsi untuk handle submit form (bisa dikembangkan)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Fitur kirim pesan akan diimplementasikan menggunakan backend/email service (e.g. Formspree/EmailJS) di pengembangan berikutnya!');
    };

    return (
        <section className="contact" id="contact">
            <h2 data-aos="fade-right">📬 Get In Touch</h2>
            <p data-aos="fade-left">Feel free to reach out for collaborations or just a friendly chat!</p>

            <form className="contact-form" onSubmit={handleSubmit} data-aos="zoom-in" data-aos-delay="200">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message..." rows="5" required></textarea>
                <button type="submit" className="btn primary">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;