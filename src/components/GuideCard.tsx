import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight, type LucideIcon } from "lucide-react";


export interface Guide {
  id: number;
  title: string;
  description: string;
  readTime: string;
  icon: LucideIcon;
}

interface GuideCardProps {
  guide: Guide;
  onClick?: () => void;
}

export function GuideCard({ guide, onClick }: GuideCardProps) {
  const Icon = guide.icon;
  
  return (
    <Card className="hover-elevate cursor-pointer" onClick={onClick} data-testid={`card-guide-${guide.id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <Icon className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-serif font-semibold text-lg leading-tight">
              {guide.title}
            </h3>
            <span className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <Clock className="h-3.5 w-3.5" />
              {guide.readTime}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {guide.description}
        </p>
        <Button variant="ghost" size="sm" className="gap-1 -ml-2">
          Lire le guide
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
