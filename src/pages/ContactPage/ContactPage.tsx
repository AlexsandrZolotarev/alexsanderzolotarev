import { useAppReady } from '@/hooks/useAppReady';
import { useLang } from '@/hooks/useLang';
import { useAppSelector } from '@/Redux/hooks';

function ContactPage() {
  const isTextVisible = useAppSelector((state) => state.visibilitySlice.isTextVisible);
  const { translate } = useLang();
  const { appReady } = useAppReady();

  return (
    <section className="contact container">
      <div
        className={`contact__body ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
      >
        <h1 className="contact__title">{translate('contact.title')}</h1>

        <div
          className={`contact__list ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
        >
          <div className="contact__item">
            <h5 className="contact__label">{translate('contact.mail.label')}</h5>
            <a
              className="contact__link"
              href="mailto:masterblacksmith@mail.ru"
              target="_blank"
              rel="noreferrer"
            >
              ↗ {translate('contact.mail.value')}
            </a>
          </div>

          <div className="contact__item">
            <h5 className="contact__label">{translate('contact.social.label')}</h5>
            <ul className="contact__sublist">
              <li className="contact__subitem">
                <a
                  className="contact__link"
                  href="https://t.me/SashaZolotoWeb"
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗ {translate('contact.social.telegram')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
