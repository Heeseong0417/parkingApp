
import {View,Image} from 'react-native-animatable';
import PushNotification from 'react-native-push-notification';
import React, {Component, useEffect, useRef, useState, type PropsWithChildren} from 'react';
import safety_no_move from "./assets/logo/safety_move.gif"
import StartNavigation from './Screens/navigation/StartNavigation';
import parking_no_move from "./assets/logo/parking_no_move.png"
import {io} from 'socket.io-client';
import { checkMultiple, Permission, PERMISSIONS, requestMultiple } from 'react-native-permissions';
import { Alert, AppState, Platform, SafeAreaView, Text } from 'react-native';
import { IP, IP_ } from './util/ServerPath';
import { notification_run, notification_set } from './Screens/Notification/notification';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IonIcon from "react-native-vector-icons/Ionicons"
import Set_permission from './Screens/Notification/Set_permissions';
  ///////////////////////////////권한요청///////////////////////////////////////////////////////////////
  
    ///////////////////////////////권한요청///////////////////////////////////////////////////////////////

const App = () => {
  const [splash, setsplash] = useState(true)
  const [isReady, setIsReady] = useState(false);
  const [socket_data, setsocket_data] = useState("")
  const serverMessagesList:any= [];
  const [pm, setpm] = useState(true)

  notification_set("hello","my channel~")
 
  const  componentDidMount=()=> {
    AppState.addEventListener('change', handleAppStateChange);
  }



  const handleAppStateChange = (appState:any) => {
    if (appState === 'background') {
      console.log("print ! ")
      notification_run("title1",null,"hello","car")
    }
}

  /** 
  PushNotification.createChannel(
    {

      channelId: "hello", // (required)
      channelName: "My channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.

    },
    (created) => console.log(`createChannel returned '${created}'`) )
  
    const handleAppStateChange = (appState: string) => {
    if (appState === 'background') {
      PushNotification.localNotificationSchedule({
          message: "My Notification Message", // (required)
          date: new Date(Date.now() + 10 * 1000) // in 60 secs
      });
    }
}
  */


  useEffect(() => {
    componentDidMount()
    
    setTimeout(() => {
      setsplash(data => data = false)
    }, 3000);
    return () => {
       
    }
  }, [])
  
  const ws = useRef(io(`${IP_}`));
  useEffect(() => {
  
    ws.current = io(`${IP_}`);
    ws.current.on('connect', () => {
      console.log('connected to server');
    });
   // console.log(ws.current)
   ws.current.on('test', data => {
    //console.log("dfdf")
    console.log(JSON.stringify(data))
    notification_run("title1",null,"hello","car")
    //Alert.alert("go")
    /** 
    PushNotification.localNotificationSchedule({
      title:'공동주택 주차관제 시스템',
      date:new Date(new Date().getTime()+1),
      message:`위험차량 (${data})가 입차하였습니다.`,
      allowWhileIdle:false,
      channelId: "hello"
    });*/
   })
   /** 
    ws.current.on('test', data => {
      Alert.alert("go")
      console.log("gogo")
      serverMessagesList.push(data);
      serverMessagesList([...serverMessagesList]);
      console.log("recive : ",serverMessagesList)
      Alert.alert(serverMessagesList)
      // Handle notification
    });
   */
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

<View style={{backgroundColor:"#0073F0",flex:1,justifyContent:"center"}}><Image animation={"fadeInUp"} source={parking_no_move}  style={{resizeMode:"contain",width:"100%",height:"100%"}} /></View></>):(pm?(<StartNavigation/>):(<Set_permission/>))}

    
    
    
    </>);
};



export default App;
