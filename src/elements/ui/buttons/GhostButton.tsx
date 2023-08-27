import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface GhostButtonProps {
  title: string;
  action: () => void;
}

const GhostButton: React.FC<GhostButtonProps> = ({ title, action }) => {
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
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'LeagueSpartan-Regular',
    color: 'black',
    fontSize: 16,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
  },
});

export default GhostButton;
