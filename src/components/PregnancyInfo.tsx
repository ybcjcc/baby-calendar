import { Box, Card, CardBody, CardHeader, Heading, Text, VStack, Badge, List, ListItem, ListIcon, SimpleGrid, Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import dayjs from 'dayjs';
import fetalDevelopment from '../data/fetalDevelopment';

interface PregnancyInfoProps {
  selectedDate: Date;
  dueDate?: Date;
}

const PregnancyInfo = ({ selectedDate, dueDate = dayjs().add(280, 'day').toDate() }: PregnancyInfoProps) => {
  // 确保日期参数有效
  const dueDateDayjs = dayjs(dueDate || new Date());
  const pregnancyStartDate = dueDateDayjs.subtract(280, 'day');
  const selectedDayjs = dayjs(selectedDate || new Date());
  
  // 计算选中日期对应的孕周，并确保在有效范围内
  const daysDiff = selectedDayjs.isBefore(pregnancyStartDate) ? 0 : selectedDayjs.isAfter(dueDateDayjs) ? 280 : selectedDayjs.diff(pregnancyStartDate, 'day');
  const currentWeek = Math.floor(daysDiff / 7);
  
  // 获取最接近的孕周信息
  const availableWeeks = Object.keys(fetalDevelopment).map(Number).sort((a, b) => a - b);
  const maxAvailableWeek = availableWeeks[availableWeeks.length - 1];
  const minAvailableWeek = availableWeeks[0];
  
  // 根据当前周数选择合适的发育信息
  let weekToShow = minAvailableWeek;
  if (currentWeek >= maxAvailableWeek) {
    weekToShow = maxAvailableWeek;
  } else if (currentWeek > minAvailableWeek) {
    weekToShow = availableWeeks.reduce((prev, curr) => 
      Math.abs(curr - currentWeek) < Math.abs(prev - currentWeek) ? curr : prev
    , minAvailableWeek);
  }
  
  // 确保weeklyInfo始终有值
  const weeklyInfo = fetalDevelopment[weekToShow];

  // 模拟产检提醒数据，后续会从数据库获取
  const checkupInfo = {
    date: dayjs(selectedDate).format('YYYY年MM月DD日'),
    time: '上午 9:30',
    items: ['常规产检', 'B超检查', '血压监测']
  };

  return (
    <VStack spacing={4}>
      <Card width="100%">
        <CardHeader>
          <Heading size="md">本周胎儿发育</Heading>
        </CardHeader>
        <CardBody>
          <VStack align="stretch" spacing={3}>
            <Box>
              <Text fontWeight="bold">大小：</Text>
              <Text>{weeklyInfo.size}</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">体重：</Text>
              <Text>{weeklyInfo.weight}</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">发育情况：</Text>
              <List spacing={2}>
                {weeklyInfo.development.map((info, index) => (
                  <ListItem key={index}>
                    <ListIcon as={InfoIcon} color="primary.500" />
                    {info}
                  </ListItem>
                ))}
              </List>
            </Box>
          </VStack>
        </CardBody>
      </Card>

      <Card width="100%">
        <CardHeader>
          <Heading size="md">本周注意事项</Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <Box>
              <Text fontWeight="bold" mb={2}>饮食建议：</Text>
              <List spacing={2}>
                {weeklyInfo.precautions.diet.map((item, index) => (
                  <ListItem key={index}>
                    <ListIcon as={InfoIcon} color="primary.500" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Text fontWeight="bold" mb={2}>运动建议：</Text>
              <List spacing={2}>
                {weeklyInfo.precautions.exercise.map((item, index) => (
                  <ListItem key={index}>
                    <ListIcon as={InfoIcon} color="primary.500" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Text fontWeight="bold" mb={2}>其他注意事项：</Text>
              <List spacing={2}>
                {weeklyInfo.precautions.other.map((item, index) => (
                  <ListItem key={index}>
                    <ListIcon as={InfoIcon} color="primary.500" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>

      {/* <Card width="100%">
        <CardHeader>
          <Heading size="md">孕期知识科普</Heading>
        </CardHeader>
        <CardBody>
          <Tabs colorScheme="primary" variant="enclosed">
            <TabList>
              <Tab>营养知识</Tab>
              <Tab>运动指导</Tab>
              <Tab>生活方式</Tab>
              <Tab>心理健康</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <List spacing={2}>
                  {(weeklyInfo?.knowledge?.nutrition ?? []).map((item, index) => (
                    <ListItem key={index}>
                      <ListIcon as={InfoIcon} color="primary.500" />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </TabPanel>
              <TabPanel>
                <List spacing={2}>
                  {(weeklyInfo?.knowledge?.exercise ?? []).map((item, index) => (
                    <ListItem key={index}>
                      <ListIcon as={InfoIcon} color="primary.500" />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </TabPanel>
              <TabPanel>
                <List spacing={2}>
                  {(weeklyInfo?.knowledge?.lifestyle ?? []).map((item, index) => (
                    <ListItem key={index}>
                      <ListIcon as={InfoIcon} color="primary.500" />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </TabPanel>
              <TabPanel>
                <List spacing={2}>
                  {(weeklyInfo?.knowledge?.mentalHealth ?? []).map((item, index) => (
                    <ListItem key={index}>
                      <ListIcon as={InfoIcon} color="primary.500" />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card> */}

      {/* <Card width="100%">
        <CardHeader>
          <Heading size="md">产检提醒</Heading>
        </CardHeader>
        <CardBody>
          <VStack align="stretch" spacing={3}>
            <Box>
              <Badge colorScheme="primary" mb={2}>{checkupInfo.date}</Badge>
              <Text color="gray.600">{checkupInfo.time}</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">检查项目：</Text>
              <List spacing={2}>
                {checkupInfo.items.map((item, index) => (
                  <ListItem key={index}>
                    <ListIcon as={InfoIcon} color="primary.500" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          </VStack>
        </CardBody>
      </Card> */}
    </VStack>
  );
};

export default PregnancyInfo;