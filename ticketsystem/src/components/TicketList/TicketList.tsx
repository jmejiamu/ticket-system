import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CustomButtom} from '..';

interface ITicket {
  id: number;
  name: string;
  email: string;
  description: string;
  ticket_status: string;
}
interface IItem {
  item: ITicket;
}

interface Props {
  ticketData: ITicket[];
  handleUpdate: (id: number, status: string) => void;
  buttonOne: string;
  buttonTwo: string;
  status: string;
}

export const TicketList = (props: Props) => {
  const {ticketData, handleUpdate, status, buttonOne, buttonTwo} = props;
  return (
    <FlatList
      data={ticketData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}: IItem) => {
        return (
          <View>
            {item.ticket_status === status && (
              <View style={styles.card}>
                <Text>Name: {item.name}</Text>
                <Text>Email: {item.email}</Text>
                <Text>Description: {item.description}</Text>
                <View>
                  <CustomButtom
                    title={buttonOne}
                    onPress={() => handleUpdate(item.id, buttonOne)}
                  />
                  <CustomButtom
                    title={buttonTwo}
                    onPress={() => handleUpdate(item.id, buttonTwo)}
                  />
                </View>
              </View>
            )}
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
});
