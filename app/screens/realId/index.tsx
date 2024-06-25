import React, {useEffect, useState} from 'react';
import {
  View,
  Alert,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import CustomButton from '../../components/button';
import CustomTextInput from '../../components/textinput';
import styles from './styles';
import CountryPicker from '../../components/picker';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCountries, getUserData, updateUser} from '../../redux/slice';
import {AppDispatch} from '../../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../../utils/constants';

const RealId: React.FC<{navigation: any}> = ({navigation}) => {
  const countries = useSelector((state: any) => state.profile.countries);
  const register = useSelector((state: any) => state.profile.registerDetail);
  const loading = useSelector((state: any) => state.profile.isloading);
  const user = useSelector((state: any) => state.profile.user);
  const [email, setEmail] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setUsername] = useState('');
  const [country, setcountry] = useState('');
  const [mobileNo, setmobileNo] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  console.log('countries===>', user);

  useEffect(() => {
    if (user) {
      setEmail(user?.info?.primary_email);
      setUsername(user?.info?.username);
      setfirstname(user?.info?.first_name);
      setlastname(user?.info?.last_name);
      setcountry(user?.info?.mobile_country);
      setmobileNo(user?.info?.mobile);
    }
  }, [user]);

  useEffect(() => {
    dispatch(fetchCountries());
    const getStorage = async () => {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        const {info} = JSON.parse(userString);
        dispatch(getUserData(info?.id));
      }
    };
    getStorage();
  }, []);

  const handleCreateAccount = () => {
    const payload = {
      data: {
        username: username,
        alias: user?.info?.alias,
        alias_picture: user?.info?.alias_picture,
        user_picture: user?.info?.user_picture,
        alias_name: user?.info?.alias_name,
        first_name: user?.info?.first_name,
        last_name: user?.info?.last_name,
        phone_country: user?.info?.phone_country,
        phone: user?.info?.phone,
        mobile_country: user?.info?.mobile_country,
        mobile: user?.info?.mobile,
        primary_email: user?.info?.primary_email,
        status: user?.info?.status,
        organization: user?.info?.organization,
        profile: user?.info?.profile,
        work_place: user?.info?.work_place,
        work_role: user?.info?.work_role,
        dob: user?.info?.dob,
        language: user?.info?.language,
      },
      navigation: navigation,
    };
    dispatch(updateUser(payload));
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

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
            onValueChange={value => setcountry(value)}
            value={country}
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
