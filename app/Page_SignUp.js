import React from 'react';
import { useEffect, useState } from 'react';
import { Text, Pressable, TextInput, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles/styles';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {launchImageLibrary} from 'react-native-image-picker';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCn-fidJWhdmI9ClD3W2RxaS1BCqS3Irqc",
  authDomain: "mchacks24-salianmes.firebaseapp.com",
  projectId: "mchacks24-salianmes",
  storageBucket: "mchacks24-salianmes.appspot.com",
  messagingSenderId: "278107575648",
  appId: "1:278107575648:web:7971f2649fb066ca6b7a05",
  measurementId: "G-CW8WYVDBT1"
};

const Page_SignUp = () => {
  // Check if Firebase app is not already initialized
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();
  // Create a root reference
  const storage = getStorage();
  const metadata = {
    contentType: 'image/jpeg'
  };

  const navigation = useNavigation();

  const handlePress = (destination) => {
    navigation.navigate(destination);
  };

  useEffect(() => {
    setShowProvider(true);
    fetchProviders();
    fetchAdopters();
  }, []);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [showProvider, setShowProvider] = useState(false);
  const [showAdopter, setShowAdopter] = useState(false);
  const [providers, setProviders] = useState(false);
  const [adopters, setAdopters] = useState(false);
  const [selectedImage, setSelectedImage] = useState('https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg');
  const [profilePic, setProfilePic] = useState('');

  const sendData = () => {
    let newID;
    if (showAdopter){
      sendAdopterData();
    }
    if (showProvider) {
      sendProviderData();
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const fetchProviders = async () => {
    try {
      const response = await fetch('https://mchacks24-salianmes-default-rtdb.firebaseio.com/providers.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setProviders(data);
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchAdopters = async () => {
    try {
      const response = await fetch('https://mchacks24-salianmes-default-rtdb.firebaseio.com/adopters.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setAdopters(data);
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sendAdopterData = async () => {
    let newID;

    if (adopters !== null) {
      newID = Object.keys(adopters).length + 1;
    } else {
      newID = 0;
    }

    const adopterData = {
      id: newID,
      image: profilePic,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      location: location
    };

    try {
      const response = await fetch('https://mchacks24-salianmes-default-rtdb.firebaseio.com/adopters.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(adopterData)
      });

      if (!response.ok) {
        throw new Error('Failed to send adopter data');
      }

      console.log('adopter data sent successfully');
      setProfilePic('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setLocation('');
      fetchAdopters();
      navigation.navigate("PetsMatching");
    } catch (error) {
      console.error('Error sending adopter data:', error);
    }
  };

  const sendProviderData = async () => {
    let newID;

    if (providers !== null) {
      newID = Object.keys(providers).length + 1;
    } else {
      newID = 0;
    }

    const providerData = {
      id: newID,
      image: profilePic,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      location: location
    };

    try {
      const response = await fetch('https://mchacks24-salianmes-default-rtdb.firebaseio.com/providers.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(providerData)
      });

      if (!response.ok) {
        throw new Error('Failed to send provider data');
      }

      console.log('Provider data sent successfully');
      setProfilePic('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setLocation('');
    } catch (error) {
      console.error('Error sending provider data:', error);
    }
  };

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handlePressProvider = () => {
    if (showProvider){
      if (showAdopter){
        setShowProvider(false);
      }
    } else {
      setShowProvider(true);
      setShowAdopter(false);
    }
  };

  const handlePressAdopter = () => {
    if (showAdopter){
      if (showProvider){
        setShowAdopter(false);
      }
    } else {
      setShowAdopter(true);
      setShowProvider(false);
    }
  };

const uploadImage = async (imageUri) => {
  const response = await fetch(imageUri);
  const blob = await response.blob();
  const storageRef = ref(storage, "images/" + new Date().getTime());

  const uploadTask = uploadBytesResumable(storageRef, blob, metadata);
  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        setProfilePic(downloadURL);
      });
    }
  );

};

  SelectImage = () => {
      const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
          };

          launchImageLibrary(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('Image picker error: ', response.error);
            } else {
              let imageUri = response.uri || response.assets?.[0]?.uri;
              setSelectedImage(imageUri);

              console.log("Will Upload");
              if (imageUri != null)
              {
                uploadImage(imageUri)
              }
            }
          });
  };


  return (
    <LinearGradient
      colors={['#E29062', '#DA4167']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <View style="icon_view">
        <Pressable onPress={SelectImage}>
          <Image
            source={{ uri: selectedImage }}
            style={styles.icon}
          />
        </Pressable>
        </View>
        <View style={styles.toggle}>
        <Pressable
          style={({ pressed }) => [
            styles.toggle_button,
            showProvider && styles.toggle_button_pressed,
          ]}
          onPress={handlePressProvider}
        >
          <Text>Provider</Text>
        </Pressable>
          <Pressable
          style={({ pressed }) => [
            styles.toggle_button,
            showAdopter && styles.toggle_button_pressed,
          ]}
          onPress={handlePressAdopter}
        >
          <Text>Adopter</Text>
        </Pressable>
        </View>
        {showProvider && (
          <>
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="First Name of Provider"
          placeholderTextColor="#FAEFF1"
          value={firstName}
          onChangeText={handleFirstNameChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Last Name of Provider"
          placeholderTextColor="#FAEFF1"
          value={lastName}
          onChangeText={handleLastNameChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Email"
          placeholderTextColor="#FAEFF1"
          value={email}
          onChangeText={handleEmailChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Password"
          placeholderTextColor="#FAEFF1"
          value={password}
          onChangeText={handlePasswordChange}
        />
         <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Location"
          placeholderTextColor="#FAEFF1"
          value={location}
          onChangeText={handleLocationChange}
        />
        </>
        )}
        {showAdopter && (
        <>
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="First Name of Adopter"
          placeholderTextColor="#FAEFF1"
          value={firstName}
          onChangeText={handleFirstNameChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Last Name of Adopter"
          placeholderTextColor="#FAEFF1"
          value={lastName}
          onChangeText={handleLastNameChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Email"
          placeholderTextColor="#FAEFF1"
          value={email}
          onChangeText={handleEmailChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Password"
          placeholderTextColor="#FAEFF1"
          value={password}
          onChangeText={handlePasswordChange}
        />
        <TextInput
          style={[styles.input, { backgroundColor: '#FAEFF130', color: "#FAEFF1" }]}
          placeholder="Location"
          placeholderTextColor="#FAEFF1"
          value={location}
          onChangeText={handleLocationChange}
        />

        </>
        )}
        <Pressable onPress={sendData} style={styles.button}>
          <Text>SIGN UP</Text>
        </Pressable>
        <Pressable onPress={() => handlePress("LogIn")}>
          <Text style={styles.text}>Have a provider account? Log in now</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const CustomButton = ({ title, destination }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(destination);
  };

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Page_SignUp;
