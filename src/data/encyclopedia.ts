// 孕期百科数据
export interface EncyclopediaCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface EncyclopediaItem {
  id: string;
  categoryId: string;
  title: string;
  content: string;
  tags: string[];
}

export const categories: EncyclopediaCategory[] = [
  {
    id: 'nutrition',
    title: '营养饮食',
    icon: 'nutrition',
    description: '孕期营养需求与饮食指导'
  },
  {
    id: 'exercise',
    title: '运动健身',
    icon: 'exercise', 
    description: '孕期运动方法与注意事项'
  },
  {
    id: 'health',
    title: '健康护理',
    icon: 'health',
    description: '孕期常见症状与保健知识'
  },
  {
    id: 'psychology',
    title: '心理关怀',
    icon: 'psychology',
    description: '孕期心理调适与情绪管理'
  },
  {
    id: 'preparation',
    title: '生产准备',
    icon: 'preparation',
    description: '分娩知识与待产准备'
  }
];

export const encyclopediaItems: EncyclopediaItem[] = [
  {
    id: '1',
    categoryId: 'nutrition',
    title: '孕早期营养补充',
    content: '孕早期是胎儿器官形成的关键时期，需要特别注意以下营养素的补充：\n\n1. 叶酸\n- 每天需要400微克\n- 可预防胎儿神经管畸形\n- 食物来源：深绿色蔬菜、豆类、坚果\n\n2. 铁质\n- 预防贫血\n- 食物来源：瘦肉、动物肝脏、豆类\n\n3. 蛋白质\n- 胎儿生长发育的基础\n- 食物来源：鱼、肉、蛋、奶制品\n\n注意事项：\n- 少量多餐\n- 避免生食和未煮熟的食物\n- 适量补充维生素',
    tags: ['营养', '叶酸', '铁质', '蛋白质']
  },
  {
    id: '2',
    categoryId: 'exercise',
    title: '孕期瑜伽基础',
    content: '孕期瑜伽可以帮助缓解不适，增强体质，为分娩做准备。\n\n基础动作：\n1. 猫牛式\n- 跪趴位，交替拱背和塌腰\n- 缓解背部疼痛\n\n2. 蹲姿\n- 双脚分开与肩同宽\n- 加强盆底肌群力量\n\n3. 侧卧伸展\n- 改善血液循环\n- 缓解腿部水肿\n\n注意事项：\n- 动作要缓慢轻柔\n- 避免扭转和压迫腹部\n- 感觉不适立即停止',
    tags: ['运动', '瑜伽', '体位法']
  },
  {
    id: '3',
    categoryId: 'health',
    title: '孕期常见不适及应对',
    content: '孕期可能出现的不适症状及缓解方法：\n\n1. 晨吐\n- 起床前食用干粮\n- 少量多餐\n- 避免刺激性气味\n\n2. 腰背痛\n- 保持正确姿势\n- 适当运动\n- 穿着合适的支撑型内衣\n\n3. 失眠\n- 规律作息\n- 睡前泡脚\n- 保持房间通风\n\n4. 水肿\n- 适当运动\n- 少食多餐\n- 抬高下肢休息',
    tags: ['不适', '晨吐', '腰痛', '失眠']
  },
  {
    id: '4',
    categoryId: 'psychology',
    title: '孕期情绪管理',
    content: '孕期情绪波动是正常现象，以下方法可以帮助调节心理状态：\n\n1. 压力管理\n- 识别压力源\n- 学习放松技巧\n- 与家人沟通交流\n\n2. 焦虑调节\n- 保持规律作息\n- 适当运动\n- 听音乐放松\n\n3. 心理准备\n- 了解分娩过程\n- 参加孕妇课程\n- 做好心理建设\n\n建议：\n- 保持积极心态\n- 寻求专业帮助\n- 参加孕妇互助群',
    tags: ['心理', '情绪', '压力', '焦虑']
  },
  {
    id: '5',
    categoryId: 'preparation',
    title: '待产包准备清单',
    content: '建议在预产期前1-2个月准备待产包，包含以下物品：\n\n孕妇用品：\n1. 证件类\n- 身份证\n- 孕妇保健手册\n- 住院所需证明\n\n2. 生活用品\n- 睡衣2-3套\n- 拖鞋\n- 毛巾、牙具\n- 产妇卫生用品\n\n3. 婴儿用品\n- 尿布\n- 衣服和帽子\n- 毛巾和浴巾\n- 奶瓶和奶粉\n\n注意事项：\n- 所有物品需提前清洗消毒\n- 准备适量现金和零钱\n- 重要物品准备清单',
    tags: ['待产', '清单', '必需品']
  }
];