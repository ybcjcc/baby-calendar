import { Box, Card, CardBody, Grid, GridItem, Heading, IconButton, Text, VStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import dayjs from 'dayjs';

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  pregnancyStartDate: Date;
}

const Calendar = ({ selectedDate, onDateSelect, pregnancyStartDate }: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs(selectedDate));
  
  const daysInMonth = currentMonth.daysInMonth();
  const firstDayOfMonth = currentMonth.startOf('month').day();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  const handlePrevMonth = () => {
    setCurrentMonth(prev => prev.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => prev.add(1, 'month'));
  };

  const isSelected = (day: number) => {
    return dayjs(selectedDate).isSame(currentMonth.date(day), 'day');
  };

  const isPregnancyStartDate = (day: number) => {
    return dayjs(pregnancyStartDate).isSame(currentMonth.date(day), 'day');
  };

  return (
    <Card>
      <CardBody>
        <VStack spacing={4}>
          <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
            <IconButton
              aria-label="Previous month"
              icon={<ChevronLeftIcon />}
              onClick={handlePrevMonth}
              variant="ghost"
            />
            <Heading size="md">
              {currentMonth.format('YYYY年 M月')}
            </Heading>
            <IconButton
              aria-label="Next month"
              icon={<ChevronRightIcon />}
              onClick={handleNextMonth}
              variant="ghost"
            />
          </Box>

          <Grid templateColumns="repeat(7, 1fr)" gap={2} width="100%">
            {weekDays.map((day) => (
              <GridItem key={day} textAlign="center">
                <Text fontWeight="bold">{day}</Text>
              </GridItem>
            ))}
            {Array(firstDayOfMonth).fill(null).map((_, index) => (
              <GridItem key={`empty-${index}`} />
            ))}
            {days.map((day) => (
              <GridItem
                key={day}
                textAlign="center"
                py={2}
                cursor="pointer"
                bg={isSelected(day) ? 'primary.500' : isPregnancyStartDate(day) ? 'pink.100' : 'transparent'}
                color={isSelected(day) ? 'white' : 'inherit'}
                borderRadius="md"
                border={isPregnancyStartDate(day) ? '2px solid pink.500' : 'none'}
                _hover={{ bg: isSelected(day) ? 'primary.600' : isPregnancyStartDate(day) ? 'pink.200' : 'gray.200' }}
                onClick={() => onDateSelect(currentMonth.date(day).toDate())}
              >
                <Text>{day}</Text>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default Calendar;