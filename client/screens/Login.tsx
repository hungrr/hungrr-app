import { addTextAndPropsToStrings } from 'native-base';
import { background, color } from 'native-base/lib/typescript/theme/styled-system';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Pressable } from 'react-native';

const Login = () => {
  // Declare the state functionality for the phone number text input
  const [ phoneNumber, setPhoneNumber ] = useState<string>("");

  // Declare the state functionality or the verification code text input
  const [ verificationCode, setVerificationCode ] = useState<string>("");


  // Declare the state functionality for the login landing page view
  // -1 for phone number input and 0 for verification code page
  const [ showLoginLanding, setLoginLanding ] = useState<number>(-1);
  
  // This function verifies the text input to be only digits and with a maximum length of 10
  const verifyInput = (input:string) => {
      setPhoneNumber(input);
  };

  // Formats the phone number to outline area code and parts of the phone number
  const formatPhoneNumber = () => {
    const splitted = phoneNumber.split("");
    return `(${splitted.slice(0,3).join("")})-${splitted.slice(3,6).join("")}-${splitted.slice(6,10).join("")}`;
  };

  // Makes API request to the backend
  const requestCode = async () => {
    // const data = await axios.post();
    setLoginLanding(0);
  };

  useEffect(() => {
    // for on component verification

  }, [  ]);

  const LoginLanding = () => {
    return (
      <>
        <View style={styles.login}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
          <Text style={styles.message}>Enter Your Phone Number</Text>
          <TextInput style={styles.input} onChangeText={verifyInput} value={phoneNumber} keyboardType={"numeric"}>
            { phoneNumber }
          </TextInput>
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

  const LoginVerifyLanding = () => {
    return (
      <View>
        <View>
          <Button title="Back"
            onPress={() => {
              setVerificationCode("");
              setLoginLanding(-1);
            }}
          />
        </View>
        <View>
          <Text> Please enter the verification code </Text>
          <TextInput onChangeText={setVerificationCode} value={verificationCode} />
          <Button title="Submit" />
        </View>
      </View>
    );
  };

  return (

    <View style={{ ...styles.container  }}>
      {
        showLoginLanding === -1 ?
          <LoginLanding />
          :
          <LoginVerifyLanding />
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
    alignItems: 'center'
  },
  input: {
    flex: 0.1,
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    width: '75%',
    borderRadius: 10
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

  }
});

export default Login;