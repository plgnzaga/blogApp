import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './dist/styles/index.scss'
import { ThemeProvider } from '@emotion/react'
import theme from '../src/layout/theme/blogTheme.jsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
