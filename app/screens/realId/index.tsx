import React, {useState} from 'react';
import {
  View,
  Alert,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../components/button';
import CustomTextInput from '../../components/textinput';
import styles from './styles';
import CountryPicker from '../../components/picker';
const countries = [
  {label: '+1', value: '+1'},
  {label: '+2', value: '+2'},
  {label: '+44', value: '+44'},
  {label: '+61', value: '+61'},
];
const RealId: React.FC<{navigation: any}> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setUsername] = useState('');
  const [country, setcountry] = useState('');
  const [mobileNo, setmobileNo] = useState('');

  const handleCreateAccount = () => {
   
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Real ID</Text>
      <Image
        source={require('../../../assets/upload.png')}
        style={styles.upload}
      />
      <CustomTextInput
        leftIcon={
          <Image
            source={require('../../../assets/email.png')}
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
            source={require('../../../assets/athrate.png')}
            style={styles.emailIcon}
          />
        }
        label="Username*"
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <CustomTextInput
        leftIcon={
          <Image
            source={require('../../../assets/username.png')}
            style={styles.emailIcon}
          />
        }
        label="First name *"
        placeholder="Enter firstname"
        value={firstname}
        onChangeText={setfirstname}
      />
      <CustomTextInput
        leftIcon={
          <Image
            source={require('../../../assets/username.png')}
            style={styles.emailIcon}
          />
        }
        label="Last name *"
        placeholder="Enter lastname"
        value={lastname}
        onChangeText={setlastname}
      />
      <View style={[{width: '100%'}, styles.row]}>
        <View style={{width: '20%'}}>
          <CountryPicker
            label={'Country'}
            items={countries}
            onValueChange={value => {}}
            value={countries[0]?.value}
            icon={
              <Image
                source={require('../../../assets/language.png')}
                style={styles.emailIcon}
              />
            }
          />
        </View>
        <View style={{width: '70%'}}>
          <CustomTextInput
            leftIcon={
              <Image
                source={require('../../../assets/mobile.png')}
                style={styles.emailIcon}
              />
            }
            label="Mobile"
            placeholder="xxx- xx xx xxx"
            value={mobileNo}
            onChangeText={setmobileNo}
          />
        </View>
      </View>
      <CustomButton
        title="Save and continue"
        onPress={handleCreateAccount}
        icon={
          <Image
            source={require('../../../assets/arrowright.png')}
            style={[styles.emailIcon, styles.arrow]}
          />
        }
      />
      <Image
        source={require('../../../assets/ios/Rukkor.png')}
        style={styles.logo}
      />
    </ScrollView>
  );
};

export default RealId;
