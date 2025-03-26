interface WeeklyChange {
  bodyChanges: string[];
  discomfort: string[];
  precautions: string[];
}

type WeeklyChanges = {
  [key: number]: WeeklyChange;
};

const weeklyChanges: WeeklyChanges = {
  4: {
    bodyChanges: [
      '乳房可能开始变大和变得敏感',
      '可能出现轻微疲劳感'
    ],
    discomfort: [
      '早孕反应可能开始出现',
      '轻微恶心感'
    ],
    precautions: [
      '保持充足休息',
      '避免剧烈运动'
    ]
  },
  8: {
    bodyChanges: [
      '子宫开始增大',
      '体重可能略有增加',
      '乳晕可能变深'
    ],
    discomfort: [
      '孕吐症状可能加重',
      '频繁排尿',
      '疲劳感增加'
    ],
    precautions: [
      '注意补充叶酸',
      '保持适度运动',
      '避免刺激性食物'
    ]
  },
  12: {
    bodyChanges: [
      '腹部开始隆起',
      '皮肤可能变得敏感',
      '胃口可能改善'
    ],
    discomfort: [
      '孕吐症状可能减轻',
      '便秘',
      '头晕'
    ],
    precautions: [
      '注意饮食均衡',
      '保持心情愉悦',
      '适当补充钙质'
    ]
  },
  16: {
    bodyChanges: [
      '腹部明显隆起',
      '可能感受到胎动',
      '体重持续增加'
    ],
    discomfort: [
      '腰酸背痛',
      '腿部抽筋',
      '情绪波动'
    ],
    precautions: [
      '保持正确姿势',
      '适当运动',
      '注意补充铁质'
    ]
  },
  20: {
    bodyChanges: [
      '胎动明显',
      '腹部继续增大',
      '皮肤可能出现妊娠纹'
    ],
    discomfort: [
      '呼吸略感困难',
      '腰部不适',
      '睡眠质量下降'
    ],
    precautions: [
      '使用妊娠纹预防霜',
      '保持规律作息',
      '避免久站'
    ]
  },
  24: {
    bodyChanges: [
      '体重稳定增加',
      '乳房继续增大',
      '脸部可能浮肿'
    ],
    discomfort: [
      '手脚浮肿',
      '背痛加重',
      '胃灼热'
    ],
    precautions: [
      '控制体重增长速度',
      '少食多餐',
      '适当运动'
    ]
  },
  28: {
    bodyChanges: [
      '腹部明显隆起',
      '胎动更加频繁',
      '脐部凸出'
    ],
    discomfort: [
      '呼吸困难加重',
      '睡眠不适',
      '腿部抽筋'
    ],
    precautions: [
      '注意休息',
      '避免剧烈运动',
      '保持心情愉悦'
    ]
  },
  32: {
    bodyChanges: [
      '腹部继续增大',
      '胎儿开始固定位置',
      '乳房可能出现初乳'
    ],
    discomfort: [
      '腰痛加重',
      '呼吸短促',
      '失眠'
    ],
    precautions: [
      '准备待产用品',
      '保持适度运动',
      '注意营养均衡'
    ]
  },
  36: {
    bodyChanges: [
      '胎儿逐渐下降',
      '呼吸可能改善',
      '体重增长放缓'
    ],
    discomfort: [
      '盆腔压力增加',
      '频繁排尿',
      '假性宫缩'
    ],
    precautions: [
      '注意观察宫缩',
      '准备待产事宜',
      '保持适度活动'
    ]
  },
  40: {
    bodyChanges: [
      '胎儿完全下降',
      '宫口可能开始扩张',
      '见红征兆'
    ],
    discomfort: [
      '宫缩增多',
      '睡眠困难',
      '情绪紧张'
    ],
    precautions: [
      '随时准备入院',
      '保持心情平静',
      '注意胎动变化'
    ]
  }
};

export default weeklyChanges;