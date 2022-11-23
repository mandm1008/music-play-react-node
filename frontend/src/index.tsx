import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from '~/components/GlobalStyle'
import { MusicProvider } from '~/components/store'
import Toast from './tools/toast'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <MusicProvider>
        <App />
        <Toast />
      </MusicProvider>
    </GlobalStyle>
  </React.StrictMode>
)

reportWebVitals()
