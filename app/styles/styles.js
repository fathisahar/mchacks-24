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
});

export default styles;
