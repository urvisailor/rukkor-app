import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import CustomButton from '../../components/button';
import CustomTextInput from '../../components/textinput';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import {AppDispatch} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../../redux/slice';
import { COLORS } from '../../utils/constants';
interface Props {
  navigation: NativeStackNavigationProp<any>;
}

const Login: React.FC<Props> = ({navigation}) => {
  const loading = useSelector((state: any) => state.profile.isloading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setisVisible] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async () => {
    const deviceId = await DeviceInfo.getDeviceId();
    const type = await DeviceInfo.getDeviceType();
    const deviceName = await DeviceInfo.getDeviceName();
    console.log('deviceIOd===>', deviceId);
    const token = await messaging().getToken();
    const payload = {
      data: {
        primary_email: email,
        os_platform: Platform.OS,
        os_platform_version: Platform.Version,
        user_agent: 'user1',
        device_name: deviceName,
        type: type,
        password: password,
        device_id: deviceId,
        device_token: token,
      },
      navigation: navigation,
    };
    dispatch(auth(payload));
  };

  const handleCreateAccount = () => {
    navigation.navigate('NewAccount');
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/ios/Rukkor.png')}
        style={styles.logo}
      />
      <CustomTextInput
        leftIcon={
          <Image
            source={require('../../../assets/username.png')}
            style={styles.emailIcon}
          />
        }
        label="E-mail"
        placeholder="Enter your e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <CustomTextInput
        leftIcon={
          <Image
            source={require('../../../assets/lock.png')}
            style={styles.emailIcon}
          />
        }
        rightIcon={
          <TouchableOpacity onPress={() => setisVisible(!isVisible)}>
            <Image
              source={
                isVisible
                  ? require('../../../assets/notvisible.png')
                  : require('../../../assets/visible.png')
              }
              style={[styles.emailIcon, styles.rightIcon]}
            />
          </TouchableOpacity>
        }
        label="Password"
        placeholder="Enter your password"
        secureTextEntry={isVisible}
        value={password}
        onChangeText={setPassword}
        style={styles.passwordInput}
        rightLabel={<Text style={styles.forgotPassword}>Forgot password</Text>}
      />
      <CustomTextInput
        leftIcon={
          <Image
            source={require('../../../assets/language.png')}
            style={styles.emailIcon}
          />
        }
        label="Language"
        placeholder="English"
        value="English"
        editable={false}
        style={styles.languageInput}
      />
      <CustomButton title="Log in" onPress={handleLogin} />
      <CustomButton
        title="Create new account"
        onPress={handleCreateAccount}
        style={styles.createAccountButton}
        textStyle={styles.createAccountButtonText}
      />
    </View>
  );
};

export default Login;
