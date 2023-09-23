import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface CreateAccountFormData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

interface UserTextInputProps {
  label: string;
  placeholder: string;
  fullWidth: boolean;
  inputValue?: string;
  onChangeKey?: keyof CreateAccountFormData;
  onChange?: (field: keyof CreateAccountFormData, value: string) => void;
  needSecureEntry?: boolean;
}

export default function UserTextInput ({ label, placeholder, fullWidth, inputValue, onChangeKey, onChange, needSecureEntry }:UserTextInputProps) {
  return (
    <View style={ fullWidth ? styles.userInputFull : styles.userInputHalf }>
      <Text style={ styles.inputLabel }>
	{ label }
      </Text>
      <TextInput
	placeholder={ placeholder }
	value={ inputValue }
	onChangeText={ (value) => onChange!(onChangeKey!, value) }
	secureTextEntry={ needSecureEntry }
	style={ styles.input }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userInputFull: {
    width: '100%',
  },
  userInputHalf: {
    width: '48%',
  },
  inputLabel: {
    fontFamily: 'LeagueSpartan-Regular',
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  input: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 24,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#bdbdbd',
    borderRadius: 15,
  },
});
