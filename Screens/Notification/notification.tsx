import PushNotification from "react-native-push-notification"

export  const notification_set =(id:any,name:any)=>{
    return PushNotification.createChannel(
        {
    
          channelId: id?id:"hello", // (required)
          channelName: name?name:"My channel", // (required)
          channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
          soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
          importance: 4, // (optional) default: 4. Int value of the Android notification importance
          vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    
        },
        (created) => console.log(`createChannel returned '${created}'`) )
  
}

export const notification_run=(title:any,message:any,id:any,data:any)=>{
    return PushNotification.localNotificationSchedule({
        title:title?title:'공동주택 주차관제 시스템',
        date:new Date(new Date().getTime()+1),
        message:message?message:`위험차량 (${data})가 입차하였습니다.`,
        allowWhileIdle:false,
        channelId: id? id:"hello"
      });
}