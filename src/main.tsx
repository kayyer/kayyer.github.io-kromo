import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { BrowserRouter, Route, Routes } from 'react-router'
import ComingSoon from './comingSoon/ComingSoon.tsx'

import Nav from './Nav.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FluentProvider theme={webLightTheme}>
    <BrowserRouter>
    {/* <Nav /> */}
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
    </BrowserRouter>
  </FluentProvider>,
)
