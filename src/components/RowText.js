import React  from "react";
import { Text, View } from "react-native";

const RowText = (props) => {
    const {messge_1, messge_2,style_1 , style_2 , style_3} = props
    return(
        <View style={[style_3]}>
          <Text style={[style_1]}>{messge_1}</Text>
          <Text style={[style_2]}>{messge_2}</Text>
        </View> 
    )
}


export default RowText;