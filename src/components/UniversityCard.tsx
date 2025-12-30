import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle2, GraduationCap, ChevronRight } from "lucide-react";
import { FavoriteButton } from "@/components/FavoriteButton";

export interface University {
  id: number;
  name: string;
  city: string;
  type: "public" | "private";
  programCount: number;
  isVerified: boolean;
  description: string;
  imageUrl?: string;
  domain: string[];
  studentCount: number;
  isFavorite: boolean;
}

interface UniversityCardProps {
  university: University;
  onClick?: () => void;
  onFavoriteToggle?: (id: number, isFavorite: boolean) => void;
}

export function UniversityCard({ university, onClick, onFavoriteToggle }: UniversityCardProps) {
  const handleFavoriteToggle = (fav: boolean) => {
    onFavoriteToggle?.(university.id, fav);
  };

  return (
    <Card className="overflow-hidden hover-elevate cursor-pointer" onClick={onClick} data-testid={`card-univerty-${university.id}`}>
      <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
        {university.imageUrl ? (
          <img 
            src={university.imageUrl} 
            alt={university.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <GraduationCap className="h-16 w-16 text-primary/40" />
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-serif font-semibold text-lg leading-tight line-clamp-2">
              {university.name}
            </h3>
            {university.isVerified && (
              <CheckCircle2 className="h-5 w-5 text-accent-foreground shrink-0" />
            )}
          </div>
          <FavoriteButton isFavorite={university.isFavorite} onToggle={handleFavoriteToggle} />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant={university.type === "public" ? "default" : "secondary"}>
            {university.type === "public" ? "Public" : "Privé"}
          </Badge>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {university.city}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {university.description}
        </p>
      </CardContent>
      <CardFooter className="pt-0 flex items-center justify-between gap-2">
        <span className="text-sm text-muted-foreground">
          {university.programCount} filières
        </span>
        <Button variant="ghost" size="sm" className="gap-1">
          En savoir plus
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
