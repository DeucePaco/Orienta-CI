import { Card, CardContent } from "@/components/ui/card";
import { Search, FileCheck, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Recherche",
    description:
      "Explore notre base de données d'établissements, filières et bourses vérifiées.",
  },
  {
    number: "2",
    icon: FileCheck,
    title: "Compare",
    description:
      "Compare les options selon tes critères : coût, localisation, débouchés.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Postule",
    description:
      "Accède aux informations de contact et procédures d'inscription.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En trois étapes simples, trouve la formation qui te correspond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`step-${index}`}
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-lg">
                  {step.number}
                </span>
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}