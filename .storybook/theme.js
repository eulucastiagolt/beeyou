import { create } from '@storybook/theming';

import logo from '../assets/web_colmeia.png';

export default create({
  base: 'dark',

  colorPrimary: 'red',
  colorSecondary: '#FFC864',

  appBg: '#2A2A2A',
  appContentBg: '#2A2A2A',
  appBorderColor: '#FFC864',

  textColor: '#fff',
  textInverseColor: '#2A2A2A',

  inputTextColor: '#E6E6E6',

  // Toolbar default and active colors
  barTextColor: '#E6E6E6',
  barSelectedColor: '#FFC864',
  barBg: '#2A2A2A',

  brandImage: logo,
  brandTitle: 'Web Colmeia',
  brandUrl: 'https://webcolmeia.com.br/',
});