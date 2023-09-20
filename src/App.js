// import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Box, CssBaseline, ThemeProvider, createTheme, Button } from '@mui/material';

// import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#1f1f1f',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     background: {
//       default: '#121212',
//       paper: '#1f1f1f',
//     },
//   },
// });

// const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#3f51b5',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     background: {
//       default: '#ffffff',
//       paper: '#f5f5f5',
//     },
//   },
// });

// const App = () => {
//   const [theme, setTheme] = useState(darkTheme);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <BrowserRouter>
//         <Box sx={{ backgroundColor: '#' }}>
//           <Navbar />
//           <Button onClick={toggleTheme} sx={{ position: 'fixed', top: 20, left: 1150 }}>
//             Mode
//           </Button>
//           <Routes>
//             <Route exact path="/" element={<Feed />} />
//             <Route path="/video/:id" element={<VideoDetail />} />
//             <Route path="/channel/:id" element={<ChannelDetail />} />
//             <Route path="/search/:searchTerm" element={<SearchFeed />} />
//           </Routes>
//         </Box>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// };

// export default App;



import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme, Button } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1f1f1f',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#121212',
      paper: '#1f1f1f',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
});

const App = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#' }}>
          <Navbar />
          <Button onClick={toggleTheme} sx={{ position: 'fixed', top: 22, left : 1160, backgroundColor: '#d42c2c',padding: '10px 20px', borderRadius: '20px',fontSize: '12px',  width: '50px', height: '30px', }}>
            Mode
          </Button>
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
