export default function Header() {
  return (
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/create-profile">Create Profile</a></li>
      <li><a href="/my-profile">My Profile</a></li>
      <li><a href="/sign-in">Sign In</a></li>
      <li><a href="/hi-lite">Hi-Lite ⚡️</a></li>
    </ul>
  )
}

// import { useNavigate } from "react-router-dom";
// import { Box, Heading, Menu } from "grommet";
// import { Menu as MenuIcon } from "grommet-icons";

// const MenuBar = (props) => (
//   <Box
//     tag="header"
//     direction="row"
//     align="center"
//     justify="between"
//     background="blue"
//     pad={{ left: "medium", right: "medium", vertical: "small" }}
//     elevation="medium"
//     style={{ zIndex: "1" }}
//     {...props}
//   />
// );

// export default function AppBar() {
//   const navigate = useNavigate()
//   return (
//     <MenuBar>
//       <Heading level="2" margin="none" color="black">Hi-Lite ⚡️</Heading>
//       <Menu
//         icon={<MenuIcon color="black" />}
//         dropBackground="light-4"
//         items={[
//           { label: 'Add New Vehicle', onClick: () => navigate('/add') },
//           { label: 'My Garage', onClick: () => navigate('/') },
//           // { label: 'Log Out', onClick: () => {} },
//         ]}
//       />
//     </MenuBar>
//   )
// }