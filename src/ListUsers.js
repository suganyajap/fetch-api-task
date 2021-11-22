import { User } from './User';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { useEffect,useState } from "react";
export function ListUsers() {

     const [users,setUsers]=useState([]);
    //app mounted only once->useEffect->fetch-setMovies
    const getUsers=()=> {
    fetch("https://6166c4e813aa1d00170a6715.mockapi.io/myUsers")
    .then((data)=>data.json())
    .then((ur)=>setUsers(ur));
    };
      
     useEffect(getUsers,[]);
     //after delete refresh
    const deleteMovie=(id)=>{
    fetch(`https://6166c4e813aa1d00170a6715.mockapi.io/myUsers/${id}`,
     {method:"DELETE",
     }).then(()=>getUsers());
     }
      
        const history=useHistory();
    return(
        <section className="user-list">
            {users.map(({name,pic,mobile,email,occupation,salary,id})=>(
                <User 
                pic={pic}
                name={name}
                mobile={mobile}
                email={email}
                occupation={occupation}
                salary={salary}
                id={id}
                deleteButton={<IconButton 
           
                    onClick={() =>  deleteMovie(id)}
                     
                    className="user-show-button"
                    color="error"
                    aria-label="delete user"
                    >
                      <DeleteIcon />
                    </IconButton>}
          
                  editButton={<IconButton 
                    style={{marginLeft:"auto"}}
                    className="user-show-button" 
                    onClick={() => history.push("/users/edit/" + id)}
                    color="primary" 
                    aria-label=" edit user" >
                      <EditIcon />
                    </IconButton>}
                  />))}
              </section>
    );
    
}