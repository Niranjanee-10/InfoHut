

/*import Drawer from '@mui/material/Drawer';
{(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  ))}*/


  import React from "react";
  import { AppBar, Toolbar, Typography,Tab,Tabs,Button} from "@mui/material";
  import App from "./App";
  import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
  const Header = () => {
    const [count,setCount] = useState();
      return(
          <React.Fragment>
          <AppBar sx={{background:"#000000"}}>
          <Toolbar>
          <AssignmentIndIcon fontSize="large"></AssignmentIndIcon>
          <Typography sx={{paddingLeft:'20px'}}>
          PORTFOLIO
          </Typography>
          <Tabs sx={{marginleft:auto}} indicatorColor="primary" value={count} onChange={(e,count)=>setCount(count)} textColor="inherit">
            <Tab label="Skills"/>
            <Tab label="project"/>
            <Tab label="Services"/>
          </Tabs>
          <Button  sx={{marginLeft:"auto",background:"#ffffff",color:"black"}}variant="container">Login In</Button>
          <Button  sx={{marginLeft:"10px",background:"#ffffff",color:"black"}}variant="container">Sign In</Button>
          
          </Toolbar>
          </AppBar>
          </React.Fragment>
      )
  }
  export default Header