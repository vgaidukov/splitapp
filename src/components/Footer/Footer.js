import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__bottom">
          <p className="footer__copyright">&#169; 2023</p>
          <p className="footer__text">
            Designed & developed by Vadim Gaidukov
          </p>
          <div className="footer__links">
            <a
              className="link footer__link"
              href="https://movies-vg.nomoredomains.icu/"
              target="_blank"
              rel="noreferrer"
            >
              My Page
            </a>
            <a
              className="link footer__link"
              href="https://github.com/vgaidukov"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
