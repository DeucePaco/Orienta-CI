import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { University, BookOpen, Shield, Award, TrendingUp, Users, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-education.jpg";
import { Footer } from "@/pages/Footer";
import { HowItWorks } from "@/components/HowItWorks";
import { RecentAdditions } from "@/components/RecentAdditions";
import { TrustSection } from "@/components/TrustSection";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [scope, setScope] = useState<"all" | "universities" | "programs" | "bourses">("all");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;

    const encoded = encodeURIComponent(q);
    switch (scope) {
      case "universities":
        navigate(`/universities?q=${encoded}`);
        break;
      case "programs":
        navigate(`/programs?q=${encoded}`);
        break;
      case "bourses":
        navigate(`/bourses?q=${encoded}`);
        break;
      default:
        navigate(`/search?q=${encoded}`);
        break;
    }
  };

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
            La plateforme d'orientation universitaire et professionnelle pour les étudiants ivoiriens
          </p>
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-6 md:mb-8">
            <div className="flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur px-2 py-2 shadow-sm">
              <div className="w-[170px] shrink-0">
                <Select value={scope} onValueChange={(v) => setScope(v as typeof scope)}>
                  <SelectTrigger className="h-10 bg-transparent border-0 focus:ring-0 focus:ring-offset-0 text-slate-900">
                    <SelectValue placeholder="Tout" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tout</SelectItem>
                    <SelectItem value="universities">Universités</SelectItem>
                    <SelectItem value="programs">Filières</SelectItem>
                    <SelectItem value="bourses">Bourses</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 h-12 text-base bg-transparent border-0 text-slate-900 placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                  data-testid="input-hero-search"
                />
              </div>

              <Button type="submit" className="h-10" data-testid="button-hero-search">
                Rechercher
              </Button>
            </div>
          </form>
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
      <HowItWorks />
      <RecentAdditions />
      <TrustSection />
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
