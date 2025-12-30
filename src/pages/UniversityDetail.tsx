import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  MapPin, 
  Users, 
  BookOpen, 
  Calendar, 
  Globe, 
  Mail, 
  Phone, 
  Building, 
  GraduationCap,
  Award,
  ArrowLeft,
  Heart
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { Footer } from "./Footer";
import { getUniversityById, getProgramsByUniversity } from "@/data/educationData";
import { toast } from "@/hooks/use-toast";

const UniversityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const university = getUniversityById(id || "");
  const universityPrograms = getProgramsByUniversity(id || "");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState("un candidat à l'inscription");
  const [message, setMessage] = useState("");

  if (!university) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Université non trouvée</h1>
            <Link to="/universities">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux universités
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const missing: string[] = [];
    if (!firstName.trim()) missing.push("Prénom");
    if (!lastName.trim()) missing.push("Nom");
    if (!email.trim()) missing.push("E-mail");
    if (!profile.trim()) missing.push("Vous êtes");
    if (!message.trim()) missing.push("Votre message");

    if (missing.length > 0) {
      toast({
        title: "Champs obligatoires",
        description: `Veuillez renseigner : ${missing.join(", ")}.`,
        variant: "destructive",
      });
      return;
    }

    const subject = `Demande d'inscription - ${university.name}`;
    const bodyLines = [
      `Université : ${university.name} (${university.id})`,
      "",
      `Prénom : ${firstName}`,
      `Nom : ${lastName}`,
      `E-mail : ${email}`,
      `Téléphone : ${phone || "-"}`,
      `Vous êtes : ${profile}`,
      "",
      "Message :",
      message,
    ];

    const mailto = `mailto:${encodeURIComponent(university.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    toast({
      title: "Demande prête à envoyer",
      description: "Votre application e-mail va s'ouvrir avec votre message pré-rempli.",
    });

    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        {/* Back Button */}
        <Link to="/universities" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-all duration-300 hover:translate-x-[-4px] animate-slide-in-right">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux universités
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl overflow-hidden mb-8 animate-scale-in">
          {university.imageUrl && (
            <div className="h-64 w-full overflow-hidden">
              <img 
                src={university.imageUrl} 
                alt={university.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">{university.type}</Badge>
                  <Badge variant="outline" className="text-sm">
                    <Calendar className="mr-1 h-3 w-3" />
                    Fondée en {university.founded}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{university.name}</h1>
                <p className="text-lg text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {university.location}
                </p>
              </div>
              <Button variant="outline" className="self-start">
                <Heart className="mr-2 h-4 w-4" />
                Ajouter aux favoris
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  À propos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{university.description}</p>
              </CardContent>
            </Card>

            {/* Domains */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-secondary" />
                  Domaines de Formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {university.domains.map((domain, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3">
                      {domain}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Diplomas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  Diplômes Proposés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {university.diplomas.map((diploma, index) => (
                    <Badge key={index} variant="outline" className="text-sm py-1.5 px-3">
                      {diploma}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Programs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-secondary" />
                  Filières Disponibles ({universityPrograms.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {universityPrograms.map((program) => (
                    <Link key={program.id} to={`/programs/${program.id}`}>
                      <div className="p-4 rounded-lg border hover:border-primary/50 hover:bg-primary/5 transition-all group">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold group-hover:text-primary transition-colors">
                              {program.name}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">{program.description}</p>
                            <div className="flex gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">{program.level}</Badge>
                              <Badge variant="outline" className="text-xs">{program.duration}</Badge>
                            </div>
                          </div>
                          <ArrowLeft className="h-4 w-4 rotate-180 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: "250ms" }}>
              <CardHeader>
                <CardTitle>Qu'en pensez-vous ?</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        Prénom <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="border-primary/60 focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        NOM <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="border-primary/60 focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        E-mail <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-primary/60 focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border-primary/60 focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Vous êtes <span className="text-destructive">*</span>
                    </Label>
                    <Select value={profile} onValueChange={setProfile}>
                      <SelectTrigger className="border-primary/60 focus:ring-primary">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="un candidat à l'inscription">un candidat à l'inscription</SelectItem>
                        <SelectItem value="un parent">un parent</SelectItem>
                        <SelectItem value="un étudiant">un étudiant</SelectItem>
                        <SelectItem value="un professionnel">un professionnel</SelectItem>
                        <SelectItem value="autre">autre</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground italic">
                      L'établissement sera notifié de votre question / commentaire et pourra y répondre ici-même.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Votre message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="min-h-[120px] border-primary/60 focus-visible:ring-primary"
                    />
                  </div>

                  <div>
                    <Button type="submit">Envoyer</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <CardHeader>
                <CardTitle>Informations Clés</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/5">
                  <BookOpen className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Filières</p>
                    <p className="font-semibold">{universityPrograms.length} programmes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href={`https://${university.website}`} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{university.website}</span>
                </a>
                <a href={`mailto:${university.email}`} 
                   className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{university.email}</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{university.phone}</span>
                </div>
              </CardContent>
            </Card>

            {/* Accreditations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Accréditations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {university.accreditations.map((acc, index) => (
                    <Badge key={index} className="bg-accent/20 text-accent-foreground">
                      {acc}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UniversityDetail;