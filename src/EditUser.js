import TextField from '@mui/material/TextField';
import { useState ,useEffect} from 'react';
import Button from '@mui/material/Button';
import { useParams,useHistory } from 'react-router-dom';

export function EditUser() {
  const { id } = useParams();
  //const movie = movies[id];
  

  const [user, setUser]=useState(null);
  useEffect(()=>{
    fetch(`https://6166c4e813aa1d00170a6715.mockapi.io/myUsers/${id}`,
    {method:"GET",
  })
    .then((data)=>data.json())
    .then((ur)=>setUser(ur));
  },[id]);
  
  return user ? < UpdateUser user={user} />:"";

}
  


function UpdateUser({user}){
    const [name, setName] = useState(user.name);
    const [pic, setPic] = useState(user.pic);
    const [mobile, setMobile] = useState(user.mobile);
    const [email, setEmail] = useState(user.email);
    const [occupation, setOccupation] = useState(user.occupation);
    const [salary, setSalary] = useState(user.salary);
  
  const history=useHistory();

  const editUser= () => {
    
    const updatedUser = {
      name,
      pic,
      mobile,
      email,
      occupation,
      salary,
    }; //shorthand
    console.log(updatedUser);
    fetch(`https://6166c4e813aa1d00170a6715.mockapi.io/myUsers/${user.id}`,
  {
    method:"PUT",
    body:JSON.stringify(updatedUser),
    headers:{'Content-Type':'application/json',},
}).then(()=>history.push("/users"));
};
  

  return (
    <div className="create-user-form">
    <TextField
      value={name}
      onChange={(event) => setName(event.target.value)}
      label="Name"
      variant="standard" />

    <TextField
      value={pic}
      onChange={(event) => setPic(event.target.value)}
      label="pic"
      variant="standard" />

    <TextField
      value={mobile}
      onChange={(event) => setMobile(event.target.value)}
      label="mobile"
      variant="standard" />

    <TextField
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      label="email"
      variant="standard" />
    <TextField
      value={occupation}
      onChange={(event) => setOccupation(event.target.value)}
      label="occupation"
      variant="standard" />

  <TextField
      value={salary}
      onChange={(event) => setSalary(event.target.value)}
      label="salary"
      variant="standard" />

    
      <Button onClick={editUser} variant="outlined">Save User</Button>
    </div>
  );
}
