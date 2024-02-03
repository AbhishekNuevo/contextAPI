import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {UserInfoContext} from '../App';
import {consumeUserInfoContext} from './userContext/userinfoContext';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {setValue, value} = consumeUserInfoContext();
  console.log('setUserName', consumeUserInfoContext());

  const submitClick = () => {
    setValue(userName);
    setUserName('');
    setPassword('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Login Page</Text>
      <TextInput
        value={userName}
        placeholder={'Enter userName'}
        style={styles.textInputStyle}
        onChangeText={e => {
          setUserName(e);
        }}
      />
      <TextInput
        value={password}
        placeholder={'Enter password'}
        style={styles.textInputStyle}
        onChangeText={e => {
          setPassword(e);
        }}
      />
      <Button title={'Submit'} onPress={submitClick} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // flex: 1,
    // backgroundColor: 'yellow',
    padding: 24,
  },
  textInputStyle: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 5,
    color: 'black',
    marginTop: 24,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: '400',
  },
});
