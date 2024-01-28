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
  toggle_dashboard:{
    flexDirection: 'row', 
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
  toggle_button_dashboard: {
    marginTop: 0,
    marginBottom: 25,
    marginRight:10,
    borderRadius: 30,
    backgroundColor: '#CB5A76',
    textTransform: 'none',
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '55%',
    alignItems: 'center',
    opacity: 0.5,
  },
  pet_card: {
    width:'40%',
    height: '30%',
    backgroundColor: '#D9D9D9', 
    color: "#FAEFF1",
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  pet_card_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  toggle_button_pressed_dashboard: {
    backgroundColor: '#CB5A76',
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
  msg_container: {
    height: 90,
    marginTop: 30,
      flexDirection: 'row',
  },
  msg_pfp: {
    width: 80,
    height: 80,
      marginTop: 5,
      marginLeft: 10,
      backgroundColor: '#DA4167',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 100,
  },
  msg_button: {
      color: '#5D1D29',
      width: 180,
      height: 80,
      marginLeft: 0,
  },
  msg_preview: {
      width: 250,
      height: 80,
      alignItems: 'center',
      backgroundColor: '#FFB370',
      marginTop: 5,
      marginLeft: 20,
      flexDirection: 'row',
  },
  msg_name: {
      color: '#5D1D29',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 0, // Adjust the margin as neede
      marginLeft: 0, // Adjust the margin as needed
      marginBottom: 5,
  },
  msg_time: {
      width: 250,
      height: 80,
      justifyContent: 'center',
      backgroundColor: '#DA4167',
      marginTop: 5,
      marginLeft: 20,
  },
  txt_time: {
      color: '#707070',
      marginRight: 0,
      right: 0,
  },



});

export default styles;
