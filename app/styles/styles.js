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
  toggle:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  toggle_button: {
    marginTop: 10,
    marginBottom: 10,
    marginRight:10,
    borderRadius: 30,
    backgroundColor: '#FAEFF1',
    textTransform: 'none',
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '30%',
    alignItems: 'center',
  },
  toggle_button_pressed: {
    borderColor: '#00000',
    borderWidth: 2, // Adjust the value to make the border thicker
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
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '70%',
    alignItems: 'center',
  },
  icon: {
    width: 150,
    height: 150,
    resizeMode: 'cover', // Adjust the image's content mode as needed
    borderRadius: 100,
  },
  icon_view: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
    borderRadius: 100, // Apply border radius to container
    overflow: 'hidden',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: '#FAEFF1',
    textTransform: 'none',
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingLeft: 20,
    width: '70%',
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
    borderRadius: 50,
    backgroundColor: '#FAEFF1',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  },
  icon_img: {
    width: 50,
    height: 50,
    marginTop: 15
  },
  action_icons: {
    flexDirection: 'row',
  }

});

export default styles;
