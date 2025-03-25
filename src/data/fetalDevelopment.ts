// 胎儿发育信息数据
export interface WeeklyInfo {
  size: string;
  weight: string;
  development: string[];
  precautions: {
    diet: string[];
    exercise: string[];
    other: string[];
  };
  knowledge: {
    nutrition: string[];
    exercise: string[];
    lifestyle: string[];
    mentalHealth: string[];
  };
}

const fetalDevelopment: Record<number, WeeklyInfo> = {
  1: {
    size: '如针尖大小',
    weight: '不到1克',
    development: [
      '受精卵开始分裂',
      '形成胚泡',
      '开始着床'
    ],
    precautions: {
      diet: [
        '补充叶酸',
        '均衡饮食',
        '避免生食和未煮熟的食物'
      ],
      exercise: [
        '保持适度运动',
        '避免剧烈运动'
      ],
      other: [
        '戒烟戒酒',
        '避免接触有害物质',
        '保持良好心情'
      ]
    },
    knowledge: {
      nutrition: [
        '每天补充400微克叶酸',
        '增加富含蛋白质的食物摄入',
        '保证充足的维生素B族摄入'
      ],
      exercise: [
        '可以进行温和的散步',
        '避免高强度运动',
        '保持规律的作息时间'
      ],
      lifestyle: [
        '保持良好的作息习惯',
        '避免接触有害化学物质',
        '注意个人卫生'
      ],
      mentalHealth: [
        '保持积极乐观的心态',
        '与家人多交流孕期感受',
        '做好迎接新生命的心理准备'
      ]
    }
  },
  4: {
    size: '如米粒大小',
    weight: '不到1克',
    development: [
      '胚胎开始形成',
      '心脏开始跳动',
      '神经管开始发育'
    ],
    precautions: {
      diet: [
        '注意补充蛋白质',
        '多吃新鲜蔬果',
        '适量补充维生素'
      ],
      exercise: [
        '规律作息',
        '适度散步'
      ],
      other: [
        '定期产检',
        '避免辐射',
        '保持心情愉悦'
      ]
    },
    knowledge: {
      nutrition: [
        '增加优质蛋白质摄入',
        '补充叶酸和维生素B族',
        '注意补铁预防贫血'
      ],
      exercise: [
        '每天进行15-30分钟散步',
        '避免剧烈运动和跳跃',
        '保持规律的作息时间'
      ],
      lifestyle: [
        '避免接触放射性物质',
        '远离二手烟环境',
        '保持充足的睡眠'
      ],
      mentalHealth: [
        '学习放松和减压技巧',
        '与伴侣共同准备迎接宝宝',
        '保持乐观积极的心态'
      ]
    }
  },
  8: {
    size: '如葡萄大小',
    weight: '约4克',
    development: [
      '主要器官开始形成',
      '四肢开始发育',
      '面部特征开始显现'
    ],
    precautions: {
      diet: [
        '适量补充钙质',
        '注意补充铁质',
        '多吃富含纤维的食物'
      ],
      exercise: [
        '每天适度运动',
        '避免久坐'
      ],
      other: [
        '做好防护措施',
        '保持充足睡眠',
        '避免接触化学品'
      ]
    },
    knowledge: {
      nutrition: [
        '增加含铁丰富的食物摄入',
        '补充优质蛋白和钙质',
        '注意补充维生素D'
      ],
      exercise: [
        '每天进行30分钟适度运动',
        '可以尝试孕期瑜伽',
        '注意保持正确的运动姿势'
      ],
      lifestyle: [
        '保持规律的作息时间',
        '穿着舒适的孕妇装',
        '保持良好的个人卫生'
      ],
      mentalHealth: [
        '学会调节孕吐带来的不适',
        '与家人分享孕期的喜悦',
        '保持乐观积极的心态'
      ]
    }
  },
  12: {
    size: '如柠檬大小',
    weight: '约30克',
    development: [
      '胎儿的四肢已经发育完整',
      '开始出现指甲和胎毛',
      '可以做出吸吮动作'
    ],
    precautions: {
      diet: [
        '注意营养均衡',
        '适量补充DHA',
        '控制糖分摄入'
      ],
      exercise: [
        '做孕期瑜伽',
        '适度散步',
        '避免剧烈运动'
      ],
      other: [
        '做好孕期检查',
        '保持心情舒畅',
        '注意个人卫生'
      ]
    },
    knowledge: {
      nutrition: [
        '增加富含DHA的深海鱼类摄入',
        '补充含铁丰富的食物',
        '注意补充钙质和维生素D'
      ],
      exercise: [
        '每天进行30-45分钟适度运动',
        '可以尝试孕期瑜伽和游泳',
        '注意保持正确的运动姿势'
      ],
      lifestyle: [
        '保持规律的作息时间',
        '穿着舒适的孕妇装',
        '注意个人卫生和皮肤护理'
      ],
      mentalHealth: [
        '保持积极乐观的心态',
        '与家人分享孕期的变化',
        '参加孕妇课程和交流活动'
      ]
    }
  },
  16: {
    size: '如苹果大小',
    weight: '约150克',
    development: [
      '骨骼开始钙化',
      '可以自主活动',
      '开始产生胎动'
    ],
    precautions: {
      diet: [
        '适量补充钙质',
        '注意补充蛋白质',
        '控制体重增长'
      ],
      exercise: [
        '保持适度运动',
        '注意运动强度',
        '避免剧烈运动'
      ],
      other: [
        '关注胎动情况',
        '保持心情愉悦',
        '做好产检'
      ]
    }
  },
  20: {
    size: '如芒果大小',
    weight: '约300克',
    development: [
      '皮肤开始变厚',
      '指纹开始形成',
      '听力开始发育'
    ],
    precautions: {
      diet: [
        '注意补充铁质',
        '适量补充维生素',
        '控制盐分摄入'
      ],
      exercise: [
        '进行孕期运动',
        '注意活动量',
        '避免剧烈运动'
      ],
      other: [
        '注意胎教',
        '保持心情愉悦',
        '做好产检'
      ]
    }
  },
  24: {
    size: '如玉米大小',
    weight: '约600克',
    development: [
      '肺部开始发育成熟',
      '眼睛可以睁开',
      '大脑快速发育'
    ],
    precautions: {
      diet: [
        '注意补充DHA',
        '适量补充钙质',
        '控制体重增长'
      ],
      exercise: [
        '保持适度运动',
        '注意运动强度',
        '避免剧烈运动'
      ],
      other: [
        '关注胎动次数',
        '保持心情愉悦',
        '做好产检'
      ]
    }
  },
  28: {
    size: '如茄子大小',
    weight: '约1000克',
    development: [
      '开始储存脂肪',
      '可以对光线产生反应',
      '睡眠周期开始形成'
    ],
    precautions: {
      diet: [
        '控制糖分摄入',
        '注意补充蛋白质',
        '适量补充维生素'
      ],
      exercise: [
        '适度散步',
        '做孕期瑜伽',
        '避免剧烈运动'
      ],
      other: [
        '注意胎教',
        '保持心情愉悦',
        '做好产检'
      ]
    }
  },
  32: {
    size: '如椰子大小',
    weight: '约1800克',
    development: [
      '器官功能进一步成熟',
      '指甲已经长到指尖',
      '可以做出呼吸动作'
    ],
    precautions: {
      diet: [
        '注意补充铁质',
        '控制体重增长',
        '适量补充钙质'
      ],
      exercise: [
        '保持适度运动',
        '注意运动强度',
        '避免剧烈运动'
      ],
      other: [
        '关注胎动情况',
        '准备待产用品',
        '做好产检'
      ]
    }
  },
  36: {
    size: '如西瓜大小',
    weight: '约2500克',
    development: [
      '皮下脂肪增加',
      '免疫系统发育',
      '准备头朝下'
    ],
    precautions: {
      diet: [
        '控制饮食量',
        '注意补充蛋白质',
        '适量补充维生素'
      ],
      exercise: [
        '适度活动',
        '练习呼吸法',
        '避免剧烈运动'
      ],
      other: [
        '关注胎位',
        '准备分娩事项',
        '做好产检'
      ]
    }
  },
  40: {
    size: '如南瓜大小',
    weight: '约3400克',
    development: [
      '各器官发育完善',
      '准备分娩',
      '胎位已固定'
    ],
    precautions: {
      diet: [
        '清淡饮食',
        '少量多餐',
        '补充能量'
      ],
      exercise: [
        '适度活动',
        '练习分娩呼吸法',
        '避免剧烈运动'
      ],
      other: [
        '随时准备分娩',
        '保持心情平静',
        '注意胎动变化'
      ]
    }
  }
};

export default fetalDevelopment;