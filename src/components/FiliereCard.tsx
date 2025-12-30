import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FavoriteButton } from "@/components/FavoriteButton";

export interface Filiere {
  id: string;
  name: string;
  domain: string;
  level: string;
  duration: string;
  careers: string[];
  demandLevel: "high" | "medium" | "low";
  icon: LucideIcon;
  isFavorite: boolean;
}

interface FiliereCardProps {
  filiere: Filiere;
  onFavoriteToggle?: (id: string, isFavorite: boolean) => void;
}

const getDomainBorderClasses = (domain: string) => {
  if (domain.includes("Technologie") || domain.includes("Informatique") || domain.includes("Data")) {
    // Tech / Informatique
    return "border-cyan-400/60 hover:border-cyan-300";
  }
  if (domain.includes("Santé")) {
    return "border-rose-400/60 hover:border-rose-300";
  }
  if (domain.includes("Droit")) {
    return "border-violet-400/60 hover:border-violet-300";
  }
  if (domain.includes("Commerce") || domain.includes("Gestion") || domain.includes("Économie")) {
    return "border-amber-400/60 hover:border-amber-300";
  }
  if (domain.includes("Ingénierie")) {
    return "border-emerald-400/60 hover:border-emerald-300";
  }
  if (domain.includes("Arts")) {
    return "border-pink-400/60 hover:border-pink-300";
  }
  if (domain.includes("Sciences")) {
    return "border-sky-400/60 hover:border-sky-300";
  }

  // Couleur par défaut
  return "border-primary/40 hover:border-primary";
};


export function FiliereCard({ filiere, onFavoriteToggle }: FiliereCardProps) {
  const { icon: Icon, name, domain, level, duration, careers, demandLevel, isFavorite } = filiere;

  const demandLabel =
    demandLevel === "high" ? "Forte demande" : demandLevel === "medium" ? "Demande moyenne" : "Faible demande";
    const borderClasses = getDomainBorderClasses(domain);

  const handleFavoriteToggle = (fav: boolean) => {
    onFavoriteToggle?.(filiere.id, fav);
  };

  return (
    <Card className={`group p-6 flex flex-col gap-4 hover-elevate transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 border-2 border-transparent ${borderClasses}`}>
      <div className="flex items-start justify-between gap-3 transition-all duration-300 group-hover:translate-y-[-2px]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg leading-tight">{name}</h3>
            <p className="text-sm text-muted-foreground">
              {domain} • {level}
            </p>
          </div>
        </div>
        <FavoriteButton isFavorite={isFavorite} onToggle={handleFavoriteToggle} />
      </div>

      <div className="flex flex-wrap gap-2 text-xs">
        <Badge className="transition-transform duration-200 group-hover:scale-105" variant="secondary">
          Durée : {duration}
        </Badge>
        <Badge className="transition-transform duration-200 group-hover:scale-105" variant="outline">
          {demandLabel}
        </Badge>
      </div>

      <div className="pt-2 border-t mt-2">
        <p className="text-xs text-muted-foreground mb-1">Débouchés principaux :</p>
        <div className="flex flex-wrap gap-1 text-xs">
          {careers.map((career) => (
            <Badge
              key={career}
              variant="outline"
              className="transition-all duration-200 hover:bg-primary/10 hover:border-primary/50"
            >
              {career}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
