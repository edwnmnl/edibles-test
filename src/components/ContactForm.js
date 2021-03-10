const ContactForm = () => {
  return (
    <section
      id="contact__form"
      style={{ backgroundImage: "url('/img/contact-form-bg.png" }}
    >
      <div className="container">
        <div className="contact__form_title">
          Feel free to contact us for your customized meal plan
        </div>

        <form action="">
          <div className="form__container">
            <div className="form__inner_container">
              <div style={{ width: "50%" }}>
                <div className="form__item">
                  <label>Your Name *</label>
                  <input />
                </div>
                <div className="form__item">
                  <label>Your Mobile No *</label>
                  <input />
                </div>
              </div>
              <div style={{ width: "50%" }}>
                <div className="form__item">
                  <label>Your Email</label>
                  <input />
                </div>
                <div className="form__item">
                  <label>Message *</label>
                  <input />
                </div>
              </div>
            </div>

            <div className="form__button">
              <button className="btn__primary">Send Now</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
