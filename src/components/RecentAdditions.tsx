import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Sparkles, GraduationCap, Award } from "lucide-react";
import { Link } from "react-router-dom";


const recentItems = [
  {
    type: "institution",
    title: "IIT - Institut Ivoirien de Technologie de Grand-Bassam",
    subtitle: "Grand-Bassam",
    badge: "Nouveau",
  },
  {
    type: "institution",
    title: "IIPEA - Institut International Polytechnique des Élites d'Abidjan (IIPEA)",
    subtitle: "Abidjan",
    badge: "Nouveau",
  },
  {
    type: "institution",
    title: "Université de Man",
    subtitle: "Man",
    badge: "Nouveau",
  }
];

export function RecentAdditions() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="font-serif font-bold text-2xl">Ajouts récents</h2>
          </div>
          <Link to="/universities">
            <Button variant="ghost" className="gap-1">
              
              Voir tout
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentItems.map((item, index) => (
            <Card
              key={index}
              className="hover-elevate cursor-pointer"
              data-testid={`recent-item-${index}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    {item.type === "institution" ? (
                      <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Award className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <Badge
                    variant={
                      item.badge === "Urgent" ? "destructive" : "secondary"
                    }
                    className="text-xs"
                  >
                    {item.badge}
                  </Badge>
                </div>
                <h3 className="font-medium text-sm line-clamp-2 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}