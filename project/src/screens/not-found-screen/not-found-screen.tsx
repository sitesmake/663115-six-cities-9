import Header from '../../components/header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Not Found.</h1>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>404 error</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
