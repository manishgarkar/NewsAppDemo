import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { colors } from '../assects/colors';
import { width, height } from '../assects/strings';

import Toneop, { toneopimages } from '../assects/Images/Toneop';


const SplashScreen = ({ navigation }) => {
    const [lang, setLang] = useState('sp');


    return (
        <View style={styles.container} >
            <Image style={{width:width/4,height:width/4,resizeMode:"contain"}} source={toneopimages?.splash} />
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.black },
})
export default SplashScreen;