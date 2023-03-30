import { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { main } from "../../../../style/NS";
import chartConfigs  from "../../start_pages/siteup/util/chartConfigs";

const Chart_day =({data,title}:any)=>{
const [data_list, setdata_list] = useState([[0],[0]])


const print_=(value: any[])=>{


  const week=["월요일","화요일","수요일","목요일","금요일","토요일","일요일"]
const hours = Array.from({length: 7}, (_, i) => week[i]);
const result = hours.map(weeks => {
  const hourData = value.find(value_ => value_.x === weeks);

  return hourData || {x: weeks, y: 0};
});

const x = result.map(hour => hour.x);
const y = result.map(hour => hour.y);
  return [x,y]
}
/** 

useEffect(() => {
  console.log("dadtat : ",data)
  let final_data:any[]= []
let final_name:any[]=[]
 data.map((row:any)=> final_data.push( row["y"]))
 data.map((row:any)=> final_name.push( row["x"]))
 console.log("fianl1 : "+JSON.stringify(final_data)+"final2 : "+JSON.stringify(final_name))
  return () => {
    
  }
}, [data])

**/

    return (<>
  <View style={{justifyContent:"center",alignItems:"center"}}>
<Text style={{margin:20,textAlign:"left"}}>
  {title}
</Text>
</View>     
 <View style={[{flexDirection:"column",overflow:"hidden",margin:10,backgroundColor:"white",borderRadius:5,justifyContent:"center",alignItems:"center"}]}>

  <LineChart
     data={{
      labels: print_(data)[0],
      datasets: [
        {
          data: print_(data)[1]
        },
      
      ]
    }}
    style={{marginLeft:-30}}
  width={Dimensions.get("window").width*0.89}
  height={Dimensions.get("window").width*0.7}
  verticalLabelRotation={30}
  chartConfig={chartConfigs[2]}
  
  
  bezier
/>

</View>
{/** 
<LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#3670F9",
      backgroundGradientFrom: "#2B71C1",
      backgroundGradientTo: "#0D96AB",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "white"
      }
    }}
    bezier
   
  />**/}

    </>)
}

export default Chart_day;