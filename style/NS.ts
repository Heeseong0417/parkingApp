import { Dimensions, StyleSheet } from "react-native";
const basicDimensions = { // 디자이너가 작업하고 있는 XD파일 스크린의 세로,가로
  height: 740,
  width: 360,
};
const height:any = ( 
  Dimensions.get('screen').height *
  (1 / basicDimensions.height)
).toFixed(2);
const width:any = ( 
  Dimensions.get('screen').width *
  (1 / basicDimensions.width)
).toFixed(2)
export let height_=height
export let width_=width

export const main = StyleSheet.create(
    {
        main:{
            backgroundColor:"white",
            flex:1,
            flexDirection:"column",
            justifyContent:"center"
    },
    title:{
        textAlign:"center",
        fontSize:width * 25,
        fontWeight:"900",
        color:"black",
        opacity:0.8,
        margin:3
    },s_title:{
        textAlign:"center",
        fontSize:width*20,
        fontWeight:"400",
        opacity:0.8,
        margin:3,
        color:"gray"
    },r_button:{
        borderRadius:15,
        backgroundColor:"#0073F0",
        margin:10,
        borderColor:"whtie",
        paddingHorizontal:20,
        paddingVertical:10
    },text_b:{
        textAlign:"center",
        color:"white",
        fontSize:width*18
    },big_img:{
        flex:1,
        width:"100%",
        transform:[{scale:1.5}],
        resizeMode: "cover",
        borderRadius:10,
        opacity:0.9
      },shadow:{
        shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
      },tab_style:{
position:"absolute",
backgroundColor: "#0073F0",


height:height*60,
borderTopLeftRadius:20,
borderTopRightRadius:20,

      },header_style:{
        //borderBottomLeftRadius:10,borderBottomRightRadius:10,
        backgroundColor: "white",//"#0073F0",
        borderWidth:0,
 
        width:"100%"
      },tab_text:{
        

      },
      tab_active:{
        position:'absolute',
        top:-20,
       
        width:50,
        height:50,
        borderRadius:50/2,
        backgroundColor:"white",
        flex:1, 
        color:"red",
        justifyContent:"center",
        alignItems:"center"
      },
      tab_inactive:{position:'absolute',flex:1, color:"black"},
      tab_warpper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        
      },tab_anime:{
        
      },stick:{
        paddingHorizontal:10,
        margin:10,
      borderBottomWidth:1,
      opacity:0.3,
      color:"gray"
      
      },flex_button:{
        width:"100%",
        flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"center",textAlign:"center"
      },flex_button2:{
        
        width:"100%",
        flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"center"
      },flex_blue_btn:{
        
        backgroundColor:"#0073F0",
        borderRadius:10,
        margin:10,
        padding:15,
        
       
      },flex_blue_btn_text:{
        color:"#fff",
        
        fontSize:width*15,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
      },


    })

    export const site_up = StyleSheet.create({

      siteup_con:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      flexDirection:"column"
      },
      form_title_con:{
       
        justifyContent:"flex-start",
        alignItems:"center",
        textAlign:"center",
        margin:10
      },
      form_title:{
        color:"black",
          fontSize:width*25,
          fontWeight:"900",
          
          opacity:0.8,
          margin:10  
        
      },form_text_input:{
        flex:1,
        flexDirection:"row",
        borderRadius:5,
        borderWidth:1,
        opacity:0.8,
        padding:10,
      
      
        borderColor:"#f0f0f0"
      
       
      },form_text:{
        color:"black",
        fontSize:width*15,
        fontWeight:"500",
        
        opacity:0.8,
      
      },form_text_bold:{
        color:"black",
        fontSize:width*20,
        
        
        opacity:0.8,
      
      },form_item:{
        margin:10,
        justifyContent:"space-around",textAlign:"center",flexDirection:"row",alignContent:"center"
      },form_btn:{
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
      
        backgroundColor:"#0073F0",
        borderRadius:5,
       
        padding:5,
       
      },flex_blue_btn_text:{
        color:"#fff",
        
        fontSize:width*15,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
      }
      ,main_box_col:{
        flex:1,
        flexDirection:"column",
        borderRadius:5,
        borderWidth:1,
        opacity:0.8,
        padding:20,
        borderColor:"#f0f0f0"
      }
      
        })