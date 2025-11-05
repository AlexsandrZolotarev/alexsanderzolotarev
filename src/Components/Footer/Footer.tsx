import { FaGithub, FaTelegram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer id="Contacts">
      <div className="footer__inner container">
        <div className="footer__body">
          <div className="footer__title h3">Contact me</div>
          <div className="footer__contacts">
            <div className="footer__soc1als soc1als">
              <ul className="soc1als__list">
                <li className="soc1als__item">
                  <a
                    className="soc1als__link"
                    href="https://t.me/SashaZolotoWeb"
                    target="_blank"
                    rel="noreferrer"
                    title="Telegram"
                    aria-label="Telegram"
                  >
                    <FaTelegram />
                  </a>
                </li>
                <li className="soc1als__item">
                  <a
                    className="soc1als__link"
                    href="https://github.com/AlexsandrZolotarev"
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__extra">
          <div className="footer__copyright">© Copyright 2025, All Rights Not Reserved</div>
        </div>
        <div className="footer__clipPathGroup clipPathGroup"></div>
      </div>
    </footer>
  );
};
export default Footer;
