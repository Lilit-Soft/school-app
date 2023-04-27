import { createTheme, responsiveFontSizes } from '@mui/material/styles'

export const COLORS = {
  primary: {
    main: 'rgba(15, 128, 134, 1)',
  },
  secondary: {
    main: 'rgba(254, 124, 0, 1)',
  },
}

let theme = createTheme({
  palette: COLORS,
})

theme = responsiveFontSizes(theme)

export default theme
