import { createTheme, responsiveFontSizes } from '@mui/material/styles'

export const COLORS = {
  primary: {
    main: '#3b486d',
  },
  secondary: {
    main: '#f50057',
  },
  background: {
    paper: '#040404',
  },
  text: {
    primary: '#f1f1f1',
  },
}

let theme = createTheme({
  palette: COLORS,
})

theme = responsiveFontSizes(theme)

export default theme
