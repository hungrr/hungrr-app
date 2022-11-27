import { addTextAndPropsToStrings } from 'native-base';
import { background, color } from 'native-base/lib/typescript/theme/styled-system';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Pressable } from 'react-native';
import MainContainer from '../navigation/MainContainer';

const LoginLanding = ({ setPhoneNumber, phoneNumber, requestCode }:{ setPhoneNumber:Function, phoneNumber:string, requestCode:Function }) => {
  return (
    <>
      <View style={styles.login}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
        <Text style={styles.message}>Enter Your Phone Number</Text>
        <TextInput style={styles.input} onChangeText={(text:string) => setPhoneNumber(text)} value={phoneNumber} keyboardType={"numeric"} returnKeyType='done' />
        <Pressable style={styles.submit}>
          <Button color={'black'} title="Submit" onPress={() => {
              if (phoneNumber.length === 10) {
                requestCode();
              }
            }}
          />
        </Pressable>

      </View>
    </>
  );
};

const LoginVerifyLanding = ({ setVerificationCode, verificationCode, verifyCode  }:{  verifyCode:Function, setVerificationCode:Function, verificationCode:string }) => {
  return (
    <View style={styles.verifyPage}>
      <View style={styles.back}>
        <Pressable style={styles.backButton}>
          <Button color='black' title="Back"
            onPress={() => {
              setVerificationCode("");
            }}
          />
        </Pressable>

      </View>
      <View style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.verificationMessage}> Please enter the verification code </Text>
        <TextInput style={styles.verifyTextBox}  onChangeText={(text:string) => setVerificationCode(text) } value={verificationCode} />
        <Pressable style={styles.submitVerification}>
          <Button color='black' title="Submit" onPress={() => {
            verifyCode();
          }} />
        </Pressable>
        
      </View>
    </View>
  );
};

const Login = ({ loginState, setLoginState }: { loginState:any, setLoginState:Function }) => {
  // Declare the state functionality for the phone number text input
  const [ phoneNumber, setPhoneNumber ] = useState<string>("");

  // Declare the state functionality or the verification code text input
  const [ verificationCode, setVerificationCode ] = useState<string>("");

  // Formats the phone number to outline area code and parts of the phone number
  const formatPhoneNumber = () => { 
    const splitted = phoneNumber.split("");
    return `(${splitted.slice(0,3).join("")})-${splitted.slice(3,6).join("")}-${splitted.slice(6,10).join("")}`;
  };

  // Makes API request to the backend
  const requestCode = async () => {
    // const data = await axios.post();
    setLoginState({ ...loginState, loginView: 0 });
  };

  const verifyCode = async () => {
    setLoginState({ ...loginState, loginView: 1 });
  };

  useEffect(() => {
    // for on component verification

  }, [  ]);

  return (

    <View style={{ ...styles.container  }}>
      {
        loginState.loginView === -1 ?
          <LoginLanding { ...{setPhoneNumber, phoneNumber, requestCode} } />
          :
          <LoginVerifyLanding {...{setVerificationCode, verificationCode, verifyCode}}  />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  login: {
    backgroundColor: '#EE8980',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 200
  },
  input: {
    flex: 0.1,
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    width: '75%',
    borderRadius: 10,
    padding: 8,
    marginTop: 5
    
  },
  message: {
    fontWeight: 'bold',
    fontSize: 18
  },
  logo: {
    width: 100,
    height: 250,
  },
  submit: {
    backgroundColor: '#FFCDAA',
    marginTop: 10,
    borderRadius: 10,

  },
  back: {
    bottom: 320,
    right: 140
  },
  backButton: {
    backgroundColor: '#FFCDAA',
    width: 75,
    borderRadius: 10
  },
  verifyPage: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#EE8980'
  },
  verifyTextBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 250,
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  },
  submitVerification: {
    backgroundColor: '#FFCDAA',
    marginTop: 10,
    borderRadius: 10,
    width: '75%'
  },
  verificationMessage: {
    fontWeight: 'bold',
    fontSize: 18
  }
  
});

export default Login;