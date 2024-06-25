import React from 'react';
import {View, Text, Button, ScrollView, Image} from 'react-native';
import styles from './styles';
import CustomButton from '../../components/button';

const SetupProfile: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{flex: 0.5}}>
        <Text style={styles.title}>Set up your profiles</Text>
        <Text style={styles.subtitle}>
          A Rukkor account is associated with two profiles, one which we call
          Real ID and one which is your Alias. You choose in which settings you
          wish to expose your true identity and in which you wish to use an
          alias.
        </Text>
        <View style={styles.card}>
          <View style={styles.col1}>
            <Text style={styles.iconText}>Real ID</Text>
            <Image
              source={require('../../../assets/realID.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.col2}>
            <Text style={styles.subtitle}>
              With Real ID you can disclose your personal details like name,
              phone number, birthday, e-mail and more. Use your Real ID when
              interacting with trusted family, friends and colleagues.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.col1}>
            <Text style={styles.iconText}>Alias</Text>
            <Image
              source={require('../../../assets/alias.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.col2}>
            <Text style={styles.subtitle}>
              Using your Alias you can choose an additional @alias with which
              you can join Spaces and interact with other users in communities
              where you’re not comfortable sharing your personal details.
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 0.1}}>
        <CustomButton
          title="Next"
          onPress={() => navigation.navigate('RealId')}
          icon={
            <Image
              source={require('../../../assets/arrowright.png')}
              style={[styles.icon, styles.arrow]}
            />
          }
        />
        <Image
          source={require('../../../assets/ios/Rukkor.png')}
          style={styles.logo}
        />
      </View>
    </ScrollView>
  );
};

export default SetupProfile;
