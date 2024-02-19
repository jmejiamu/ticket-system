import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TicketList} from '../../components';
import {useTicketManagement} from '../../hooks/useTicketManagement';

enum TicketStatus {
  Progress = 'PROGRESS',
  Done = 'RESOLVED',
  New = 'NEW',
}

export const ProgressTicket = () => {
  const {ticketData, handleUpdate} = useTicketManagement();
  return (
    <View>
      <TicketList
        ticketData={ticketData}
        handleUpdate={handleUpdate}
        status={TicketStatus.Progress}
        buttonOne={TicketStatus.Done}
        buttonTwo={TicketStatus.New}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
