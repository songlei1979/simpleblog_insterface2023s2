import React, {useEffect, useState} from 'react';
import axios from "axios";

function Logout(props) {

    const [token, setToken] = useState("")
    useEffect(() => {
        setToken(localStorage.getItem("Token"))
    }, []);

    function logout() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/auth/logout/',
            headers: {
                'Authorization': 'token '+token
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                localStorage.removeItem("Token");
                window.open("/","_self");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Logout;