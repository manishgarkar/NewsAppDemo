import React, { useRef } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { height, width } from "../assects/strings";
import fonts from "../assects/fonts";
import { colors } from "../assects/colors";


function CustomTopTab({state, descriptors, navigation,teacherTabs,mainImage}){
    let activeStackState = state.routes[state.index].state;
    const flatListRef = useRef();
     flatListRef?.current?.scrollToIndex({index:state?.index==0?0:state?.index-1,animated:true})
    return(
      <View>

      <FlatList showsHorizontalScrollIndicator={false} ref={flatListRef} horizontal data={state.routes} renderItem={({item,index})=>{
        const { options } = descriptors[item.key];
        const isFocused = state.index === index;
        const onPress = () => {
            const event = navigation.emit({ type: 'tabPress', target: item.key, });
            if (!isFocused && !event.defaultPrevented) navigation.navigate(item.name);
        };

        return(
         <Pressable onPress={onPress} style={{height:width/10,width:teacherTabs?width/3:null,borderBottomWidth:isFocused?1.5:0,borderColor:isFocused?colors.white:colors.placeHolderTextColor,justifyContent:"center",alignItems:"center",paddingHorizontal:10}} >
            <Text style={{fontFamily:isFocused?fonts.PoppinsBold:fonts?.PoppinsLight,fontSize:14,color:isFocused?colors.white:colors.white}} >{item?.name}</Text>
         </Pressable>
        )
      }} />
      </View>
    )
  }


  export default CustomTopTab;