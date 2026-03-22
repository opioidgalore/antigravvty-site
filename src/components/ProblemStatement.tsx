"use client";

import AnimationWrapper, {
  StaggerContainer,
  StaggerItem,
} from "./AnimationWrapper";

const stats = [
  { value: "68%", label: "zákazníkov neodpovedá na zmeškané hovory" },
  { value: "4 min", label: "priemerný čas odpovede firiem" },
  { value: "82%", label: "zákazníkov si vyberie prvú firmu, ktorá odpovie" },
];

export default function ProblemStatement() {
  return (
    <section
      id="problem"
      className="bg-charcoal py-15 md:py-30"
    >
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <AnimationWrapper variant="fadeIn">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-bold text-white mb-8">
            Prečo firmy prichádzajú o zákazníkov?
          </h2>
        </AnimationWrapper>

        <AnimationWrapper variant="slideUp" delay={0.15}>
          <p className="text-lg md:text-xl md:leading-8 text-gray-300 mb-16">
            Väčšina firiem príde o zákazníka nie preto, že majú zlú službu —
            ale preto, že nestihnú zdvihnúť telefón alebo nikto neodpovie na
            webe včas. Zatiaľ čo vy ste na zákazke, konkurencia odpovedá za
            2 minúty. A zákazník sa už neozvem späť.
          </p>
        </AnimationWrapper>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.value}>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-bold text-white mb-3">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-gray-400">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
