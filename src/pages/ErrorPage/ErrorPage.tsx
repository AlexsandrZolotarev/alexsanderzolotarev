import { useAppReady } from '@/hooks/useAppReady';
import { useLang } from '@/hooks/useLang';
import { useAppSelector } from '@/Redux/hooks';
import { NavLink } from 'react-router-dom';

function ErrorPage() {
  const isTextVisible = useAppSelector((state) => state.visibilitySlice.isTextVisible);
  const { translate } = useLang();
  const { appReady } = useAppReady();
  return (
    <section className="error">
      <div
        className={`error__body ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
      >
        <h1 className="error__title">Error</h1>
        <div className="error__code">404</div>
        <div className="error__footer">
          <NavLink to="/" className="error__footer-link link--underline">
            {translate('error.link')}
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
