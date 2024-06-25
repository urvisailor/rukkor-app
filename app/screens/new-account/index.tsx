import React, {useState} from 'react';
import {
  View,
  Alert,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import CustomButton from '../../components/button';
import CustomTextInput from '../../components/textinput';
import styles from './styles';
import {validateEmail, validatePassword} from '../../utils/constants';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {registerApp} from '../../redux/slice';

const NewAccount: React.FC<{navigation: any}> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const handleCreateAccount = async () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError =
      confirmPassword !== password ? 'Passwords do not match' : '';
    const deviceId = await DeviceInfo.getDeviceId();
    const type = await DeviceInfo.getDeviceType();
    const deviceName = await DeviceInfo.getDeviceName();
    console.log('deviceIOd===>', deviceId);
    const token = await messaging().getToken();
    console.log('Device token:', token);
    console.log('Device token:', type);

    if (!emailError && !passwordError && !confirmPasswordError) {
      // Handle successful account creation with validated data

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
        navigation:navigation
      };
      dispatch(registerApp(payload));
     
    } else {
      if (emailError) {
        Alert.alert('Error', emailError);
      } else if (passwordError) {
        Alert.alert('Error', passwordError);
      } else if (confirmPassword) {
        Alert.alert('Error', confirmPasswordError);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create new account</Text>
      <CustomTextInput
        leftIcon={
          <Image
            source={require('../../../assets/email.png')}
            style={styles.emailIcon}
          />
        }
        label="E-mail *"
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
        label="Password *"
        placeholder="Choose a password"
        secureTextEntry={secureTextEntry}
        value={password}
        onChangeText={setPassword}
        rightIcon={
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Image
              source={
                secureTextEntry
                  ? require('../../../assets/notvisible.png')
                  : require('../../../assets/visible.png')
              }
              style={[styles.emailIcon]}
            />
          </TouchableOpacity>
        }
      />
      <CustomTextInput
        leftIcon={
          <Image
            source={require('../../../assets/lock.png')}
            style={styles.emailIcon}
          />
        }
        label="Confirm Password *"
        placeholder="Confirm your password"
        secureTextEntry={confirmSecureTextEntry}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        rightIcon={
          <TouchableOpacity
            onPress={() => setConfirmSecureTextEntry(!confirmSecureTextEntry)}>
            <Image
              source={
                confirmSecureTextEntry
                  ? require('../../../assets/notvisible.png')
                  : require('../../../assets/visible.png')
              }
              style={[styles.emailIcon]}
            />
          </TouchableOpacity>
        }
      />
      <View style={styles.passwordRequirements}>
        <Text style={styles.requirementsText}>
          Pick a strong password, requirements are at least one of each, minimum
          10 characters:
        </Text>
        <Text style={styles.requirementsItem}>• Uppercase letter (A-Z)</Text>
        <Text style={styles.requirementsItem}>• Lowercase letter (a-z)</Text>
        <Text style={styles.requirementsItem}>• Number (0-9)</Text>
        <Text style={styles.requirementsItem}>• Symbol (!@#$%^&*)</Text>
      </View>
      <CustomButton
        title="Next"
        onPress={handleCreateAccount}
        icon={
          <Image
            source={require('../../../assets/arrowright.png')}
            style={[styles.emailIcon, styles.arrow]}
          />
        }
      />
      <Text
        onPress={() => navigation.goBack()}
        style={[styles.cancelButtonText, {textAlign: 'center', marginTop: 15}]}>
        Cancel account creation
      </Text>
      <Image
        source={require('../../../assets/ios/Rukkor.png')}
        style={styles.logo}
      />
    </ScrollView>
  );
};

export default NewAccount;
