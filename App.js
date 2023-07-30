import React, { useEffect, useState } from 'react';
import { Modal, StatusBar, StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { colors } from './src/assects/colors';
import { width } from './src/assects/strings';
import { persistor, Store } from './src/redux/store';
import Routes from './src/routes';
import SplashScreen from './src/screens/splash';

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Interceptor from './src/api/interceptor';
Interceptor.interceptor(Store)
const App = () => {

  const [splash, setSplash] = useState(true);
  const [netInfo, setNetInfo] = useState('');
  


  useEffect(() => {
    if (splash) {
      setTimeout(() => {
        setSplash(false)
      }, 2000);
    }
  }, [])

  
  return (
    <SafeAreaProvider style={styles.container} >
      

      {splash ?
        <SplashScreen /> :
        <Provider store={Store} >
          <PersistGate persistor={persistor} >
            <Routes />
            <FlashMessage animated position={"bottom"} />
          </PersistGate>
        </Provider>}
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, color: colors.primaryColor
  }
})
export default App;


