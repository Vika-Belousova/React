function NotFoundPage() {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index page__main--404">
        <div className="container">
          <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Page not found</p>
            <a className="not-found__link" href="/">Go to main page</a>
          </section>
        </div>
      </main>
    </div>
  );
}

export { NotFoundPage };