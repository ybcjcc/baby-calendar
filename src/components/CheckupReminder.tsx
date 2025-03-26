import { Box, Card, CardBody, CardHeader, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import dayjs from 'dayjs';
import checkupSchedule from '../data/checkupSchedule';

interface CheckupReminderProps {
  selectedDate: Date;
  dueDate: Date;
}

const CheckupReminder = ({ selectedDate, dueDate }: CheckupReminderProps) => {
  const dueDateDayjs = dayjs(dueDate);
  const pregnancyStartDate = dueDateDayjs.subtract(280, 'day');
  const selectedDateDayjs = dayjs(selectedDate);

  // 计算当前孕周
  const daysDiff = selectedDateDayjs.isBefore(pregnancyStartDate) ? 1 : selectedDateDayjs.isAfter(dueDateDayjs) ? 280 : selectedDateDayjs.diff(pregnancyStartDate, 'day') + 1;
  const currentWeek = Math.floor(daysDiff / 7);

  // 根据当前孕周筛选和排序产检项目
  const upcomingCheckups = checkupSchedule
    .filter(item => item.week >= currentWeek)
    .sort((a, b) => a.week - b.week);

  const pastCheckups = checkupSchedule
    .filter(item => item.week < currentWeek)
    .sort((a, b) => b.week - a.week);

  return (
    <Box>
      <VStack spacing={6} align="stretch">
        {upcomingCheckups.length > 0 && (
          <Box>
            <Heading size="md" mb={4}>即将到来的产检</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {upcomingCheckups.map((checkup) => (
                <Card key={checkup.week} variant="outline">
                  <CardHeader pb={2}>
                    <Heading size="sm" color="primary.500">
                      {checkup.title} (第{checkup.week}周)
                    </Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text fontSize="sm" color="gray.600" mb={2}>
                      {checkup.description}
                    </Text>
                    <Text fontSize="sm" fontWeight="bold" mb={1}>检查项目：</Text>
                    <VStack align="stretch" spacing={1}>
                      {checkup.examinations.map((exam, index) => (
                        <Text key={index} fontSize="sm">
                          • {exam}
                        </Text>
                      ))}
                    </VStack>
                    {checkup.notes && (
                      <Box mt={2}>
                        <Text fontSize="sm" fontWeight="bold" mb={1}>注意事项：</Text>
                        <VStack align="stretch" spacing={1}>
                          {checkup.notes.map((note, index) => (
                            <Text key={index} fontSize="sm" color="red.500">
                              • {note}
                            </Text>
                          ))}
                        </VStack>
                      </Box>
                    )}
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
        )}

        {pastCheckups.length > 0 && (
          <Box>
            <Heading size="md" mb={4}>已完成的产检</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {pastCheckups.map((checkup) => (
                <Card key={checkup.week} variant="outline">
                  <CardHeader pb={2}>
                    <Heading size="sm" color="gray.500">
                      {checkup.title} (第{checkup.week}周)
                    </Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text fontSize="sm" color="gray.600" mb={2}>
                      {checkup.description}
                    </Text>
                    <Text fontSize="sm" fontWeight="bold" mb={1}>检查项目：</Text>
                    <VStack align="stretch" spacing={1}>
                      {checkup.examinations.map((exam, index) => (
                        <Text key={index} fontSize="sm">
                          • {exam}
                        </Text>
                      ))}
                    </VStack>
                    {checkup.notes && (
                      <Box mt={2}>
                        <Text fontSize="sm" fontWeight="bold" mb={1}>注意事项：</Text>
                        <VStack align="stretch" spacing={1}>
                          {checkup.notes.map((note, index) => (
                            <Text key={index} fontSize="sm" color="gray.500">
                              • {note}
                            </Text>
                          ))}
                        </VStack>
                      </Box>
                    )}
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default CheckupReminder;