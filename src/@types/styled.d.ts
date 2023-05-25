import 'styled-components';
import { defaultTheme } from '../styles/themes/defaultTheme';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} //sobreescreve tipagem do DefaultTheme da lib com TS do tema do projeto
}