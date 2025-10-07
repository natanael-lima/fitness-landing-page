import React from 'react';
import { FaCheck, FaWhatsapp } from 'react-icons/fa';

interface MembershipPlan {
  name: string;
  price: number;
  frequency: string;
  features: string[];
  excluded: string[];
  popular: boolean;
  daysPerWeek: number;
}

const plans: MembershipPlan[] = [
    {
      name: "Iniciación",
      price: 29,
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
      price: 39,
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
      price: 59,
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
      price: 89,
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

export default function Pricing() {

   const sendWhatsAppMessage = (plan: MembershipPlan) => {
    const message = `¡Hola! Estoy interesado en el plan ${plan.name} (${plan.frequency}). ¿Podrían darme más información?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493884670317?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="w-full mx-auto min-h-screen flex flex-col md:flex-row items-center justify-between 
  text-white p-8 relative overflow-hidden rounded-3xl bg-zinc-900/40 backdrop-blur-md">
  
  <div className="w-full md:max-w-[80%] mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 text-lime-300">PLANES DE MEMBRESÍA</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Elige la frecuencia que se adapte a tu rutina fitness
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((plan, index) => (
        <div 
          key={index}
          className={`relative p-6 rounded-xl border transition-all duration-300 
          ${plan.popular 
            ? 'bg-lime-400/10 hover:bg-lime-400/15 border-lime-300/40 shadow-lg shadow-lime-300/10 scale-105' 
            : 'bg-lime-100/5 border-white/10 hover:border-lime-100/15 hover:bg-lime-100/10 '
          }`}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 bg-lime-400/80 text-black px-3 py-1 text-xs font-bold rounded-bl-xl">
              POPULAR
            </div>
          )}

          <div className="mb-4">
            <h3 className="text-2xl font-bold text-lime-200">{plan.name}</h3>
            <p className="text-gray-400">{plan.frequency}</p>
          </div>

          <div className="text-4xl font-bold mb-4 text-white">
            ${plan.price}
            <span className="text-lg text-gray-400">/mes</span>
          </div>

          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <FaCheck className="text-lime-300 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-200">{feature}</span>
              </li>
            ))}
            {plan.excluded.map((excluded, i) => (
              <li key={`excluded-${i}`} className="flex items-start text-gray-500">
                <FaCheck className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                <span className="line-through">{excluded}</span>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => sendWhatsAppMessage(plan)}
            className={`w-full py-3 rounded-lg font-medium transition flex items-center justify-center 
              ${plan.popular 
                ? 'bg-lime-400 text-black hover:bg-lime-300' 
                : 'bg-lime-300/20 text-lime-200 hover:bg-lime-300/30'
              }`}
          >
            <FaWhatsapp className="mr-2" /> Únete ahora
          </button>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center text-gray-400">
      <p>¿Necesitas un plan personalizado? <span className="text-lime-300 cursor-pointer hover:underline">Contáctanos directamente</span></p>
    </div>
  </div>
</section>

  );
}