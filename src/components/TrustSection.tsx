import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Shield, CheckCircle2, Users, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aminata K.",
    role: "Étudiante en Médecine",
    content:
      "Grâce à Boy, j'ai trouvé la bourse qui m'a permis de poursuivre mes études en médecine. La plateforme est fiable et les informations sont vérifiées.",
    initials: "AK",
  },
  {
    name: "Kouadio M.",
    role: "Bachelier 2024",
    content:
      "J'étais perdu après le Bac, mais les guides d'orientation m'ont aidé à choisir la bonne filière. Merci Boy !",
    initials: "KM",
  },
  {
    name: "Fatou D.",
    role: "Parent d'élève",
    content:
      "Enfin une plateforme de confiance pour aider nos enfants. Les établissements sont vérifiés, ce qui évite les arnaques.",
    initials: "FD",
  },
];

const trustPoints = [
  { icon: Shield, label: "Établissements vérifiés" },
  { icon: CheckCircle2, label: "Informations actualisées" },
  { icon: Users, label: "Modération active" },
];

export function TrustSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvre les témoignages de ceux qui ont utilisé Boy pour leur
            orientation.
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <point.icon className="h-5 w-5 text-primary" />
              <span className="font-medium">{point.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} data-testid={`testimonial-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}