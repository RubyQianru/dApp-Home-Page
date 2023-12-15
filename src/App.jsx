import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Structure from './Structure';
import { AccountProvider } from './Components/AccountContext';

const App = () => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <AccountProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Structure/>
      </ThemeProvider>
    </AccountProvider>
    
  )
}

export default App;
