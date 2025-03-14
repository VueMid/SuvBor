import React from "react";
import './assets/css/font.css'
import './assets/css/style.css'
import './assets/css/tailwind.css'
import { StrictMode } from 'react'
import { router } from './router/router'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import i18n from "./i18n/i18next";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>,
)