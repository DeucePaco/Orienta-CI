import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, University, Target, TrendingUp, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "./Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Bienvenue, Étudiant ! 👋
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Voici un aperçu de votre parcours d'orientation
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 mb-6">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <University className="h-5 w-5 text-primary" />
                Universités explorées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">5</div>
              <p className="text-sm text-muted-foreground mt-1">Sur 15 disponibles</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-secondary" />
                Filières étudiées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">8</div>
              <p className="text-sm text-muted-foreground mt-1">Dans 4 domaines différents</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                Profil complété
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">65%</div>
              <Progress value={65} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Progression de la recherche
              </CardTitle>
              <CardDescription>Vos étapes d'orientation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Exploration des domaines</span>
                  <Badge>Complété</Badge>
                </div>
                <Progress value={100} />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Sélection des universités</span>
                  <Badge variant="secondary">En cours</Badge>
                </div>
                <Progress value={60} />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Dossiers de candidature</span>
                  <Badge variant="outline">À venir</Badge>
                </div>
                <Progress value={0} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                Bourses disponibles
              </CardTitle>
              <CardDescription>Opportunités de financement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:border-primary transition-colors">
                  <h4 className="font-semibold mb-1">Bourse d'Excellence CAMES</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Pour étudiants avec mention Très Bien
                  </p>
                  <Badge className="bg-secondary">Date limite : 15 Sept</Badge>
                </div>
                
                <div className="p-4 border rounded-lg hover:border-primary transition-colors">
                  <h4 className="font-semibold mb-1">Bourse du Gouvernement</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Aide financière pour étudiants méritants
                  </p>
                  <Badge className="bg-secondary">Date limite : 30 Sept</Badge>
                </div>

                <Button className="w-full">Voir toutes les bourses</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">🎓 Conseil du jour</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg">
              N'hésitez pas à visiter les journées portes ouvertes des universités pour mieux comprendre 
              les filières et rencontrer les enseignants. C'est un excellent moyen de faire un choix éclairé !
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer/>
    </div>
  );
};

export default Dashboard;
