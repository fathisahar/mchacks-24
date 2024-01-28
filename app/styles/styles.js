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
  container_profile: {
    flex: 1,
    backgroundColor: '#DA4167',
  },

  backgroundBox_profile: {
    width: '100%',
    height: 650, 
    backgroundColor: '#FAEFF1',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
  },
  foregroundBox_profile: {
    width: '100%', 
    height: '30%',
    backgroundColor: '#FAEFF1',
    position: 'absolute',
    top: '17%', 
    left: '0%', 
    bottom: '40%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 7,
  },

  container2_profile: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 320,
    marginTop: 0,
  },

  container3_profile:{
    alignItems: 'left',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#FAEFF1',
    marginTop: -70,
    marginLeft: 40,
    marginRight: 40,
  },

  container4_profile: {
    flexDirection: 'row', 
    backgroundColor: '#FAEFF1',
    height: 135,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
  },
  column: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  container5_profile:{
    height: 180,
    backgroundColor: '#FAEFF1',
    marginLeft: 40,
    marginRight: 40,
  },

  container6_profile:{
    alignSelf: 'flex-start',
    padding: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    marginTop: 4,
  },

  circle_profile: {
    width: 130, 
    height: 130, 
    backgroundColor: '#D88393', 
    borderRadius: 65, 
    alignItem: 'center', 
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
    width: '32%',
    alignItems: 'center',
    opacity: 0.5,
  },
  toggle_button_pressed: {
    backgroundColor: '#FFFFF',
    opacity: 0.9,
  },  

  text_header1: {
    fontSize: 25, 
    fontFamily: 'sans-serif-light', 
    fontWeight: 'bold',
    color: '#000000', 
    textAlign: 'center', 
    alignSelf: 'flex', 
  },

  text_header2: {
    fontSize: 15, 
    fontFamily: 'sans-serif-thin', 
    fontWeight: 'bold', 
    color: '#000000', 
    textAlign: 'center', 
    alignSelf: 'flex', 
  },

  text_header3: {
    fontSize: 18, 
    fontFamily: 'sans-serif-light', 
    fontWeight: 'bold', 
    color: '#000000', 
    textAlign: 'left', 
    alignSelf: 'flex-start', 
    marginTop: 12, 
    marginBottom: 6,
  },

  text_header4: {
    fontSize: 13, 
    fontFamily: 'sans-serif-thin', 
    fontWeight: 'bold', 
    color: '#000000',
    textAlign: 'left', 
    alignSelf: 'flex-start', 
    marginTop: 0,
  },

  text_header5: {
    fontSize: 13, 
    fontFamily: 'sans-serif-thin', 
    fontWeight: 'bold', 
    color: '#000000', 
    textAlign: 'left', 
    alignSelf: 'flex-start', 
    marginTop: -4,
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
  filters_button: {
      marginTop: 0,
      borderRadius: 40,
      backgroundColor: '#DA4167',
      borderWidth: 0,
      padding: 0,
      marginBottom: 0,
      width: 150
  },
  filters_selected: {
    borderRadius: 40,
    backgroundColor: '#EB99AD',
    padding: 10,
    marginRight: 10
  },
  filters_container: {
    flexDirection: 'row',
    margin: 10
  },
  filters_dropdown: {
      width: 150,
      margin: 0
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
