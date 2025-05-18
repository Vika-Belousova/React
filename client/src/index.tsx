import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app/app';
import { Favorites } from './pages/favorites/favorites';
import {Login} from './pages/login/login'
import {Offer} from './pages/offer/offer'
import { NotFoundPage } from './pages/not-found/not-found';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> 
    <Favorites/>
    <Login/>
    <Offer/>
    <NotFoundPage/>
  </StrictMode>
);
