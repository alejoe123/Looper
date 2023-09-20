// import { Stack } from "@mui/material";
// import { Link } from "react-router-dom";

// import { logo } from "../utils/constants";
// import { SearchBar } from "./";

// const Navbar = () => (
//   <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#55', top: 0, justifyContent: "space-between" }}>
//     <Link to="/" style={{ display: "flex", alignItems: "center" }}>
//       <img src={logo} alt="logo" height={40} />
//     </Link>
//     <SearchBar />
//   </Stack>
// );

// export default Navbar;



// import { Stack } from "@mui/material";
// import { Link } from "react-router-dom";

// import { logo } from "../utils/constants";
// import { SearchBar } from "./";

// const Navbar = () => (
//   <Stack
//     direction="row"
//     alignItems="center"
//     p={2}
//     sx={{
//       position: "sticky",
//       background: "#55",
//       top: 0,
//       justifyContent: "space-between",
//       borderBottom: "1px solid #ccc", // Add a grey line at the bottom
//     }}
//   >
//     <Link to="/" style={{ display: "flex", alignItems: "center" }}>
//       <img src={logo} alt="logo" height={40} />
//     </Link>
//     <SearchBar />
//   </Stack>
// );

// export default Navbar;



import { Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#55",
        top: 0,
        justifyContent: "space-between",
        borderBottom: isDarkMode ? "none" : "1px solid #ccc",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={40} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
