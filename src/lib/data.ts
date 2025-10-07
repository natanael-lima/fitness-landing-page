export const fitnessClasses = [
  {
    id: 1,
    title: "HIIT Training",
    description: "High-intensity interval training to boost metabolism, burn fat and improve endurance.",
    image: "https://www.guardian.in/cdn/shop/articles/best-hiit-workouts.jpg?v=1705472719",
    duration: "45 min",
    capacity: "12 people",
    instructor: "Sarah Johnson",
    schedule: [
      { day: "Monday", time: "07:00 - 07:45", level: "Advanced" },
      { day: "Wednesday", time: "18:00 - 18:45", level: "All Levels" },
      { day: "Friday", time: "12:00 - 12:45", level: "Beginner Friendly" },
    ],
    focus: ["Cardio", "Endurance", "Fat Burn"],
  },
  {
    id: 2,
    title: "Yoga Flow",
    description: "Gentle flowing movements to improve flexibility, balance, and mindfulness.",
    image: "https://relajemos.com/wp-content/uploads/2019/02/yoga-flow-principal.jpg",
    duration: "60 min",
    capacity: "15 people",
    instructor: "Maria Garcia",
    schedule: [
      { day: "Tuesday", time: "08:00 - 09:00", level: "Beginner" },
      { day: "Thursday", time: "18:30 - 19:30", level: "Intermediate" },
      { day: "Saturday", time: "09:00 - 10:00", level: "All Levels" },
    ],
    focus: ["Flexibility", "Mindfulness", "Stress Relief"],
  },
  {
    id: 3,
    title: "Strength Training",
    description: "Progressive resistance workouts focused on muscle building and proper technique.",
    image: "https://res.cloudinary.com/hydrow/image/upload/f_auto/w_3840/q_80/v1741799501/Blog/the-15-best-strength-training-exercises.jpg",
    duration: "50 min",
    capacity: "8 people",
    instructor: "Mike Thompson",
    schedule: [
      { day: "Monday", time: "18:00 - 18:50", level: "Intermediate" },
      { day: "Thursday", time: "19:00 - 19:50", level: "Advanced" },
    ],
    focus: ["Muscle Gain", "Power", "Form"],
  },
  {
    id: 4,
    title: "Pilates Core",
    description: "Targeted exercises to strengthen your core, enhance posture, and improve stability.",
    image: "https://activefitnessmedowie.com.au/wp-content/uploads/2025/02/Woman-doing-the-side-plank-exercise-on-mat-in-gym.jpg",
    duration: "45 min",
    capacity: "10 people",
    instructor: "Emma Wilson",
    schedule: [
      { day: "Tuesday", time: "17:00 - 17:45", level: "All Levels" },
      { day: "Friday", time: "09:00 - 09:45", level: "Beginner" },
    ],
    focus: ["Core Strength", "Flexibility", "Balance"],
  },
  {
    id: 5,
    title: "Cardio Dance",
    description: "Fun and energetic dance workout that combines cardio with rhythm and music.",
    image: "https://www.gimnasiosigueiro.com/sites/default/files/field/image/11244711_10206943814098942_1801164422117604620_n.jpg",
    duration: "55 min",
    capacity: "20 people",
    instructor: "Lisa Rodriguez",
    schedule: [
      { day: "Wednesday", time: "19:00 - 19:55", level: "All Levels" },
      { day: "Saturday", time: "11:00 - 11:55", level: "Beginner" },
    ],
    focus: ["Cardio", "Coordination", "Fun"],
  },
  {
    id: 6,
    title: "CrossFit",
    description: "Functional fitness training designed to build strength, speed, and endurance.",
    image: "https://www.hola.com/horizon/landscape/7793f9ed3467-pareja-cuerdas-t.jpg",
    duration: "60 min",
    capacity: "12 people",
    instructor: "David Chen",
    schedule: [
      { day: "Monday", time: "19:00 - 20:00", level: "Advanced" },
      { day: "Friday", time: "17:00 - 18:00", level: "All Levels" },
    ],
    focus: ["Strength", "Cardio", "Endurance"],
  },
  {
    id: 7,
    title: "Spin Class",
    description: "High-energy indoor cycling class with rhythm-based coaching and motivation.",
    image: "https://fuelfitnessclubs.com/wp-content/uploads/2020/03/5-Great-Reasons-to-Try-a-Spin-Class.jpg",
    duration: "45 min",
    capacity: "16 people",
    instructor: "Alex Turner",
    schedule: [
      { day: "Tuesday", time: "18:00 - 18:45", level: "All Levels" },
      { day: "Thursday", time: "07:30 - 08:15", level: "Intermediate" },
    ],
    focus: ["Cardio", "Leg Strength", "Motivation"],
  },
  {
    id: 8,
    title: "Aqua Aerobics",
    description: "Low-impact full-body workout in the pool, perfect for all ages and levels.",
    image: "https://plungesandiego.com/wp-content/uploads/2021/04/How-do-I-get-the-most-out-of-my-water-aerobics.jpg",
    duration: "40 min",
    capacity: "18 people",
    instructor: "Rachel Green",
    schedule: [
      { day: "Wednesday", time: "10:00 - 10:40", level: "Beginner" },
      { day: "Friday", time: "16:00 - 16:40", level: "All Levels" },
    ],
    focus: ["Low Impact", "Mobility", "Recovery"],
  },
  {
    id: 9,
    title: "Meditation & Mindfulness",
    description: "Guided sessions focused on breathing, awareness, and relaxation.",
    image: "https://t3.ftcdn.net/jpg/06/03/27/00/360_F_603270051_cuxIcMvh6zuOK44PT4pR54lz5rQP8nE8.jpg",
    duration: "30 min",
    capacity: "25 people",
    instructor: "Zen Master Kim",
    schedule: [
      { day: "Tuesday", time: "20:00 - 20:30", level: "All Levels" },
      { day: "Thursday", time: "08:00 - 08:30", level: "Beginner" },
    ],
    focus: ["Mental Health", "Relaxation", "Focus"],
  },
];

interface MembershipPlan {
  name: string;
  price: number;
  frequency: string;
  features: string[];
  excluded: string[];
  popular: boolean;
  daysPerWeek: number;
}
export const plans: MembershipPlan[] = [
    {
      name: "Iniciación",
      price: 15000,
      frequency: "2 días/semana",
      features: [
        "Acceso a área de pesas",
        "2 clases grupales/semana",
        "Sin asesoría nutricional",
        "Horario limitado"
      ],
      excluded: ["Asesoría nutricional", "Clases premium"],
      popular: false,
      daysPerWeek: 2
    },
    {
      name: "Intermedio",
      price: 20000,
      frequency: "3 días/semana",
      features: [
        "Acceso a todas las áreas",
        "3 clases grupales/semana",
        "1 consulta nutricional/mes",
        "Acceso a locker"
      ],
      excluded: ["Clases premium"],
      popular: false,
      daysPerWeek: 3
    },
    {
      name: "Avanzado",
      price: 25000,
      frequency: "5 días/semana",
      features: [
        "Acceso ilimitado",
        "Clases grupales ilimitadas",
        "2 consultas nutricionales/mes",
        "Acceso a piscina"
      ],
      excluded: ["Entrenador personal"],
      popular: true,
      daysPerWeek: 5
    },
    {
      name: "Premium",
      price: 30000,
      frequency: "Ilimitado",
      features: [
        "Acceso 24/7",
        "Todas las clases grupales",
        "Nutricionista personal",
        "Entrenador personal 2x/semana",
        "Acceso a área VIP"
      ],
      excluded: [],
      popular: false,
      daysPerWeek: 7
    }
  ];

