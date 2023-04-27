import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import theme from './constants/colors';
import './App.css';
import './i18n';

import MainLayout from './layout/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
