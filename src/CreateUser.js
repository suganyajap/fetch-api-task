import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory} from "react-router-dom";

export function CreateUser() {
  const history =useHistory();
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [salary, setSalary] = useState("");

  const createUser = () => {
    const newUser = {
      name,
      pic,
      mobile,
      email,
      occupation,
      salary,
    }; //shorthand
      

    fetch(`https://6166c4e813aa1d00170a6715.mockapi.io/myUsers`,
          {
            method:"POST",
            body:JSON.stringify(newUser),
            headers:{'Content-Type':'application/json'}
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

      <Button onClick={createUser} variant="outlined">Create User</Button>
    </div>
  );
}

