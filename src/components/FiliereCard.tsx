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

export function FiliereCard({ filiere, onFavoriteToggle }: FiliereCardProps) {
  const { icon: Icon, name, domain, level, duration, careers, demandLevel, isFavorite } = filiere;

  const demandLabel =
    demandLevel === "high" ? "Forte demande" : demandLevel === "medium" ? "Demande moyenne" : "Faible demande";

  const handleFavoriteToggle = (fav: boolean) => {
    onFavoriteToggle?.(filiere.id, fav);
  };

  return (
    <Card className="p-6 flex flex-col gap-4 hover-elevate">
      <div className="flex items-start justify-between gap-3">
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
        <Badge variant="secondary">Durée : {duration}</Badge>
        <Badge variant="outline">{demandLabel}</Badge>
      </div>

      <div className="pt-2 border-t mt-2">
        <p className="text-xs text-muted-foreground mb-1">Débouchés principaux :</p>
        <div className="flex flex-wrap gap-1 text-xs">
          {careers.map((career) => (
            <Badge key={career} variant="outline">
              {career}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
