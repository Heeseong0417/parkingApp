import { Text, View } from "react-native"
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryTheme, VictoryZoomContainer } from "victory-native"
import { main, width_ } from "../../../../style/NS"


const Chart =({data}:any)=>{
const print_=(value: any[])=>{

const hours = Array.from({length: 24}, (_, i) => i);
const result = hours.map(hour => {
  const hourData = value.find(value_ => value_.x === `${hour} 시`);

  return hourData || {x: `${hour}시`, y: 0};
});

const x = result.map(hour => hour.x);
const y = result.map(hour => hour.y);
  return result
}

    return(<>
    <View style={[{flexDirection:"row",flexWrap:"nowrap",margin:10,borderRadius:5,backgroundColor:"white",justifyContent:"center",alignItems:"center"},main.shadow]}>
   
    <VictoryChart
     /**
     animate={{
       duration: 1000,
       onLoad: { duration: 1000 }
     }} */
     
      width={width_*340}
      height={width_*340}
theme={VictoryTheme.grayscale}
domainPadding={50}

containerComponent={
  <VictoryZoomContainer responsive={false}
    zoomDimension="x"
    

  />
}
>
     <VictoryAxis
          name='name'
          dependentAxis
          
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fill: '#94A2AD' },
            grid: {
              fill: '#94a2ad',
              stroke: 'gray',
              pointerEvents: 'painted',
              strokeWidth: 0.2,
            },
          }}
        />
         <VictoryAxis 
         
         tickFormat={(t,i)=>(i)%2==1?t: (i)==0? t:""}
         
         />
<VictoryBar
cornerRadius={5}
style={{ data: { fill: "#b8b8d2" } }}
data={print_(data)}/>
<VictoryLine
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    data={print_(data)}
    labels={({ datum }) => datum.y%3==0?datum.y:""}
   
  />
</VictoryChart>
        </View> 
       
    </>)
}
export default Chart 

