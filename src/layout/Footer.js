const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__builder">
        <div className="container align-center">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* titles */}
              <div className="h-titles">
                <div
                  className="h-subtitle scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Address:
                </div>
                <div
                  className="h-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Somewhere on Scotland, <br />
                  SC 11385, SCOTLAND
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* titles */}
              <div className="h-titles">
                <div
                  className="h-subtitle scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Follow Us:
                </div>
              </div>
              {/* social */}
              <div className="social-links footer-social-links">
                <a
                  target="_blank"
                  href="https://instagram.com/"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-instagram" />
                </a>
                <a
                  target="_blank"
                  href="https://facebook.com/"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-facebook-f" />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-twitter" />
                </a>
                <a
                  target="_blank"
                  href="https://linkedin.com/"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* titles */}
              <div className="h-titles">
                <div
                  className="h-subtitle scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Get in touch:
                </div>
                <div
                  className="h-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p>
                    myachemonges@domain.com
                    <br />
                    +012 (000) 000 00
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className="copyright-text scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Copyright © 2023 Yullu
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
