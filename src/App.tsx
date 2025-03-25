import { Box, Container, Flex, VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Calendar from './components/Calendar';
import PregnancyProgress from './components/PregnancyProgress';
import PregnancyInfo from './components/PregnancyInfo';
import Header from './components/Header';

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dueDate, setDueDate] = useState<Date>(() => {
  const savedDueDate = localStorage.getItem('dueDate');
  return savedDueDate ? dayjs(savedDueDate).toDate() : dayjs().add(280, 'day').toDate();
});

useEffect(() => {
  localStorage.setItem('dueDate', dayjs(dueDate).toISOString());
}, [dueDate]);

  return (
    <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
      <Header />
      <Box py={{ base: 4, md: 8 }}>
        <Flex gap={{ base: 4, md: 8 }} direction={{ base: 'column', lg: 'row' }}>
          <Box flex={{ base: 'auto', lg: 2 }} w="100%">
            <Calendar 
              selectedDate={selectedDate} 
              onDateSelect={setSelectedDate}
              pregnancyStartDate={dayjs(dueDate).subtract(280, 'day').toDate()}
            />
          </Box>
          <VStack flex={{ base: 'auto', lg: 1 }} w="100%" spacing={{ base: 4, md: 8 }} align="stretch">
            <PregnancyProgress dueDate={dueDate} selectedDate={selectedDate} onDueDateChange={setDueDate} />
            <PregnancyInfo selectedDate={selectedDate} dueDate={dueDate} />
          </VStack>
        </Flex>
      </Box>
    </Container>
  );
}

export default App;
