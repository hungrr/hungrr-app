import { addTextAndPropsToStrings } from 'native-base';
import { background, color } from 'native-base/lib/typescript/theme/styled-system';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Pressable } from 'react-native';
import MainContainer from '../navigation/MainContainer';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginLanding = ({ requestCode, setLoginState, loginState }:any) => {

  const [ showNotExists, setShowNotExists ] = useState<boolean>(false);

  return (
    <>
      <View style={styles.login}>
        <Pressable>
          <Button title="Register" onPress={() => {
            setLoginState({ ...loginState, loginView: -2 });
          }} />
        </Pressable>
        <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
        <Text style={styles.message}>Enter Your Phone Number</Text>
        <TextInput style={styles.input} onChangeText={(text:string) => setLoginState({ ...loginState, phoneNumber: text })} value={loginState.phoneNumber} keyboardType={"numeric"} returnKeyType='done' />
        <Text>{
            showNotExists ? "This account does not exist." : ""
          }</Text>
        <Pressable style={styles.submit}>
          <Button color={'black'} title="Submit" onPress={() => {
              if (loginState.phoneNumber.length === 10) {
                (async () => {
                  await axios.post("http://localhost:3000/api/user/verify", {
                    phoneNumber: loginState.phoneNumber,
                    verificationCodeAttempt: ""
                  }).then((r) => {
                    if (!r.data.userExists) {
                      setShowNotExists(true);
                    } else {
                      requestCode();
                    }
                  })
                })();
              }
            }}
          />
        </Pressable>

      </View>
    </>
  );
};

const LoginVerifyLanding = ({ setVerificationCode, verificationCode, setLoginState, loginState  }:any) => {
  const verifyCode = async () => {

    const data = await axios.post("http://localhost:3000/api/user/verify", {
      phoneNumber: loginState.phoneNumber,
      verificationCodeAttempt: verificationCode
    }).then(async (response:any) => {
      await AsyncStorage.setItem("name", response.data.name)
      return response.data;
    }).catch((err:any) => {
      return {};
    })
    
    if (data.verified) {
      try {
        await AsyncStorage.multiSet([[ "loggedIn", "true" ], [ "phoneNumber", loginState.phoneNumber ]]);
        setLoginState({
          ...loginState, loginView: 1
        });
      } catch (err) {
        console.log("Error trying to login after verification");
      }
    }

  };


  return (
    <View style={styles.verifyPage}>
      <View style={styles.back}>
        <Pressable style={styles.backButton}>
          <Button color='black' title="Back"
            onPress={() => {
              setVerificationCode("");
              setLoginState({ ...loginState, loginView: -1 });
            }}
          />
        </Pressable>

      </View>
      <View style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.verificationMessage}> Please enter the verification code </Text>
        <TextInput style={styles.verifyTextBox}  onChangeText={(text:string) => setVerificationCode(text) } value={verificationCode} />
        <Pressable style={styles.submitVerification} onPress={() => {
          }}>
          <Button color='black' title="Submit" onPress={() => {
            verifyCode();
          }} />
        </Pressable>
        
      </View>
    </View>
  );
};

const Login = ({ loginState, setLoginState }:any) => {
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

    const data = await axios.post("http://localhost:3000/api/user/newUser", {
      phoneNumber: loginState.phoneNumber,
      name: loginState.name
    }).then((res:any) => {
      console.log("sent the code...")
    })
    setLoginState({ ...loginState, loginView: 0 });
  };



  useEffect(() => {
    // for on component verification

  }, [  ]);

  return (

    <View style={{ ...styles.container  }}>
      {
        loginState.loginView === -1 ?
          <LoginLanding { ...{setPhoneNumber, phoneNumber, requestCode, setLoginState, loginState} } />
          :
          <LoginVerifyLanding {...{setVerificationCode, verificationCode, setLoginState, loginState}}  />
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