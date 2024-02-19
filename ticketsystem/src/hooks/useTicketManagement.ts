import {useState, useEffect} from 'react';

export const useTicketManagement = () => {
  const [ticketData, setTicketData] = useState([]);

  const handleRequest = async () => {
    try {
      const response = await fetch('http://localhost:3500/api-v1/get-tickets');
      const data = await response.json();
      setTicketData(data);
    } catch (error) {
      console.log('Error in file name NewTicket.tsx ', error);
    }
  };

  const handleUpdate = async (id: number, status: string) => {
    try {
      await fetch(`http://localhost:3500/api-v1/update-ticket/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ticket_status: status}),
      });
      handleRequest();
    } catch (error) {
      console.log('Error in file name NewTicket.tsx ', error);
    }
  };

  useEffect(() => {
    handleRequest();
  }, []);

  useEffect(() => {
    handleRequest();
  }, [ticketData]);
  return {ticketData, handleUpdate};
};
