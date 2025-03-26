interface CheckupItem {
  week: number;
  title: string;
  description: string;
  examinations: string[];
  notes?: string[];
}

const checkupSchedule: CheckupItem[] = [
  {
    week: 6,
    title: "首次产检",
    description: "确认怀孕并建立孕妇保健手册",
    examinations: [
      "血常规、尿常规检查",
      "血型、Rh因子检查",
      "血压、体重测量",
      "B超检查"
    ],
    notes: [
      "带上身份证和结婚证",
      "空腹进行抽血检查"
    ]
  },
  {
    week: 12,
    title: "第一孕期产检",
    description: "进行唐氏筛查和常规检查",
    examinations: [
      "NT检查（颈项透明层）",
      "唐氏筛查",
      "血压、体重测量",
      "B超检查"
    ]
  },
  {
    week: 16,
    title: "第二孕期早期产检",
    description: "进行唐氏筛查和常规检查",
    examinations: [
      "血常规、尿常规检查",
      "血压、体重测量",
      "B超检查"
    ]
  },
  {
    week: 20,
    title: "大排畸检查",
    description: "详细检查胎儿发育情况",
    examinations: [
      "系统B超检查",
      "血压、体重测量",
      "胎心监护"
    ],
    notes: [
      "检查前不要空腹",
      "穿宽松衣服便于检查"
    ]
  },
  {
    week: 24,
    title: "糖耐量检查",
    description: "检查是否有妊娠糖尿病",
    examinations: [
      "口服葡萄糖耐量试验",
      "血压、体重测量",
      "B超检查"
    ],
    notes: [
      "需要空腹",
      "检查时间约2-3小时"
    ]
  },
  {
    week: 28,
    title: "第二孕期后期产检",
    description: "检查胎儿生长情况",
    examinations: [
      "血常规、尿常规检查",
      "血压、体重测量",
      "B超检查",
      "胎心监护"
    ]
  },
  {
    week: 32,
    title: "第三孕期早期产检",
    description: "检查胎位和发育情况",
    examinations: [
      "血常规、尿常规检查",
      "血压、体重测量",
      "B超检查",
      "胎心监护"
    ]
  },
  {
    week: 36,
    title: "胎位检查",
    description: "确认胎位和预产期准备",
    examinations: [
      "血常规、尿常规检查",
      "血压、体重测量",
      "B超检查",
      "胎心监护",
      "内诊检查"
    ],
    notes: [
      "准备待产包",
      "了解生产征兆"
    ]
  },
  {
    week: 37,
    title: "每周产检",
    description: "密切监控待产状态",
    examinations: [
      "血压、体重测量",
      "B超检查",
      "胎心监护",
      "内诊检查"
    ],
    notes: [
      "注意胎动变化",
      "随时准备入院"
    ]
  }
];

export default checkupSchedule;