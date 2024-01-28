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
  container_swipe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89D2DC'
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
  text_white_header: {
    color: '#FAEFF1',
    fontSize: 40,
    alignSelf: 'flex-start', // Align this text to the start (left) along the main axis
    textAlign: 'left', // Align the text content to the left within its container
    marginLeft: 40,
    marginBottom: 20
  },

  swipe_photo: {
    width: '90%',
    height: '60%',
    borderRadius: 30,
  },
  icon: {
    width: 80,
    height: 80,
    backgroundColor: '#FAEFF1',
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'center',
  }

});

export default styles;
