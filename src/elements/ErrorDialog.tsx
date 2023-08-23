import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Dialog, PaperProvider, Portal, Text } from 'react-native-paper';

interface ErrorDialogProps {
  message: string;
  variant: 'high' | 'medium' | 'low'; // Adjust the variant types as needed
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({ message, variant }) => {
  const [visible, setVisible] = React.useState(true);

  const hideDialog = () => {
    setVisible(false)
  };

  return (
    <PaperProvider>
      <Portal>
	<Dialog style={ styles.container } visible={ visible } onDismiss={ hideDialog }>
	  <Dialog.Icon icon="alert" />
	  <Dialog.Title style={styles.title}>Error</Dialog.Title>
	  <Dialog.Content>
	    <Text>{ message }</Text>
	  </Dialog.Content>
	</Dialog>
      </Portal>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '10%',
    left: 0,
    right: 0,
  },
  title: {
    textAlign: 'center',
  },
});

export default ErrorDialog;
