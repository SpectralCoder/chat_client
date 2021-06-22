import React, {useEffect, useState} from 'react';
import io from 'socket.io-client'

let socket;
const apiEndPoint= "http://localhost:2000/"

const Socket = () => {
    const [message, setMessage] = useState('White mara');

    const [notification,setNotification] = useState('')

    useEffect(()=>{
        socket = io(apiEndPoint);

        // socket.on('notification',function (data){
        //     setNotification(data)
        // })

        console.log("Use Effect")
    },[apiEndPoint, message])

    const click = ()=>{
        console.log("printing");
        // socket = io(apiEndPoint);

        socket.emit('message', message, () => setMessage(''));
    }

    return (
        <div>
            <h1>{notification}</h1>
            <button onClick={click}>Click me</button>
        </div>
    );
};

export default Socket;