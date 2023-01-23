import {ColorSchemeProvider, MantineProvider, ColorScheme, Paper } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

import AppShellP from "./components/AppShellP";
import { ThemeProvider } from "./ThemeProvider";

export default function App() {

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);


  return (
    <div className='App'>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{colorScheme}}>
        <Paper>
        <AppShellP />
        </Paper>
        </MantineProvider>
        </ColorSchemeProvider>
    </div>    
  );
}
