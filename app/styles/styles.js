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
    width: '32%',
    alignItems: 'center',
    opacity: 0.5,
  },
  toggle_button_pressed: {
    backgroundColor: '#FFFFF',
    opacity: 0.9,
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
    marginBottom:20,
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
    marginTop: 5,
    marginBottom: 5,
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
  pets_dashboard: {
      flex: 1,
      padding: 20,
      // Add other container styles if needed
  },
  headerText: {
      color: '#5D1D29',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 10, // Adjust the margin as needed
      marginLeft: 10, // Adjust the margin as needed
      marginBottom: 20,
  },
  filters_text: {
    color: '#FAEFF1',
    fontSize: 16,
  },
  filters_button: {
      marginTop: 0,
      marginLeft: 10,
      marginBottom: 20,
      borderRadius: 40,
      backgroundColor: '#DA4167',
      textTransform: 'none',
      paddingHorizontal: 20,
      paddingVertical: 20,
      width: '30%',
      alignItems: 'center',
  },
  filters_container: {
      flex: 1,
      marginTop: 50,
      marginLeft: 10,
      width: '47%',
      height: '30%',
  },
  filter_item: {
      marginTop: 0,
      marginLeft: 10,
      color: '#FAEFF1',
      fontSize: 16,
  },
  pet_text: {
      color: '#FAEFF1',
      fontSize: 16,
  },
  pet_display: {
      marginTop: 0,
      marginLeft: 10,
      marginBottom: 10,
      borderRadius: 20,
      backgroundColor: '#DA4167',
      textTransform: 'none',
      paddingHorizontal: 20,
      paddingVertical: 20,
      width: '47%',
      height: '30%',
      alignItems: 'center',
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
    height: '50%',
    borderRadius: 30,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#FAEFF1',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50
  },
  icon_img: {
    width: 50,
    height: 50,
    marginTop: 15
  },
  action_icons: {
    flexDirection: 'row',
  },
  nav_container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#DA4167',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 25,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
  },
  nav_button: {
      flex: 1,
      backgroundColor: '#FAEFF1',
      borderRadius: 10,
      padding: 0,
      marginHorizontal: 5,
      alignItems: 'center',
  },
  nav_img: {
    width: 35,
    height: 35,
  },

});

export default styles;
