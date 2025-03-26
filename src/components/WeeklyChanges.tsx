import { Box, Card, CardBody, CardHeader, Heading, List, ListItem, ListIcon, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import dayjs from 'dayjs';
import weeklyChanges from '../data/weeklyChanges';

interface WeeklyChangesProps {
  selectedDate: Date;
  dueDate?: Date;
}

const WeeklyChanges = ({ selectedDate, dueDate = dayjs().add(280, 'day').toDate() }: WeeklyChangesProps) => {
  const dueDateDayjs = dayjs(dueDate);
  const pregnancyStartDate = dueDateDayjs.subtract(280, 'day');
  const selectedDayjs = dayjs(selectedDate);

  // 计算当前孕周
  const daysDiff = selectedDayjs.isBefore(pregnancyStartDate) ? 1 : selectedDayjs.isAfter(dueDateDayjs) ? 280 : selectedDayjs.diff(pregnancyStartDate, 'day') + 1;
  const currentWeek = Math.floor(daysDiff / 7);

  // 获取所有周数并排序
  const availableWeeks = Object.keys(weeklyChanges).map(Number).sort((a, b) => a - b);

  // 将变化信息分为即将到来和已经经历
  const upcomingChanges = availableWeeks
    .filter(week => week >= currentWeek)
    .map(week => ({ week, ...weeklyChanges[week] }));

  const pastChanges = availableWeeks
    .filter(week => week < currentWeek)
    .map(week => ({ week, ...weeklyChanges[week] }))
    .reverse();

  return (
    <Box>
      <VStack spacing={6} align="stretch">
        {upcomingChanges.length > 0 && (
          <Box>
            <Heading size="md" mb={4}>即将到来的变化</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {upcomingChanges.map((weekInfo) => (
                <Card key={weekInfo.week} variant="outline">
                  <CardHeader pb={2}>
                    <Heading size="sm" color="primary.500">
                      第{weekInfo.week}周变化
                    </Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <VStack align="stretch" spacing={3}>
                      <Box>
                        <Text fontSize="sm" fontWeight="bold" color="primary.500" mb={1}>身体变化：</Text>
                        <List spacing={1}>
                          {weekInfo.bodyChanges.map((change, index) => (
                            <ListItem key={index} fontSize="sm">
                              • {change}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                      <Box>
                        <Text fontSize="sm" fontWeight="bold" color="primary.500" mb={1}>不适反应：</Text>
                        <List spacing={1}>
                          {weekInfo.discomfort.map((symptom, index) => (
                            <ListItem key={index} fontSize="sm">
                              • {symptom}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                      <Box>
                        <Text fontSize="sm" fontWeight="bold" color="primary.500" mb={1}>注意事项：</Text>
                        <List spacing={1}>
                          {weekInfo.precautions.map((precaution, index) => (
                            <ListItem key={index} fontSize="sm">
                              • {precaution}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
        )}

        {pastChanges.length > 0 && (
          <Box>
            <Heading size="md" mb={4}>已经经历的变化</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {pastChanges.map((weekInfo) => (
                <Card key={weekInfo.week} variant="outline">
                  <CardHeader pb={2}>
                    <Heading size="sm" color="gray.500">
                      第{weekInfo.week}周变化
                    </Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <VStack align="stretch" spacing={3}>
                      <Box>
                        <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={1}>身体变化：</Text>
                        <List spacing={1}>
                          {weekInfo.bodyChanges.map((change, index) => (
                            <ListItem key={index} fontSize="sm" color="gray.600">
                              • {change}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                      <Box>
                        <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={1}>不适反应：</Text>
                        <List spacing={1}>
                          {weekInfo.discomfort.map((symptom, index) => (
                            <ListItem key={index} fontSize="sm" color="gray.600">
                              • {symptom}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                      <Box>
                        <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={1}>注意事项：</Text>
                        <List spacing={1}>
                          {weekInfo.precautions.map((precaution, index) => (
                            <ListItem key={index} fontSize="sm" color="gray.600">
                              • {precaution}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </VStack>
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

export default WeeklyChanges;