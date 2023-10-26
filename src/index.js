import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {NextUIProvider} from "@nextui-org/react";
import global_en from './translations/en/global.json';
import global_hu from './translations/hu/global.json';
import global_sr from './translations/sr/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import Cookies from 'js-cookie';

if (!Cookies.get("locale")) {
    Cookies.set("locale", "en");
}

i18next.init({
    interpolation: {escapeValue: false},
    lng: Cookies.get("locale"),
    resources: {
        en: {
          global: global_en
        },
        hu: {
            global: global_hu
        },
        sr: {
            global: global_sr
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
  </NextUIProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
