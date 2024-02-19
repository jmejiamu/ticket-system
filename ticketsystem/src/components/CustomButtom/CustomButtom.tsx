import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IButtomProps} from './interfaces';

export const CustomButtom = (props: IButtomProps) => {
  const {onPress, title} = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'blue',
    padding: 10,
    // margin: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
