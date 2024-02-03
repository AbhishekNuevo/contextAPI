import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserInfoContext} from '../App';
import {consumeUserInfoContext} from './userContext/userinfoContext';

const Profile = prop => {
  // const {value} = useContext(UserInfoContext);
  const {value} = consumeUserInfoContext();

  console.log('Profile1', prop);
  console.log('Profile2', value);
  if (!value) return <Text> You are not logged in</Text>;
  return <View>{<Text> Welcome! {value}</Text>}</View>;
};

export default Profile;

const styles = StyleSheet.create({});
