
import {View,Image} from 'react-native-animatable';

import React, {useEffect, useRef, useState, type PropsWithChildren} from 'react';
import safety_no_move from "./assets/logo/safety_move.gif"
import StartNavigation from './Screens/navigation/StartNavigation';
import parking_no_move from "./assets/logo/parking_no_move.png"
import {io} from 'socket.io-client';

import { Alert } from 'react-native';
import { IP } from './util/ServerPath';
const App = () => {
  const [splash, setsplash] = useState(true)
  const [isReady, setIsReady] = useState(false);
  const serverMessagesList:any= [];
  const getFonts = async () => { 
  };



  useEffect(() => {
   
    setTimeout(() => {
      setsplash(data => data = false)
    }, 3000);
    return () => {
       
    }
  }, [])
  
  const ws = useRef(io('http://192.168.1.6:8002/test'));
  useEffect(() => {
    ws.current = io('http://192.168.1.6:8002/test');
   // console.log(ws.current)
    ws.current.on('test', data => {
      Alert.alert("go")
      serverMessagesList.push(data);
      serverMessagesList([...serverMessagesList]);
      console.log("recive : ",serverMessagesList)
      Alert.alert(serverMessagesList)
      // Handle notification
    });
    
  }, []);
  /**
useEffect(() => {
  
    ws.current = new WebSocket(`http://10.0.2.2:8002`)
  

    console.log(ws.current)
    
    ws.current.onopen = () => {
        // connection opened
        Alert.alert("connected!")
        console.log('connected')
        // send a message\
        
    };

    ws.current.onmessage = (e) => {
        // a message was received
        console.log(e.data);   
    };

    ws.current.onerror = (e) => {
        // an error occurred
        console.log(e.message);
    };

    ws.current.onclose = (e) => {
        // connection closed
        console.log(e.code, e.reason);
    };

    return () => {
        ws.current.close();
    };
}, [])
  */ 
    return (<>
    {
splash ? (<>

<View style={{backgroundColor:"#0073F0",flex:1,justifyContent:"center"}}><Image animation={"fadeInUp"} source={parking_no_move}  style={{resizeMode:"contain",width:"100%",height:"100%"}} /></View></>):(<StartNavigation/>)}

    
    
    
    </>);
};



export default App;
