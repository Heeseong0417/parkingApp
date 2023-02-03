
import { Dimensions, StyleSheet, useWindowDimensions } from 'react-native';

import { useEffect } from 'react';


const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;



export const safety_main = StyleSheet.create(
{
  category:{
    flex:1,
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    magin:5,
    padding:5,borderRadius:15,
    backgroundColor:"white"

  },category_title:{
    margin:5,
    textAlign: "left",
    color:"black",
    opacity:0.8,
    fontWeight:"bold",
    
    fontSize:WINDOW_HEIGHT/45,
    borderRadius:15
  },category_subtitle:{
   margin:5,
    textAlign: "left",
    color:"black",
    opacity:0.8,
   
    
    fontSize:WINDOW_HEIGHT/50
  },category_subtitle_thin:{
    margin:5,
     textAlign: "left",
     color:"black",
     opacity:0.8,
    
     
     fontSize:WINDOW_HEIGHT/50
   },category_txt:{
    margin:5,
    textAlign: "left",
    color:"black",
    opacity:0.8,
   
    
    fontSize:WINDOW_HEIGHT/55
  },category_divline:{
    paddingHorizontal:10,
    margin:10,
  borderBottomWidth:1,
  opacity:0.3,
  color:"gray",
  borderWidth:WINDOW_WIDHT/4

  },category_button:{
    backgroundColor:"white",
    margin:5,
    padding:5,
    borderRadius:5,
    
   
    opacity:0.8
    
  },
  card:{
flex:1,
flexDirection:"column",
justifyContent:"flex-start",
alignItems:"flex-start",
marginHorizontal:5,
padding:5,borderRadius:15,
backgroundColor:"white"

  },
  card_title:{
    backgroundColor:"white",
    margin:5,
    textAlign: "left",
    color:"black",
    opacity:0.8,
    fontWeight:"bold",
    
    fontSize:WINDOW_HEIGHT/40,
    borderRadius:15
  },card_subtitle:{
   margin:5,
    textAlign: "left",
    color:"black",
    opacity:0.8,
   
    
    fontSize:WINDOW_HEIGHT/50
  },
  home_btn:{
    
    borderRadius:30,
    backgroundColor:"#0073F0",
    margin:20,
    padding:10,
    justifyContent:"center",
    flexDirection:"column",
    paddingVertical:30

  },
  home_btn_s:{
    
    borderRadius:30,
    backgroundColor:"#0073F0",
    margin:20,
    padding:10,
    justifyContent:"center",
    flexDirection:"column",
    paddingVertical:30

  }
   
  
,shadow:{
  shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5
},list_view:{
  flex: 1,
  flexDirection:"column",
  justifyContent: 'center',
  
  
  },
  list_title:{
  color:"gray",
  fontSize:WINDOW_WIDHT/22,
  fontWeight:"bold",
  
  opacity:0.8,
  margin:5

  },main_list_item:{
    flexGrow:1,
     justifyContent: "center",
    width:WINDOW_WIDHT,
    textAlign:"center"

  },
  home_button_w:{
textAlign:"center",
color:"white",


  },home_button_b:{
    textAlign:"center",
    color:"black",
    opacity:0.6,
    
  },home_title_b:{
    marginVertical:10,
    marginHorizontal:5,
    textAlign: "left",
    color:"black",
    opacity:0.8,
    fontWeight:"bold",
    
    fontSize:WINDOW_HEIGHT/30
  },home_title_b_s:{
    marginBottom:10,
    marginHorizontal:5,
    textAlign: "left",
    color:"black",
    opacity:0.8,
    
    
    fontSize:WINDOW_HEIGHT/55
  }
}
)
export const styles = StyleSheet.create({
    chartforLine: {
      marginBottom: 30,
      padding: 0,
      paddingTop: 0,
      borderRadius: 20,
      width: 375,
      backgroundColor: "white",
      
    },
    chartforBar: {
      marginBottom: 30,
      padding: 0,
      paddingTop: 0,
      borderRadius: 20,
      backgroundColor: 'white',
      
      width: 350
    },
    fonts:{ }
  });

  export const styles_account = StyleSheet.create({
    
    mainstyle : {
      alignItems:"center",
      alignContent:"center",
      justifyContent:'center',
      padding:0,
      flex:1,
 color:"dark",
  fontSize:20
  
    },
    textInput: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
    },
    submitButton: {
      borderRadius:5,
      
      alignContent:'center',
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
     padding:10,
     margin:10,
      backgroundColor: "rgba(112,113,116,1)",
      width: WINDOW_WIDHT/5,
      
    },
    submitButtonText: {
      color: 'white'
    },
    textcolor:{
      
      //shadowColor:'black',
      fontSize:WINDOW_WIDHT/36 ,
      color:'gray'
      
    },
    textcolor_bold:{
     
      //shadowColor:'black',
      fontSize:15,
      color:'gray',
      fontWeight:'bold'
    },
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    titletext:{
      
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      }
    
  })
  export const styles_slider = StyleSheet.create({
    wrapper: {
padding:20,
height:WINDOW_HEIGHT/4,

    },
    slide1: {
      
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     

    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      padding:5,
      fontWeight:"bold",
        color:"gray",
        opacity: 0.8,
        
        fontSize:WINDOW_WIDHT/30
      
    }
  })
  
  export const styles_main = StyleSheet.create({
header_black:{
 
  height:20
},
    header_con:{
  flexDirection:"row",
  paddingTop:10,

  justifyContent:"space-around",
  color:"#fff",
  fontWeight:"700",
  
  fontSize:WINDOW_WIDHT/20
},header_text:{
 opacity:0.8,
  justifyContent:"space-between",color:"#fff",fontWeight:"700",fontSize:WINDOW_WIDHT/20

},stick:{
  paddingHorizontal:10,
  margin:10,
borderBottomWidth:1,
opacity:0.3,
color:"gray"

},
    main_con:{
      height:WINDOW_HEIGHT*0.94,
  backgroundColor:"#007FFF",
marginBottom:WINDOW_HEIGHT/12,
 borderRadius:10,
},main_con_center:{
  alignItems:"center",
  justifyContent:"center",
  margin:10,
  padding:10,
  flex:1,
  flexDirection:"column"
},
    main_sc :{
  margin:20,

flex:1,
flexDirection:"column",
justifyContent:"center",
alignItems:"center"

},
text_b:{
  padding:10,
  color:"black",
  opacity: 0.8,
  
  fontSize:WINDOW_WIDHT/30
},
text_w:{
  padding:10,
color:"white",
opacity: 0.8,

fontSize:WINDOW_WIDHT/35

},text_g:{
  padding:10,
  color:"black",
  opacity: 0.8,
  
  fontSize:WINDOW_WIDHT/40
  
  },box_b:{
    alignItems:"center",
   justifyContent:"center",
    backgroundColor:"black",
    opacity: 0.8,
   borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    borderTopEndRadius:30,
    borderColor:'black',

    height:WINDOW_HEIGHT/20,
    width:WINDOW_WIDHT*0.6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  box_board:{
    borderWidth: 1,
    alignItems:"center",
   justifyContent:"center",
    opacity: 0.8,
borderRadius:5,

    borderColor:'#E2E2E2',
    shadowColor:"black",
  },title_h1:{

    padding:10,
    alignItems:"center",
   justifyContent:"center",
   color:"black",
    opacity: 0.8,
    
    fontSize:WINDOW_WIDHT/20,
    fontWeight:"bold"
  },
  title_h4:{

    padding:10,
    alignItems:"center",
   justifyContent:"center",
   color:"black",
    opacity: 0.8,
    
    fontSize:WINDOW_WIDHT/40,
    fontWeight:"bold"},
    title_h2:{

      padding:10,
      alignItems:"center",
     justifyContent:"center",
     color:"black",
      opacity: 0.8,
      
      fontSize:WINDOW_WIDHT/30,
      fontWeight:"bold"},
  
  box_shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },mbox:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
    borderRadius:20,
    backgroundColor :"white",
   
    padding:10,
    margin:15
  },
  main_card:{
    backgroundColor:"white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 

   
    padding:10,
    marginVertical:10,
  },
  main_card_nomargin:{
    backgroundColor:"white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 

   


  },
  main_card_title:{
color:"black",
opacity:0.8,


fontSize:WINDOW_WIDHT/15,
fontWeight:'bold'
  },
  main_card_sub:{
    color:"black",
    opacity:0.8,
    
    fontSize:WINDOW_WIDHT/20,
    fontWeight:'bold'
    
      },
      main_card_text:{
        color:"black",
        opacity:0.8,
        
        fontSize:WINDOW_WIDHT/30
      },
      main_card_divide:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
      }, 
       main_card_img_white:{
        flex:2,
        backgroundColor:"white",
        resizeMode: "cover",
        borderRadius:5,
        height:WINDOW_HEIGHT/16,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        marginRight:10,
        opacity:0.8
      },
      main_card_img:{
        flex:2,
        backgroundColor:"gray",
        resizeMode: "cover",
        borderRadius:5,
        height:WINDOW_HEIGHT>WINDOW_WIDHT? WINDOW_HEIGHT/8:WINDOW_HEIGHT/2,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        marginRight:10,
        opacity:0.8
      },main_card_divt:{
        borderRadius:5,
        marginLeft:10,
        padding:10,
       
        flex:3,
        justifyContent:"space-around",
        alignItems:"stretch",
       
       
      },main_card_same:{
        borderRadius:5,
        marginLeft:10,
        padding:10,
       
        flex:1,
        justifyContent:"space-around",
        alignItems:"stretch",
       
       
      },
      
      icon_con:{
        flex:1,
        padding:5,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

      },
      logo_img:{
        width:WINDOW_WIDHT/3,
        padding:10,
      
        resizeMode:"contain"
      },tabbar_text:{
   
        color:"white",
        opacity: 0.8,
        
        fontSize:WINDOW_WIDHT/30
      },chart_con:{
        
      
        flex:1,
        alignContent:"center",flexDirection:"row",alignItems:"center"


      }



  })
  export const styles_test = StyleSheet.create({
    modal_style:{
      flex:1,
      margin:10,
      padding:10,
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"space-around",
      
      borderRadius:10
    },
    main_home_con:{
flex:9,
flexDirection:"row",
justifyContent:"center",
alignItems:"center",




    },modal_items:{
      alignItems:"center",
      justifyContent:"flex-start"


    },
    mainbackgroundcolor:{


      backgroundColor:"#007FFF"
    }
    ,main_home_button: {
      margin:10,
padding:10,

borderRadius:20,
backgroundColor:"#007FFF",
width:WINDOW_WIDHT/3,
height:WINDOW_WIDHT/3,

justifyContent:"space-around",flexDirection:"column",alignItems:"center",
shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5

    },
    main_test_button: {
    
      flex:1,
      margin:10,
padding:20,

borderRadius:20,
backgroundColor:"#007FFF",

opacity:0.95,
justifyContent:"space-around",flexDirection:"column",alignItems:"center",
shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5

    },
    test_cat_button: {
      
      margin:10,
    flexShrink:0,
flex:1,
padding:10,

borderRadius:10,
backgroundColor:"#F4F3FD",
fontSize:WINDOW_WIDHT/35,
opacity:0.95,
justifyContent:"space-around",flexDirection:"column",alignItems:"center",
shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5

    },
    
    test_submit:{
      
     color:"white",
     
      margin:10,
padding:20,

borderRadius:20,
backgroundColor:"#007FFF",
opacity:0.95,
justifyContent:"space-around",flexDirection:"column",alignItems:"center",
shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 2,
},

shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5 
    }
  }
  )
  export const grany_home = StyleSheet.create({
    main_con:{
      flex:1,
    padding:10
      
     
    },m_v:{flex:1//,width:WINDOW_WIDHT,height:WINDOW_HEIGHT
  ,backgroundColor:"white"
  },
    main_view:{
      flex:1,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      
    },
    items_con:{
      flex:1,
    
      padding:10,
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"space-around",
      
      borderRadius:10
    },
  main_shadow:{
    shadowColor: "#000",
shadowOffset: {
  width: 0,
  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5
  },
  main_round:{
    borderWidth:2,
    borderRadius:30,
    borderColor:"#EEE7E7",
    backgroundColor:"white"


  },
  main_header:{
    
 
    flexDirection:"row",
    backgroundColor:"#fff",
    
    justifyContent:"space-around",
    alignItems:"center",
    
    height:WINDOW_HEIGHT/13,
    
  },
  main_header_i:{
    
  },
  main_ht:{
    
    color:"#000",
        opacity:0.8,
        
        fontSize:WINDOW_WIDHT/20,
        fontWeight:'bold'
  },
  main_timg_text:{
    color:"black",
    opacity:0.8,
    
    fontSize:WINDOW_WIDHT/30,
     
  },
  main_slider_con:{
    flexDirection:"row",
    width:WINDOW_WIDHT,
   justifyContent:"flex-start",
   alignItems:"center",
   textAlign:"center" 
  },main_slider_con2:{
   margin:5,padding:5,alignItems:"center"
  },
  main_timg:{
    borderRadius:100,
    margin:5,
    opacity:0.9,
    width:WINDOW_HEIGHT/13,
    height:WINDOW_HEIGHT/13
  },main_simg:{

    borderRadius:10,
    margin:5,
    opacity:0.8,
    width:WINDOW_HEIGHT/13,
    height:WINDOW_HEIGHT/13 
  },main_box:{
    
    flexDirection:"row",
    borderRadius:20,
    borderWidth:1,
    opacity:0.8,
    padding:20,
    borderColor:"#f0f0f0"
  
  },main_box_col:{
    flex:1,
    flexDirection:"column",
    borderRadius:20,
    borderWidth:1,
    opacity:0.8,
    padding:20,
    borderColor:"#f0f0f0"
  
  },main_c_con:{
    
    width:WINDOW_WIDHT,
    height:WINDOW_HEIGHT/9,
   justifyContent:"center",
   alignItems:"center",
   textAlign:"center" 

  },main_car_div:{
   
    flex: 1,
    
    height:WINDOW_HEIGHT/8,
    justifyContent: "center",
    alignItems: 'center',  
  },

  main_carousel:{
   
  
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
  
  

  },maim_car_img:{
    flex: 2,
    justifyContent: "center",
    alignItems: 'center', 
  },main_car_text:{
    flex: 3,
    justifyContent: "center",
    alignItems: 'center', 
  },
  main_list_item1:{
    flexGrow:1,
     justifyContent: "center",

    textAlign:"center"
   
   
  },main_list_item2:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  list_view:{
    padding:10,
    flex: 1,
    flexDirection:"row",
    justifyContent: 'center',
    alignSelf: 'center',
    
    },
    list_title:{
    color:"gray",
    fontSize:WINDOW_WIDHT/22,
    fontWeight:"bold",
    
    opacity:0.8,
    margin:5
    },
    extra_bold : {
      fontSize:WINDOW_WIDHT/13,
      fontWeight:"900",
      
      opacity:0.8,
      margin:5  
    },extra_bold_g:{
      fontSize:WINDOW_WIDHT/15,
      fontWeight:"900",
      
      opacity:0.8,
        
      color:"#73AF00"

    },extra_bold_y:{
      fontSize:WINDOW_WIDHT/15,
      fontWeight:"900",
      
      opacity:0.8,
        
      color:"#FFC248"

    },unit_text:{
      fontSize:WINDOW_WIDHT/25,
      fontWeight:"900",
      
      opacity:0.8,
      marginLeft:5,
      color:"black"
        
     
    }
    ,div_text:{
      fontSize:WINDOW_WIDHT/20,
      fontWeight:"bold",
      
      opacity:0.8,
      margin:5  
    },
    list_item_title:{
      color:"gray",
    fontSize:WINDOW_WIDHT/25,

    
    opacity:0.8,
    margin:5
      },
      flex_b:{
        fontSize:WINDOW_WIDHT/18,
        fontWeight:"900",
        
        opacity:0.8,
        margin:5  
      },flex_button:{
        width:WINDOW_WIDHT,
        flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"center",textAlign:"center"
      },flex_button2:{
        
        width:WINDOW_WIDHT,
        flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"center"
      },flex_blue_btn:{
        backgroundColor:"#0073F0",
        borderRadius:10,
        margin:10,
        padding:15,
        width:WINDOW_WIDHT*0.9,
       
      },flex_blue_btn_text:{
        color:"#fff",
        
        fontSize:WINDOW_WIDHT/20,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
      },
      user_name:{
        color:"black",
        fontSize:WINDOW_WIDHT/23,
        fontWeight:"900",
        
        opacity:0.8,
        marginHorizontal:5
      },user_sub_name:{
        color:"black",
        fontSize:WINDOW_WIDHT/23,
        
        
        opacity:0.8,
        margin:5
      },stick:{
        paddingHorizontal:10,
        margin:10,
      borderBottomWidth:1,
      opacity:0.3,
      color:"gray"
      
      },big_img:{
        flex:1,
        width:WINDOW_WIDHT,
        transform:[{scale:0.7}],
        resizeMode: "cover",
        borderRadius:10,
        opacity:0.9
      },img_button:{
        resizeMode:"stretch",
        width:WINDOW_WIDHT,
        margin:10,
        
      },icon_img:{
        resizeMode:"stretch",
        width:20,
        height:20,
        margin:10
      }
  
  })
  export const grany_start = StyleSheet.create({

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
    fontSize:WINDOW_WIDHT/12,
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
  fontSize:WINDOW_WIDHT/22,
  fontWeight:"500",
  
  opacity:0.8,

},form_text_bold:{
  color:"black",
  fontSize:WINDOW_WIDHT/20,
  
  
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
  
  fontSize:WINDOW_WIDHT/20,
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