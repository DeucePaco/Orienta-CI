import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { University, BookOpen, Shield, Award, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-education.jpg";
import { Footer } from "@/pages/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[420px] sm:h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 hero-landing-bg"
        />
        <div className="relative z-10 text-center px-4 text-primary-foreground">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Votre Avenir Commence Ici
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            La plateforme d'orientation scolaire et professionnelle pour les étudiants ivoiriens
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Link to="/universities">
              <Button size="lg" className="text-lg px-8">
                Explorer les Universités
              </Button>
            </Link>
            <Link to="/programs">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Découvrir les Filières
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Pourquoi choisir <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Orientation CI</span> ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Une plateforme complète pour vous guider dans vos choix d'orientation
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-2 hover:border-primary/50">
            <CardHeader>
              <University className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle>Universités Certifiées</CardTitle>
              <CardDescription>
                Accédez à des informations vérifiées sur toutes les universités reconnues en Côte d'Ivoire
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-2 hover:border-secondary/50">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle>Catalogue Complet</CardTitle>
              <CardDescription>
                Explorez plus de 200 filières avec des informations détaillées sur les programmes et débouchés
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-2 hover:border-accent/50">
            <CardHeader>
              <Shield className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle>Protection & Sécurité</CardTitle>
              <CardDescription>
                Évitez les fraudes avec nos conseils et notre système de vérification des établissements
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-2 hover:border-primary/50">
            <CardHeader>
              <Award className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle>Bourses & Aides</CardTitle>
              <CardDescription>
                Découvrez les opportunités de bourses nationales et les aides financières disponibles
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-2 hover:border-secondary/50">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle>Suivi Personnalisé</CardTitle>
              <CardDescription>
                Suivez votre progression et gérez vos candidatures depuis votre dashboard personnel
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-2 hover:border-accent/50">
            <CardHeader>
              <Users className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle>Communauté Active</CardTitle>
              <CardDescription>
                Échangez avec d'autres étudiants et bénéficiez de l'expérience de vos aînés
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <Card className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Prêt à commencer votre parcours ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Rejoignez des milliers d'étudiants qui ont trouvé leur voie grâce à Orientation CI
            </p>
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Créer mon compte gratuitement
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <Footer/>
    </div>
   
  );
};

export default Index;
