import { Box, Card, CardBody, CardHeader, Heading, Progress, Text, VStack, Input, FormControl, FormLabel } from '@chakra-ui/react';
import dayjs from 'dayjs';

interface PregnancyProgressProps {
  dueDate: Date;
  selectedDate: Date;
  onDueDateChange: (date: Date) => void;
}

const PregnancyProgress = ({ dueDate, selectedDate, onDueDateChange }: PregnancyProgressProps) => {
  const dueDateDayjs = dayjs(dueDate);
  const pregnancyStartDate = dueDateDayjs.subtract(280, 'day');
  const selectedDateDayjs = dayjs(selectedDate);

  // 计算选中日期的孕周和天数，并确保在有效范围内
  const daysDiff = selectedDateDayjs.isBefore(pregnancyStartDate) ? 1 : selectedDateDayjs.isAfter(dueDateDayjs) ? 280 : selectedDateDayjs.diff(pregnancyStartDate, 'day') + 1;
  const currentWeek = Math.floor(daysDiff / 7);
  const currentDay = daysDiff % 7;
  const remainingDays = Math.max(0, 280 - daysDiff);

  // 计算总体进度，确保在有效范围内
  const progress = Math.min(100, Math.max(0, (daysDiff / 280) * 100));

  return (
    <Card>
      <CardHeader>
        <Heading size="md">孕期进度</Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing={4} align="stretch">
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              {currentWeek}周{currentDay}天
            </Text>
            <Text color="gray.600">
              已经怀孕{daysDiff}天，还有{remainingDays}天
            </Text>
          </Box>
          <Progress
            value={progress}
            size="lg"
            colorScheme="primary"
            borderRadius="full"
            hasStripe
            isAnimated
          />
          <FormControl>
            <FormLabel>预产期</FormLabel>
            <Input
              type="date"
              value={dayjs(dueDate).format('YYYY-MM-DD')}
              onChange={(e) => onDueDateChange(new Date(e.target.value))}
            />
          </FormControl>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default PregnancyProgress;