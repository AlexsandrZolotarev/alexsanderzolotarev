import { NavLink } from 'react-router-dom';

function ErrorPage() {
  return (
    <section className="error">
      <div className="error__body">
        <h1 className="error__title">Error</h1>
        <div className="error__code">404</div>
        <div className="error__footer">
          <NavLink to="/" className="error__footer-link link--underline">
            go back to home
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
