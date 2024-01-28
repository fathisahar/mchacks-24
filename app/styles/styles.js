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
