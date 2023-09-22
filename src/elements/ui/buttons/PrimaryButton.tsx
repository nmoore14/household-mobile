import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  action: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, action }) => {
  return (
    <TouchableOpacity 
      style={ styles.button } 
      onPress={ action }
    >
      <Text 
	style={ styles.buttonText }
      >
	{ title }
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'LeagueSpartan-Regular',
    color: 'white',
    fontSize: 18,
  },
});

export default PrimaryButton;
