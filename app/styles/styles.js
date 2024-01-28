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
  adding_pets_size_container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  dashboard_header: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  add_pets_button: {
    backgroundColor: '#FFB370',
    borderRadius:50,
    marginRight:30,
    marginBottom:20,
    width:50,
    height: 50,
    alignItems:'center',
    justifyContent: 'center',
  },
  add_pets_plus: {
    fontSize:36,
    marginBottom:10,
  },
  adding_pets_header: {
    alignSelf: 'center', 
    textAlign: 'center',
    marginTop:10,
    marginBottom:15,
    fontSize:28,
    color:'#FFFF',
  }, 
  toggle_button_pressed: {
    backgroundColor: '#FAEFF1',
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
    width: 250,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 100,
    marginBottom:20,
    marginBottom: 5,
  },
  icon_adding_pets: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 100,
    marginBottom:20,
    marginBottom: 5,
  },
  icon_view: {
    borderRadius: 100,
    overflow: 'hidden',
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 30,
    backgroundColor: '#FAEFF1',
    textTransform: 'none',
    paddingHorizontal: 12,
    paddingVertical: 12,
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
  }

});

export default styles;
