import { FavoriteCardList } from "../../components/favorite-card-list/favorite-card-list";
import { Logo } from "../../components/logo/logo";
import { OffersList } from "../../types/offer";

type FavoritePageProps = {
  favoritesList: OffersList[];
};


function FavoritesPage({ favoritesList }: FavoritePageProps) {
    const adaptedFavorites = favoritesList.map((offer) => ({
        id: offer.id,
        title: offer.title,
        type: offer.type,
        price: offer.price,
        previewImage: offer.previewImage,
        rating: offer.rating,
        isPremium: offer.isPremium,
        city: offer.city.name // <-- достаём строку
    }));
    
    return (
        <div className="page">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Logo/>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-item user">
                                    <a className="header__nav-link header__nav-link--profile" href="#">
                                        <div className="header__avatar-wrapper user__avatar-wrapper">
                                        </div>
                                        <span className="header__user-name user__name">Myemail@gmail.com</span>
                                        <span className="header__favorite-count">3</span>
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a className="header__nav-link" href="#">
                                        <span className="header__signout">Sign out</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--favorites">
                <div className="page__favorites-container container">
                    <section className="favorites">
                        <h1 className="favorites__title">Saved listing</h1>
                            <FavoriteCardList favorites={adaptedFavorites}/>
                    </section>
                </div>
            </main>
            <footer className="footer container">
                <div className="footer__logo-link">
                    <Logo/>
                </div>
            </footer>
        </div>
    );
}

export { FavoritesPage }