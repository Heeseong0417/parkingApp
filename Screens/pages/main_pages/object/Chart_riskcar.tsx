import { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { main } from "../../../../style/NS";
import chartConfigs  from "../../start_pages/siteup/util/chartConfigs";

const Chart_riskcar =({data,title}:any)=>{
const [data_list, setdata_list] = useState([[0],[0]])


const print_=(value: any[])=>{
  const x = Array.from({length: 24}, (_, i) => i);
  const y= (Object.values(value))
  console.log("x : ",x)
  console.log("y : ",y)
 return [x,y]
}

/** 2
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
{print_(data)[1]}
</Text>
</View>     
 <View style={[{flexDirection:"column",backgroundColor:"white",borderRadius:5,justifyContent:"center",alignItems:"center"}]}>


 <LineChart
  yAxisLabel=""
  yAxisSuffix=""
  
  yAxisInterval={5} // optional, defaults to 1
     data={{
      labels: print_(data)[0],
      datasets: [
        {
          data: print_(data)[1]
        },
    
      ]
    }}
    style={{marginLeft:-30}}
    segments={3}
    width={Dimensions.get("window").width}
    height={Dimensions.get("window").width*0.7}
  verticalLabelRotation={30}
  chartConfig={chartConfigs[3]}
  fromZero
  
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
   
  /> **/}
    </>)
}

export default Chart_riskcar;