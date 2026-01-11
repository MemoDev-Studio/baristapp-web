import { useState } from "react";
import "./Pricing.css";

const plans = [
  {
    id: "emprendedor",
    badge: "Emprendedores",
    name: "Plan Emprendedor",
    price: 5,
    subtitle: "Pupuserías y cafeterías pequeñas",
    features: [
      "Toma de pedidos básica",
      "Ideal para negocios de despacho rápido",
      "Soporte estándar",
    ],
  },
  {
    id: "basico",
    badge: "Básico",
    name: "Plan Básico",
    price: 19,
    subtitle: "Pequeños negocios que empiezan",
    features: ["Gestión de mesas", "Lista de espera", "Toma de pedidos avanzada"],
  },
  {
    id: "pro",
    badge: "Popular",
    name: "Plan Pro",
    price: 39,
    subtitle: "Restaurantes con más flujo",
    features: [
      "Todo lo del plan Básico",
      "Pantalla de cocina (KDS)",
      "Reportes de ventas detallados",
      "Soporte prioritario",
    ],
  },
  {
    id: "ia",
    badge: "Plan con IA",
    name: "Plan IA",
    price: 59,
    subtitle: "Negocios que buscan optimización total",
    features: [
      "Todo lo del plan Pro",
      "Análisis con IA",
      "Predicciones de demanda",
      "Alertas inteligentes (stock y tiempos)",
    ],
  },
];

const Pricing = () => {
  const [selectedPlanId, setSelectedPlanId] = useState("pro"); // por defecto Pro

  return (
    <section className="pricing" id="planes">
      <h2 className="pricing-title">Planes para Cada Negocio</h2>
      <p className="pricing-subtitle">
        Elige el plan perfecto para tu cafetería o restaurante
      </p>
      <span className="pricing-accent" />

      <div className="pricing-grid">
        {plans.map((plan) => {
          const isSelected = plan.id === selectedPlanId;

          return (
            <article
              key={plan.id}
              className={`plan-card ${isSelected ? "is-selected" : ""}`}
              onClick={() => setSelectedPlanId(plan.id)}
              role="button"
              tabIndex={0}
            >
              {isSelected && (
                <div className={`plan-badge ${plan.id === "pro" ? "is-popular" : ""}`}>
                  {plan.badge}
                </div>
              )}

              <h3 className="plan-name">{plan.name}</h3>

              <div className="plan-price">
                <span className="plan-price-value">${plan.price}</span>
                <span className="plan-price-unit">/ mes</span>
              </div>

              <p className="plan-subtitle">{plan.subtitle}</p>

              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="check">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`plan-cta ${isSelected ? "is-primary" : ""}`}
                onClick={(e) => {
                  e.stopPropagation(); // evita doble click del article
                  setSelectedPlanId(plan.id);
                }}
              >
                Comenzar Ahora
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
