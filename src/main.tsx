import './index.css'
import ReactDOM from 'react-dom/client'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { HashRouter, Route, Routes } from 'react-router'
import ComingSoon from './comingSoon/ComingSoon.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <FluentProvider theme={webLightTheme}>
    <HashRouter>
    {/* <Nav /> */}
    <Routes>
      <Route path="/" element={<ComingSoon />} />
    </Routes>
    </HashRouter>
  </FluentProvider>,
)
