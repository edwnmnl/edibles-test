const Footer = () => {
  return (
    <>
      <section
        id="contact__form"
        style={{ backgroundImage: "url('/img/contact-form-bg.png" }}
      >
        <div className="container">
          <div className="contact__form_title">
            Feel free to contact us for your customized meal plan
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="footer__row">
            <div className="footer__column">
              <img src="/logo.png" alt="ald" height="100px" />
            </div>
            <div className="footer__column">
              {" "}
              <div className="footer__title">Address</div>
              <p>
                Edible Kitechen Services
                <br />
                JN Stadium, Kaloor <br />
                Kochi - 680664
              </p>
            </div>
            <div className="footer__column">
              <div className="footer__title">Phone</div>
              <p>01243986371</p>
            </div>
            <div className="footer__column">
              <div className="footer__title">Quick links</div>
              <div className="footer__links">
                <a href="/">My Account</a>
              </div>
              <div className="footer__links">
                <a href="/">About us</a>
              </div>
              <div className="footer__links">
                <a href="/">Keto plans</a>
              </div>
              <div className="footer__links">
                <a href="/">Our Dishes</a>
              </div>
            </div>
            <div className="footer__column">
              <div className="footer__title">Follow us</div>
              <div className="social__links">
                <div className="footer__links">
                  <a href="/">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </div>
                <div className="footer__links">
                  <a href="/">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </div>
                <div className="footer__links">
                  <a href="/">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
                <div className="footer__links">
                  <a href="/">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>

                <div className="footer__links">
                  <a href="/">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <div className="footer__credits">
            Copyright 2020-2021 Edibles - All rights resserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
