import { ThemeProvider } from "styled-components"
import { Button } from "./assets/Components/Button"
import {defaultTheme} from './styles/themes/defaultTheme';
import { GlobalStyle } from "./styles/global";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant= 'primary'></Button>
      <Button variant= 'secondary'></Button>
      <Button variant= 'danger'></Button>
      <Button variant= 'danger'></Button>
      <h1>Hello World</h1>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
