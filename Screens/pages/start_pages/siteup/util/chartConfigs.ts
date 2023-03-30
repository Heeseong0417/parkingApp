const chartConfigs = [
    {
      backgroundColor: "#000000",
      backgroundGradientFrom: "#1E2923",
      backgroundGradientTo: "#08130D",
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      style: {
        borderRadius: 16
      }
    },
    {
      backgroundColor: "#022173",
      backgroundGradientFrom: "#022173",
      backgroundGradientTo: "#1b3fa0",
      
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForBackgroundLines: {
        strokeDasharray: "" // solid background lines with no dashes
      }
    },
    {decimalPlaces: 0,
      backgroundColor: "#ffffff",
      backgroundGradientFrom: "#ffffff",
      backgroundGradientTo: "#ffffff",
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      propsForDots: {
        r: "5",
        strokeWidth: "2",
        stroke: "white",
        paddingRight: 0
      },
      propsForLabels:{
        fontSize:10,

      },
      barPercentage: 0.3
        
    },
    {
      decimalPlaces: 0,
      backgroundColor: "#ffffff",//FFF7F7
      backgroundGradientFrom: "#ffffff",
      backgroundGradientTo: "#ffffff",
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelcolor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
        backgroundColor:"black"
        
      
      },
      
      propsForDots: {
        r: "4",
        strokeWidth: "2",
        stroke: "white",
      
      },
      propsForLabels:{
        fontSize:9,
      },
      barPercentage: 0.3
      
    },
    {
      decimalPlaces: 3,
      backgroundColor: "#ffffff",//FFF7F7
      backgroundGradientFrom: "#ffffff",
      backgroundGradientTo: "#ffffff",
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelcolor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
        backgroundColor:"black"
        
      
      },
      
      propsForDots: {
        r: "4",
        strokeWidth: "2",
        stroke: "white",
      
      },
      propsForLabels:{
        fontSize:9,
      },
      barPercentage: 0.3
      
    },
    {
      backgroundColor: "#26872a",
      backgroundGradientFrom: "#43a047",
      backgroundGradientTo: "#66bb6a",
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    },
    {
      backgroundColor: "#000000",
      backgroundGradientFrom: "#000000",
      backgroundGradientTo: "#000000",
      color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
    },
    {
      backgroundColor: "#0091EA",
      backgroundGradientFrom: "#0091EA",
      backgroundGradientTo: "#0091EA",
      color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
    },
    {
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    },
    {
      decimalPlaces: 3,
      backgroundColor: "#b90602",
      backgroundGradientFrom: "#e53935",
      backgroundGradientTo: "#fb8c00",
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 15,
        
      },
      propsForDots: {
        r: "2",
        strokeWidth: "2",
        stroke: "white",
        
      },
      propsForLabels:{
        fontSize:8,
      }
    },
    {
      backgroundColor: "#ff3e03",
      backgroundGradientFrom: "#ff3e03",
      backgroundGradientTo: "#ff3e03",
      color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`,
      
    },
    {
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
}
]
export default chartConfigs