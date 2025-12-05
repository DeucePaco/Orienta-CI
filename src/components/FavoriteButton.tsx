import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FavoriteButtonProps {
  isFavorite?: boolean;
  onToggle?: (isFavorite: boolean) => void;
  size?: "default" | "sm" | "lg" | "icon";
}

export function FavoriteButton({ isFavorite: initialFavorite = false, onToggle, size = "icon" }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = !isFavorite;
    setIsFavorite(newState);
    onToggle?.(newState);
    console.log("Favorite toggled:", newState);
  };

  return (
    <Button
      size={size}
      variant="ghost"
      onClick={handleClick}
      className={isFavorite ? "text-red-500 hover:text-red-600" : "text-muted-foreground"}
      data-testid="button-favorite"
    >
      <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
    </Button>
  );
}
