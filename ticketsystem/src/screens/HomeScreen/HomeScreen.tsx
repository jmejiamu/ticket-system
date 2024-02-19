import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {CustomButtom} from '../../components';

interface IInitialState {
  name: string;
  email: string;
  description: string;
  ticket_status: string;
}

export const HomeScreen = () => {
  const [formatData, setFormatData] = useState<IInitialState>({
    name: '',
    email: '',
    description: '',
    ticket_status: 'NEW',
  });

  const handleInputChange = (key: string, value: string) => {
    setFormatData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handlePress = async () => {
    try {
      await fetch('http://localhost:3500/api-v1/request-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formatData),
      });
      setFormatData({
        name: '',
        email: '',
        description: '',
        ticket_status: 'NEW',
      });
    } catch (error) {
      console.log('Error in file name HomeScreen.tsx ', error);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        value={formatData.name}
        onChangeText={text => handleInputChange('name', text)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={formatData.email}
        onChangeText={text => handleInputChange('email', text)}
      />
      {/* TODO: investigate */}
      {/* <TextInput style={styles.inputStyle} placeholder="Photo" /> */}
      <TextInput
        style={styles.inputStyle}
        placeholder="Description"
        value={formatData.description}
        onChangeText={text => handleInputChange('description', text)}
      />
      <View style={{marginHorizontal: 10}}>
        <CustomButtom title="Submit" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
