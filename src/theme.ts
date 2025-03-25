import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#f7faff',
      100: '#e3efff',
      200: '#c5ddff',
      300: '#9dc2ff',
      400: '#739eff',
      500: '#4a75ff',
      600: '#3d5be6',
      700: '#3144bf',
      800: '#253099',
      900: '#1a2173'
    },
    secondary: {
      50: '#fff5f7',
      100: '#ffe4e9',
      200: '#ffc8d2',
      300: '#ffa3b3',
      400: '#ff758c',
      500: '#ff4d6a',
      600: '#e63d57',
      700: '#bf3146',
      800: '#992637',
      900: '#731c29'
    }
  },
  fonts: {
    heading: '"Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif',
    body: '"Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif'
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'primary'
      }
    }
  }
});

export default theme;