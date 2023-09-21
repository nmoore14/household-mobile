import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import PrimaryButton from '../../elements/ui/buttons/PrimaryButton';

interface CreateAccountProps {
  onSubmit: (formData: SignUpFormData) => void;
}

interface CreateAccountFormData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

const CreateAccountForm: React.FC<CreateAccountProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<CreateAccountFormData>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const handleInputChange = (field: keyof CreateAccountFormData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <View style={ styles.container }>
      <View style={ styles.userInput }>
        <Text style={ styles.inputLabel }>
          Username
        </Text>
        <TextInput
          placeholder="username"
          value={formData.username}
          onChangeText={(value) => handleInputChange('username', value)}
          style={styles.input}
        />
      </View>
      <View style={ styles.nameContainer }>
        <TextInput
          placeholder="First Name"
          value={formData.firstName}
          onChangeText={(value) => handleInputChange('firstName', value)}
          style={styles.nameInput}
        />
        <TextInput
          placeholder="Last Name"
          value={formData.lastName}
          onChangeText={(value) => handleInputChange('lastName', value)}
          style={styles.nameInput}
        />
      </View>
      <View style={ styles.userInput }>
        <Text style={ styles.inputLabel }>
          Email
        </Text>
        <TextInput
          placeholder="Email"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          style={styles.input}
        />
      </View>
      <View style={ styles.userInput }>
        <Text style={ styles.inputLabel }>
          Password
        </Text>
        <TextInput
          placeholder="Password"
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <PrimaryButton title='Create Account' action={ handleSubmit }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    width: '100%',
    height: '100%',
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  userInput: {
    width: '100%',
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
  nameInput: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 24,
    width: '45%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#bdbdbd',
    borderRadius: 15,
  },
  button: {
    marginTop: 10,
  },
});

export default CreateAccountForm;
