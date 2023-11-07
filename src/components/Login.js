import React, {useState} from 'react';
import axios from "axios";

function Login(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function usernameHandler(event) {
        setUsername(event.target.value);
    }

    function passwordHandler(event) {
        setPassword(event.target.value);
    }

    function login() {
        let data = JSON.stringify({
            "username": username,
            "password": password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/auth/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                localStorage.setItem("Token", response.data.token)
                window.open("/","_self");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Login</h1>
            <p>Username: <input type={"text"} onChange={usernameHandler}/></p>
            <p>Password: <input type={"password"} onChange={passwordHandler}/></p>
            <p>
                <button onClick={login}>Login</button>
            </p>
        </div>
    );
}

export default Login;