import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import UserTextInput from '../../elements/ui/inputs/UserTextInput'; 
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
      <UserTextInput 
        label='Username'
        placeholder='Think of a username...'
        fullWidth={ true }
        inputValue={ formData.username }
        onChangeKey='username'
        onChange={ handleInputChange }
        needSecureEntry={ false }
      />
      <View style={ styles.nameContainer }>
        <UserTextInput 
          label='First Name'
          placeholder='First Name'
          fullWidth={ false }
          inputValue={ formData.firstName }
          onChangeKey='firstName'
          onChange={ handleInputChange }
          needSecureEntry={ false }
        />
        <UserTextInput 
          label='First Name'
          placeholder='First Name'
          fullWidth={ false }
          inputValue={ formData.firstName }
          onChangeKey='firstName'
          onChange={ handleInputChange }
          needSecureEntry={ false }
        />
      </View>
      <UserTextInput 
        label='Email' 
        placeholder='Enter your email...'
        fullWidth={ true }
        inputValue={ formData.email }
        onChangeKey='email'
        onChange={ handleInputChange }
        needSecureEntry={ false }
      />
      <UserTextInput 
        label='Password' 
        placeholder='Enter a password...'
        fullWidth={ true }
        inputValue={ formData.password }
        onChangeKey='password'
        onChange={ handleInputChange }
        needSecureEntry={ true }
      />
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
  button: {
    marginTop: 10,
  },
});

export default CreateAccountForm;
