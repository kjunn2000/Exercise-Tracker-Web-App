import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateUser extends React.Component{
    constructor(props){
        super(props);

        this.state={
            username:"",
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user={
            username : this.state.username
        }

        console.log(user);

        axios.post("http://localhost:5000/users/add",user)
            .then(res=>{
                console.log(res.data)
            });
        
        this.state.username='';


    }

    render(){
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Label className="m-3 h2">Craete New User</Form.Label>
                <Form.Group>
                    <Form.Label className="m-3">Username</Form.Label>
                    <Form.Control className="m-3" type="text" value={this.state.username} onChange={this.onChangeUsername} />
                </Form.Group>
                <Button className="m-3" type="submit">Submit</Button>           
            </Form>
        );
    }
}
