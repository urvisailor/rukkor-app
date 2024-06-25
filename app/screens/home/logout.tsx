import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppDispatch} from '../../redux/store';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {clearUserData} from '../../redux/slice';
import DeviceInfo from 'react-native-device-info';
import CustomButton from '../../components/button';

const Logout: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = async () => {
    try {
      const deviceId = await DeviceInfo.getDeviceId();
      dispatch(
        clearUserData({
          data: {
            device_id: deviceId,
          },
          navigation: navigation,
        }),
      ); 
      await AsyncStorage.removeItem('user'); 
      await AsyncStorage.removeItem('token');

      navigation.replace('Login');
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };
  const confirmLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: handleLogout,
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <CustomButton
        title="Logout"
        onPress={confirmLogout}
        style={styles.logoutButton}
      />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logoutButton: {
    backgroundColor: '#FF6600',
    marginTop: 20,
  },
});
