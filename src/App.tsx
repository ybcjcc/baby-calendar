import { Box, Container, Flex, VStack, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import Guide from './components/Guide';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Calendar from './components/Calendar';
import PregnancyProgress from './components/PregnancyProgress';
import PregnancyInfo from './components/PregnancyInfo';
import Header from './components/Header';
import Encyclopedia from './components/Encyclopedia';
import CheckupReminder from './components/CheckupReminder';
import WeeklyChanges from './components/WeeklyChanges';
import DietAndExercise from './components/DietAndExercise';

function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dueDate, setDueDate] = useState<Date>(() => {
    const savedDueDate = localStorage.getItem('dueDate');
    return savedDueDate ? dayjs(savedDueDate).toDate() : dayjs('2025-11-27').toDate();
  });

  useEffect(() => {
    localStorage.setItem('dueDate', dayjs(dueDate).toISOString());
  }, [dueDate]);

  return (
    <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
      <Header />
      <Box py={{ base: 4, md: 8 }}>
        <Tabs>
          <TabList>
            <Tab>日历</Tab>
            <Tab>变化</Tab>
            <Tab>孕期百科</Tab>
            <Tab>产检提醒</Tab>
            <Tab>膳食与运动</Tab>
            <Tab>孕期指南</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={0} pt={4}>
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
                  <Box>
                    <PregnancyInfo selectedDate={selectedDate} dueDate={dueDate} />
                  </Box>
                </VStack>
              </Flex>
            </TabPanel>
            <TabPanel p={0} pt={4}>
              <WeeklyChanges selectedDate={selectedDate} dueDate={dueDate} />
            </TabPanel>
            <TabPanel p={0} pt={4}>
              <Encyclopedia />
            </TabPanel>
            <TabPanel p={0} pt={4}>
              <CheckupReminder selectedDate={selectedDate} dueDate={dueDate} />
            </TabPanel>
            <TabPanel p={0} pt={4}>
              <DietAndExercise />
            </TabPanel>
            <TabPanel p={0} pt={4}>
              <Guide />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default App;
