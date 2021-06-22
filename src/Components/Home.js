import React, {useEffect, useState} from 'react';
import io from 'socket.io-client'
let socket;
const apiEndPoint= "http://localhost:2000/"

const Home = () => {
    const [message, setMessage] = useState('Helo this is: ');
    const [notification, setNotification]=useState('')
    useEffect(()=>{
        socket = io(apiEndPoint);

        // socket.on('notification',function (data){
        //     setNotification(data)
        // })

        console.log("Use Effect")
    },[apiEndPoint])

    useEffect(()=>{
        socket.on("notif", (data)=>{
            console.log("Notif")
            setNotification(...notification, data)
        })
    },[])

    const click = ()=>{
        console.log("printing");
        // socket = io(apiEndPoint);

        socket.emit('message', message, () => setMessage(''));
    }

    return (
         <div>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" 
            onChange={event => setMessage(event.target.value)}/>
            <button onClick={click}>Click me</button>
            {notification}
        </div>
    );
};

export default Home;
