import React from "react";
import { Image, StatusBar, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomTopTab from "../../component/CustomTopTab";
import { colors } from "../../assects/colors";
import { width } from "../../assects/strings";
import { toneopimages } from "../../assects/Images/Toneop";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import { CustomeHeader } from "../../component";
import BreakingNews from "./breakingNews";
import NationalNews from "./nationalNews";
import InternationalNews from "./internationalNews";
import TechnologyNews from "./technologyNews";
import { useNavigation } from "@react-navigation/native";
import routes from "../../routes/routes";
import SportsNews from "./sportsNews";

const Tab = createMaterialTopTabNavigator();


function HomeScreen(){
  const navigation = useNavigation();

  function RenderTopTab(){
    return(
      <Tab.Navigator overScrollMode={"auto"} tabBar={props => <CustomTopTab  taskTab   {...props} />}  style={{marginTop:1}}  >
      <Tab.Screen name="ब्रेकिंग न्यूज़" component={BreakingNews} />
      <Tab.Screen name="नेशनल न्यूज़ " component={NationalNews} />
      <Tab.Screen name="इंटरनेशनल न्यूज़" component={InternationalNews} />
      <Tab.Screen name="स्पोर्ट्स" component={SportsNews} />
      <Tab.Screen name="टेक्नोलॉजी" component={TechnologyNews} />
    </Tab.Navigator>
    )
  }
    return(
        <View style={{flex:1,backgroundColor:colors?.primaryColor}} >
          <CustomeHeader onPressSettings={()=>navigation?.navigate(routes?.settings)} />
          {RenderTopTab()}
        </View>
    )
}

export default HomeScreen;