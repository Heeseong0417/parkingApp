import { useState } from "react"
import { Dimensions, Text, View } from "react-native"
import { LineChart } from "react-native-chart-kit"
import chartConfigs from "../../start_pages/siteup/util/chartConfigs"


const Chart_predict=({data,data2,title}:any)=>{
    const [data_list, setdata_list] = useState([[0],[0]])
    
    
    const print_=(value: any[])=>{
        console.log("value !!!!!! :",value)
        const hours = Array.from({length: 24}, (_, i) => i);
        

        const x = hours
        const y = data
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
  <View style={[{flexDirection:"column",margin:10,backgroundColor:"white",borderRadius:5,justifyContent:"center",alignItems:"center"}]}>
 
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
      width={Dimensions.get("window").width}
      height={Dimensions.get("window").width*0.7}
      verticalLabelRotation={30}
      chartConfig={chartConfigs[3]}
      withHorizontalLabels={true}
      withHorizontalLines={true}
      bezier
    />
    
    </View>
   
    
        </>)
    }

export default Chart_predict