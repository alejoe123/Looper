// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { Paper, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const onhandleSubmit = (e) => {
//     e.preventDefault();

//     if (searchTerm) {
//       navigate(`/search/${searchTerm}`);

//       setSearchTerm('');
//     }
//   };

//   return (
//     <Paper
//       component='form'
//       onSubmit={onhandleSubmit}
//       sx={{
//         borderRadius: 20,
//         border: '1px solid #e3e3e3',
//         pl: 2,
//         boxShadow: 'none',
//         mr: { sm: 5 },
//       }}
//     >
//       <input
//         className='search-bar'
//         placeholder='Search...'
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
//         <SearchIcon />
//       </IconButton>
//     </Paper>
//   );
// };

// export default SearchBar;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, IconButton, InputBase, Paper } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (searchTerm) {
//       navigate(`/search/${searchTerm}`);
//       setSearchTerm('');
//     }
//   };

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
//       <Paper
//         component="form"
//         onSubmit={handleSubmit}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           borderRadius: 30,
//           border: '1px solid #e3e3e3',
//           boxShadow: 'none',
//           width: 'fit-content',
//         }}
//       >
//         <InputBase
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           sx={{ ml: 3, width: '300px' }}
//         />
//         <IconButton type="submit" sx={{ p: 1, color: '#f50057' }} aria-label="search">
//           <SearchIcon />
//         </IconButton>
//       </Paper>
//     </Box>
//   );
// };

// export default SearchBar;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center" mb={2} ml={2}>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 30,
          border: '1px solid #e3e3e3',
          boxShadow: 'none',
          width: 'fit-content',
        }}
      >
        <IconButton type="submit" sx={{ p: 1, color: '#f50057' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ ml: 1, width: '300px' }}
        />
      </Paper>
    </Box>
  );
};

export default SearchBar;
