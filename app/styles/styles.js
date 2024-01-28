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
});

export default styles;
