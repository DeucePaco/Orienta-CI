import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, University, BookOpen, Trash2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "./Footer";

const Favorites = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Mes Favoris
          </h1>
          <p className="text-muted-foreground text-lg">
            Retrouvez toutes vos universités et filières sauvegardées
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <University className="h-5 w-5 text-primary" />
                  <CardTitle>Universités favorites</CardTitle>
                </div>
                <Heart className="h-5 w-5 text-destructive fill-destructive" />
              </div>
              <CardDescription>3 universités sauvegardées</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["Université Félix Houphouët-Boigny", "INP-HB", "Université Alassane Ouattara"].map((uni) => (
                  <div key={uni} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium">{uni}</span>
                    <Button variant="ghost" size="icon" className="hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-secondary" />
                  <CardTitle>Filières favorites</CardTitle>
                </div>
                <Heart className="h-5 w-5 text-destructive fill-destructive" />
              </div>
              <CardDescription>2 filières sauvegardées</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["Informatique et Génie Logiciel", "Gestion d'Entreprise"].map((program) => (
                  <div key={program} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium">{program}</span>
                    <Button variant="ghost" size="icon" className="hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <CardTitle>Besoin d'aide pour faire votre choix ?</CardTitle>
            <CardDescription>
              Consultez notre guide d'orientation pour vous aider à choisir la bonne filière
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Consulter le guide</Button>
          </CardContent>
        </Card>
      </main>
      <Footer/>
    </div>
  );
};

export default Favorites;
