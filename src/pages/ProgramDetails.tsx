import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  GraduationCap,
  Target,
  Lightbulb,
  Briefcase,
  DollarSign,
  TrendingUp,
  ArrowLeft,
  Heart,
  CheckCircle,
  Building,
  FileText
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "./Footer";
import { getProgramById, getUniversitiesByProgram } from "@/data/educationData";

const ProgramDetail = () => {
  const { id } = useParams<{ id: string }>();
  const program = getProgramById(id || "");
  const programUniversities = getUniversitiesByProgram(id || "");

  if (!program) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Filière non trouvée</h1>
            <Link to="/programs">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux filières
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const getDemandColor = (level: string) => {
    switch (level) {
      case "Élevée": return "bg-green-500/20 text-green-700 dark:text-green-300";
      case "Moyenne": return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300";
      case "Faible": return "bg-red-500/20 text-red-700 dark:text-red-300";
      default: return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/programs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary mb-6 transition duration-200 hover:-translate-x-1 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux filières
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <Badge variant="secondary" className="text-sm">
                  <BookOpen className="mr-1 h-3 w-3" />
                  {program.domain}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <GraduationCap className="mr-1 h-3 w-3" />
                  {program.level}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Clock className="mr-1 h-3 w-3" />
                  {program.duration}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{program.name}</h1>
              <p className="text-lg text-muted-foreground">{program.description}</p>
            </div>
            <Button variant="outline" className="self-start inline-flex items-center gap-2 transition duration-200 hover:scale-[1.03] active:scale-[0.97] hover:border-rose-400 hover:text-rose-400">
              <Heart className="mr-1 h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              Ajouter aux favoris
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Objectives */}
            <Card className="animate-fade-in-up"
                  style={{ animationDelay: "80ms", animationFillMode: "both" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Objectifs de la Formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {program.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Universities offering this program */}
            <Card className="animate-fade-in-up"
                  style={{ animationDelay: "400ms", animationFillMode: "both" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-secondary" />
                  Universités Proposant cette Formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {programUniversities.map((university) => (
                    <Link key={university.id} to={`/universities/${university.id}`}>
                      <div className="p-4 rounded-lg border border-slate-700 hover:border-secondary/60 hover:bg-secondary/5 transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-md">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold group-hover:text-secondary transition-colors">
                              {university.name}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {university.location}
                            </p>
                            <div className="flex gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">{university.type}</Badge>
                            </div>
                          </div>
                          <ArrowLeft className="h-4 w-4 rotate-180 text-muted-foreground group-hover:text-secondary transition-colors" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="animate-fade-in-up"
                  style={{ animationDelay: "160ms", animationFillMode: "both" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-secondary" />
                  Compétences Acquises
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {program.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card className="animate-fade-in-up"
                  style={{ animationDelay: "240ms", animationFillMode: "both" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  Programme d'Études
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {program.curriculum.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Careers / Débouchés */}
            <Card className="animate-fade-in-up"
                  style={{ animationDelay: "320ms", animationFillMode: "both" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Débouchés Professionnels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {program.careers.map((career, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-card">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-lg">{career.title}</h4>
                        <Badge className={getDemandColor(career.demandLevel)}>
                          <TrendingUp className="mr-1 h-3 w-3" />
                          Demande {career.demandLevel}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{career.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-600 dark:text-green-400">
                          {career.salaryRange}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>  
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="animate-fade-in-up"
                  style={{ animationDelay: "480ms", animationFillMode: "both" }}>
              <CardHeader>
                <CardTitle>Informations Clés</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5">
                  <GraduationCap className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Niveau</p>
                    <p className="font-semibold">{program.level}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Durée</p>
                    <p className="font-semibold">{program.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5">
                  <Building className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Universités</p>
                    <p className="font-semibold">{programUniversities.length} établissements</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/5">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Débouchés</p>
                    <p className="font-semibold">{program.careers.length} métiers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Admission Requirements */}
            <Card className="animate-fade-in-up"
                  style={{ animationDelay: "560ms", animationFillMode: "both" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Conditions d'Admission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {program.admissionRequirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            {/*<Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Besoin d'aide pour choisir ?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discutez avec Konan, notre assistant IA d'orientation
                </p>
                <Button className="w-full">
                  Parler à Konan
                </Button>
              </CardContent>
            </Card>*/}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramDetail;