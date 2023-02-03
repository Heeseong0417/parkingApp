import { Text, View } from "react-native"
import { main } from "../../../../style/NS"


const Title =({title,subtitle,sub}:any)=>{

    return(<>
    <View style={{width:"100%",margin:10,flexDirection:"column",alignItems:"flex-start",opacity:0.9}}>
        {title!=""?
        <View>
           <Text style={[main.title,{fontWeight:"bold",color:"black",opacity:0.9}]}>{title}</Text>    
        </View>:<></>}
        <View style={[main.stick]}/>
        {subtitle!=""?
        <View>
        <Text style={[main.s_title]}>{subtitle}</Text>    
     </View>:<></>}
     {sub!=""?
             <View>
             <Text>{sub}</Text>    
          </View>:<></>}
       
  
    </View>
    
    </>)
}
export default Title