import { Box, Card, CardBody, CardHeader, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, List, ListItem, Table, Thead, Tbody, Tr, Th, Td, VStack } from '@chakra-ui/react';

const Guide = () => {
  return (
    <Box p={4}>
      <Tabs colorScheme="primary" variant="enclosed">
        <TabList>
          <Tab>孕早期 (0-12周)</Tab>
          <Tab>孕中期 (13-28周)</Tab>
          <Tab>孕晚期 (29-40周)</Tab>
          <Tab>分娩期 (37-42周)</Tab>
          <Tab>通用建议</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Card>
                <CardHeader>
                  <Heading size="md">身体变化</Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>• 1-4周：受精卵着床，可能无明显症状，部分人会有轻微着床出血</ListItem>
                    <ListItem>• 5-6周：乳房胀痛、疲劳、尿频，孕吐（约50%孕妇出现，高峰在8-10周）</ListItem>
                    <ListItem>• 7-12周：激素波动可能导致情绪敏感，妊娠反应加重（恶心、厌食）</ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Heading size="md">关键产检与项目</Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>
                      <Text fontWeight="bold">5-8周：</Text>
                      <List ml={4} spacing={1}>
                        <ListItem>• 首次医院检查：确认妊娠（血HCG、孕酮）、B超排除宫外孕</ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="bold">11-13周+6：</Text>
                      <List ml={4} spacing={1}>
                        <ListItem>• NT检查（B超测胎儿颈后透明层厚度）</ListItem>
                        <ListItem>• 早期唐筛（抽血评估染色体风险）</ListItem>
                        <ListItem>• 建卡（社区医院或产科登记档案）</ListItem>
                      </List>
                    </ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Heading size="md">注意事项</Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>• 补充叶酸（400μg/天），避免剧烈运动</ListItem>
                    <ListItem>• 若孕吐严重，少量多餐，必要时就医防脱水</ListItem>
                  </List>
                </CardBody>
              </Card>
            </VStack>
          </TabPanel>

          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Card>
                <CardHeader>
                  <Heading size="md">身体变化</Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>• 13-16周：孕吐缓解，腹部微凸，可能出现便秘</ListItem>
                    <ListItem>• 17-20周：胎动初觉（像小鱼游动，初产妇约18-20周感知）</ListItem>
                    <ListItem>• 21-28周：腹部明显隆起，可能出现妊娠线、腰背酸痛</ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Heading size="md">关键产检与项目</Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>
                      <Text fontWeight="bold">15-20周：</Text>
                      <List ml={4} spacing={1}>
                        <ListItem>• 中期唐筛或无创DNA（NIPT，检测染色体异常）</ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="bold">20-24周：</Text>
                      <List ml={4} spacing={1}>
                        <ListItem>• 大排畸B超（详细检查胎儿结构，需提前预约）</ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="bold">24-28周：</Text>
                      <List ml={4} spacing={1}>
                        <ListItem>• 糖耐量测试（OGTT，筛查妊娠糖尿病）</ListItem>
                        <ListItem>• 血常规、尿常规复查</ListItem>
                      </List>
                    </ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Heading size="md">注意事项</Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>• 补钙（每日1000mg）、铁（防贫血），控制体重增长（建议每周0.5kg）</ListItem>
                    <ListItem>• 可开始孕期瑜伽或散步，缓解腰背压力</ListItem>
                  </List>
                </CardBody>
              </Card>
            </VStack>
          </TabPanel>

          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Card>
                <CardHeader>
                  <Heading size="md">身体变化</Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>• 29-32周：胎动频繁，可能出现耻骨痛、水肿、胃灼热</ListItem>
                    <ListItem>• 33-36周：腹部下坠感（胎儿入盆），假性宫缩（无规律）</ListItem>
                    <ListItem>• 37-40周：分泌物增多，可能见红（宫颈黏液栓脱落）</ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Heading size="md">关键产检与项目</Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>
                      <Text fontWeight="bold">30-32周：</Text>
                      <List ml={4} spacing={1}>
                        <ListItem>• 小排畸B超（评估胎儿生长、羊水、胎盘）</ListItem>
                        <ListItem>• 胎心监护（部分医院开始）</ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="bold">34周后：</Text>
                      <List ml={4} spacing={1}>
                        <ListItem>• 每周胎心监护（NST，监测胎儿安危）</ListItem>
                        <ListItem>• B超复查胎位（若臀位需考虑矫正）</ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight="bold">36周后：</Text>
                      <List ml={4} spacing={1}>
                        <ListItem>• GBS筛查（B族链球菌检测，防新生儿感染）</ListItem>
                      </List>
                    </ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Heading size="md">注意事项</Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>• 学习分娩征兆（规律宫缩、破水、见红）</ListItem>
                    <ListItem>• 准备待产包（证件、产妇用品、婴儿衣物）</ListItem>
                    <ListItem>• 避免长时间站立，左侧卧位改善胎盘供血</ListItem>
                  </List>
                </CardBody>
              </Card>
            </VStack>
          </TabPanel>

          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Card>
                <CardHeader>
                  <Heading size="md">分娩期注意事项</Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>• 足月标志：37周后随时可能分娩</ListItem>
                    <ListItem>
                      <Text fontWeight="bold">临产信号：</Text>
                      <List ml={4} spacing={1}>
                        <ListItem>• 规律宫缩（5-6分钟一次，持续30秒以上）</ListItem>
                        <ListItem>• 破水（立即平躺送医）</ListItem>
                        <ListItem>• 见红（少量血丝可观察，大量出血需急诊）</ListItem>
                      </List>
                    </ListItem>
                  </List>
                </CardBody>
              </Card>
            </VStack>
          </TabPanel>

          <TabPanel>
            <VStack spacing={4} align="stretch">
              <Card>
                <CardHeader>
                  <Heading size="md">通用建议</Heading>
                </CardHeader>
                <CardBody>
                  <List spacing={2}>
                    <ListItem>• 饮食：均衡摄入蛋白质、蔬果，避免生食、高糖高盐</ListItem>
                    <ListItem>• 禁忌：戒烟酒、慎用药物，避免接触有毒物质</ListItem>
                    <ListItem>• 心理：参加产前课程，与伴侣沟通分娩计划</ListItem>
                  </List>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Heading size="md">产检频率总结</Heading>
                </CardHeader>
                <CardBody>
                  <Table variant="simple" size="sm">
                    <Thead>
                      <Tr>
                        <Th>孕周</Th>
                        <Th>产检频率</Th>
                        <Th>重点项目</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>0-12周</Td>
                        <Td>1-2次</Td>
                        <Td>NT、早期唐筛、建卡</Td>
                      </Tr>
                      <Tr>
                        <Td>13-28周</Td>
                        <Td>每4周1次</Td>
                        <Td>大排畸、糖耐、血尿常规</Td>
                      </Tr>
                      <Tr>
                        <Td>29-36周</Td>
                        <Td>每2周1次</Td>
                        <Td>小排畸、胎心监护</Td>
                      </Tr>
                      <Tr>
                        <Td>37周后</Td>
                        <Td>每周1次</Td>
                        <Td>胎心监护、评估分娩方式</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </CardBody>
              </Card>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Guide;