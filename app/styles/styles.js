import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FAEFF1',
    fontSize: 12,
  },
  button_text: {
    color: '#DA4167',
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: '#FAEFF1',
    textTransform: 'none',
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '60%',
    alignItems: 'center',
  },
  text_field: {
    backgroundColor: '#FAEFF130',
    color: 'white',
  },
});

export default styles;