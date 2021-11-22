import { Card, CardActions, CardContent } from "@mui/material";


export function  User({ name,pic ,email,mobile,occupation,salary,deleteButton,editButton}){
    return(
            <Card className="user-container">
            <img className="user-pic" src={pic} alt={name} />
            <CardContent>
            <p><b>Name:</b>  {name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Mobile:</b> {mobile}</p>
            <p><b>Occupation</b> {occupation}</p>
            <p><b>Salary:</b>  {salary}</p>
            <CardActions>
                {deleteButton} {editButton}
            </CardActions>
            </CardContent>

            </Card>
    );
};
