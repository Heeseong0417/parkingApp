


const toDay = () => {
    const now = new Date(); // 현재 시간
    const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000); // 현재 시간을 utc로 변환한 밀리세컨드값
    const koreaTimeDiff = 9 * 60 * 60 * 1000; // 한국 시간은 UTC보다 9시간 빠름(9시간의 밀리세컨드 표현)
    const date = new Date(utcNow + koreaTimeDiff); // utc로 변환된 값을 한국 시간으로 변환시키기 위해 9시간(밀리세컨드)를 더함
    var week = new Array('일', '월', '화', '수', '목', '금', '토');
  
    var localTime = date.toTimeString().substring(0,8);
  
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var dayName = week[date.getDay()];
 
    let result = {'date':year+'-'+("00"+month.toString()).slice(-2)+'-'+("00"+day.toString()).slice(-2),"week":dayName,'time':localTime}
    
       console.log(result)
    return result
    //return year+'/'+month+'/'+day+'/'+dayName+'-'+localTime;
  }

  export default toDay;