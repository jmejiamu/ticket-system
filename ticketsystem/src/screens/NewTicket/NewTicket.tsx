import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CustomButtom, TicketList} from '../../components';
import {useTicketManagement} from '../../hooks/useTicketManagement';

enum TicketStatus {
  Progress = 'PROGRESS',
  Done = 'RESOLVED',
  New = 'NEW',
}

export const NewTicket = () => {
  const {ticketData, handleUpdate} = useTicketManagement();

  return (
    <View>
      <TicketList
        ticketData={ticketData}
        handleUpdate={handleUpdate}
        status={TicketStatus.New}
        buttonOne={TicketStatus.Progress}
        buttonTwo={TicketStatus.Done}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
