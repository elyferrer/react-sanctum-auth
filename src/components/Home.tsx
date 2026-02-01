import { useState, useEffect } from 'react'
import axios from 'axios';

interface Home {}

interface UserData {
    name: string
}

const Home = ({}: Home) => {
    const [userData, setUserData] = useState<UserData>({
        name: ''
    });
    
    axios.defaults.withCredentials = true;
    const getUserData = async () => {
        // await axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {
        //     axios.get('http://localhost:8000/api/user').then(res => {
        //         setUserData(res.data);
        //     });
        // });

        const response = await axios.get(
            'http://localhost:8000/api/user', 
            { 
                headers: { 'Authorization': 'Bearer 1|B8MWKgxyF3zX61D2OooNJFtnpUazVRsfrPWWh13K7fd770d2'}
            }
        );

        setUserData(response.data);
    }

    useEffect(() => {
        getUserData();
    }, []);
    return (
        <div>
            <p>Hello { userData ? userData.name : ''}</p>
        </div>
    )
}

export default Home
