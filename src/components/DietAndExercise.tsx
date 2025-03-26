import { Box, Card, CardBody, CardHeader, Heading, Text, VStack, UnorderedList, ListItem, Divider, Grid, GridItem, Icon } from '@chakra-ui/react';
import { GiWeightLiftingUp, GiMeal, GiRing } from 'react-icons/gi';

const DietAndExercise = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
      <GridItem>
        <Card h="100%">
          <CardHeader display="flex" alignItems="center" gap={2}>
            <Icon as={GiWeightLiftingUp} boxSize={6} color="primary.500" />
            <Heading size="md">孕期体重增长</Heading>
          </CardHeader>
          <CardBody>
            <Text>预计增长23-31斤，周每周增长 1斤</Text>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem colSpan={{ base: 1, md: 2 }}>
        <Card h="100%">
          <CardHeader display="flex" alignItems="center" gap={2}>
            <Icon as={GiMeal} boxSize={6} color="primary.500" />
            <Heading size="md">每日膳食结构及分量</Heading>
          </CardHeader>
          <CardBody>
            <Text mb={2}>以下食物均为生重：</Text>
          <UnorderedList spacing={2}>
            <ListItem>
              <Text fontWeight="bold">主食(7-9两左右)</Text>
              <Text>建议粗细粮混合搭配烹饪，如大米合小米、糙米、红豆绿豆、玉米、高梁米、薯类等，粗粮至少占1/5</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">蔬菜(6两-1斤)</Text>
              <Text>首选深色叶菜。如果选择根茎类蔬菜则需考虑适量减少主食</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">水果(4两-8两)</Text>
              <Text>1-2个，尽量选择多种水果，但是总量控制在4-8两</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">肉类(4两-半斤)</Text>
              <Text>鱼、禽、肉类总量约4两-半斤</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">蛋类(约一两)</Text>
              <Text>鸡蛋或者鸭蛋一个</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">奶类</Text>
              <Text>牛奶250-500ml或者酸奶200-300ml</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">豆制品类</Text>
              <Text>黄豆25克(半两)，如豆腐2两或纯豆浆400ml</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">油、盐</Text>
              <Text>油：25-30g，首选植物油，约2-3汤匙</Text>
              <Text>盐：6克，约盛满一啤酒瓶盖</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">坚果(20-30g)</Text>
              <Text>如核桃2-3个或花生米15-20粒等</Text>
            </ListItem>
          </UnorderedList>
          <Divider my={4} />
          <Text fontWeight="bold">注意事项：</Text>
          <UnorderedList>
            <ListItem>孕期尽量不选择即食食品</ListItem>
            <ListItem>超重、肥胖孕妇尽量不选择高糖分食物</ListItem>
            <ListItem>早餐后2小时加餐、午餐后2小时、睡觉前加餐，加餐所有食物全包括在此膳食单份额内</ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
      </GridItem>

      <GridItem colSpan={{ base: 1, md: 2, lg: 1 }}>
        <Card h="100%">
          <CardHeader display="flex" alignItems="center" gap={2}>
            <Icon as={GiRing} boxSize={6} color="primary.500" />
            <Heading size="md">孕期运动指南</Heading>
          </CardHeader>
          <CardBody>
            <Text mb={2}>从中孕期(14周后)开始：</Text>
          <UnorderedList spacing={2}>
            <ListItem>每3餐后休息30分钟，运动30分钟</ListItem>
            <ListItem>以舒缓运动适宜，如步行，能达到出毛毛汗状态为中等运动量，效果也达到最佳</ListItem>
            <ListItem>如从未进行规律运动者，请循序渐进，从每次5-10分钟逐渐过渡到每次30分钟，如有不适，请暂时停止</ListItem>
            <ListItem>母亲及胎儿安全放在第一</ListItem>
          </UnorderedList>
          <Divider my={4} />
          <Text fontWeight="bold">禁忌人群：</Text>
          <Text>如有双胎、出血、流产、早产等征象及有其他妊娠合并症如高血压、心脏病、前置胎盘等不适合运动</Text>
        </CardBody>
      </Card>
      </GridItem>
    </Grid>
  );
};

export default DietAndExercise;