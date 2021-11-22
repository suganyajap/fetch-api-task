import './App.css';
import { useState } from 'react';
import {Route,Switch} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { EditUser } from './EditUser';
import { ListUsers } from './ListUsers';
import { CreateUser } from './CreateUser';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function App() {
  
  const history=useHistory();
  const [mode,setMode]=useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
   < ThemeProvider theme={theme}>
      <Paper elevation={4} style={{bordeRadius:"0px",minHeight:"100vh"}} >
    <div className="App">
      <AppBar position="static" style={{marginBottom:"24px"}}>
     <Toolbar variant="dence">
      <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/")}
       >Home</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/users")}
       >List Users</Button>
       <Button
       variant="text"
       color="inherit"
       onClick={()=>history.push("/create-user")}
       >Create User</Button>
       <Button 
        startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        style={{ marginLeft:"auto" }}
       variant="text"
       color="inherit"
       onClick={()=>setMode(mode==="light" ? "dark" : "light")}
       >{ mode==="light" ? "dark" : "light" } Mode</Button>
        </Toolbar>
       </AppBar>

<Switch>
       
       <Route exact path="/">
       <Welcome />
       </Route>
       <Route path="/users/edit/:id">
       <EditUser />
       </Route>
       <Route path="/users">
       <ListUsers />
       </Route>
       <Route path="/create-user">
       <CreateUser  />
       </Route>
       <Route path="**">
           <NotFound />
       </Route>
       
    </Switch>

    </div>
    </Paper>
    </ThemeProvider>
  );
}

function NotFound() {
  return (
    <div className="not-found-container">
      <h2>Not Found 404</h2>
      <img className="not-found-image"
        src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
        alt="not found" />
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <h3>Welcome to home!!!</h3>
    </div>
  );
}

export default App;