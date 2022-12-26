import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import theme from './constants/colors'
import './App.css'

import MainLayout from './layout/MainLayout'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <ThemeProvider theme={theme}>
            <MainLayout />
          </ThemeProvider>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
