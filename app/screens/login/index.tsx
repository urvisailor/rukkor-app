import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/button';
import CustomTextInput from '../../components/textinput';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
interface Props {
  navigation: NativeStackNavigationProp<any>;
}

const Login: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setisVisible] = useState(true);

  const handleLogin = () => {
  };

  const handleCreateAccount = () => {
    navigation.navigate('NewAccount');
  };

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
