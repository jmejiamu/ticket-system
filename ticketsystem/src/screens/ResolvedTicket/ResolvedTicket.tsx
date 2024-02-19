import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTicketManagement} from '../../hooks/useTicketManagement';
import {TicketList} from '../../components';

enum TicketStatus {
  Progress = 'PROGRESS',
  Done = 'RESOLVED',
  New = 'NEW',
}

export const ResolvedTicket = () => {
  const {ticketData, handleUpdate} = useTicketManagement();
  return (
    <View>
      <TicketList
        ticketData={ticketData}
        handleUpdate={handleUpdate}
        status={TicketStatus.Done}
        buttonOne={TicketStatus.Progress}
        buttonTwo={TicketStatus.New}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
