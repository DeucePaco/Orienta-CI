import { Footer } from "@/components/Footer";
import { GuideCard, type Guide } from "@/components/GuideCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Compass, FileText, Shield, HelpCircle, BookOpen, Target, Lightbulb, Users } from "lucide-react";

// todo: remove mock functionality
const guides: Guide[] = [
  {
    id: 1,
    title: "Comment choisir sa filière après le Bac",
    description: "Un guide complet pour t'aider à identifier la filière qui correspond à tes aptitudes et tes aspirations professionnelles.",
    readTime: "8 min de lecture",
    icon: Compass,
  },
  {
    id: 2,
    title: "Réussir sa candidature de bourse",
    description: "Conseils pratiques pour constituer un dossier de bourse convaincant et augmenter tes chances d'acceptation.",
    readTime: "10 min de lecture",
    icon: FileText,
  },
  {
    id: 3,
    title: "Éviter les arnaques et faux établissements",
    description: "Apprends à reconnaître les signes d'une arnaque et à vérifier la légitimité d'un établissement.",
    readTime: "6 min de lecture",
    icon: Shield,
  },
  {
    id: 4,
    title: "Préparer son entrée à l'université",
    description: "Tout ce que tu dois savoir pour réussir ta transition du lycée vers l'enseignement supérieur.",
    readTime: "12 min de lecture",
    icon: BookOpen,
  },
  {
    id: 5,
    title: "Définir son projet professionnel",
    description: "Méthodologie pour construire un projet professionnel cohérent et réaliste.",
    readTime: "9 min de lecture",
    icon: Target,
  },
  {
    id: 6,
    title: "Les débouchés par filière",
    description: "Panorama des métiers accessibles selon ta filière d'études.",
    readTime: "15 min de lecture",
    icon: Lightbulb,
  },
];

const faqs = [
  {
    question: "Comment savoir si un établissement est reconnu par l'État ?",
    answer: "Vérifiez que l'établissement possède un agrément du Ministère de l'Enseignement Supérieur. Sur OriCI, les établissements vérifiés portent un badge de validation. En cas de doute, consultez la liste officielle du MESRS ou contactez-nous.",
  },
  {
    question: "Quelles sont les conditions générales pour obtenir une bourse ?",
    answer: "Les conditions varient selon le type de bourse. Généralement, il faut être de nationalité ivoirienne (ou africaine pour certaines bourses internationales), avoir un bon dossier académique, et parfois justifier de critères sociaux. Consultez les fiches détaillées de chaque bourse pour les conditions spécifiques.",
  },
  {
    question: "Comment puis-je signaler une annonce suspecte ?",
    answer: "Utilisez le bouton 'Signaler' présent sur chaque fiche établissement ou bourse. Notre équipe de modération examinera votre signalement sous 48h. Vous pouvez aussi nous contacter directement via le formulaire de contact.",
  },
  {
    question: "Les informations sur OriCI sont-elles à jour ?",
    answer: "Nous mettons à jour notre base de données régulièrement en collaboration avec les établissements et les organismes de bourses. Les dates de dernière mise à jour sont indiquées sur chaque fiche. N'hésitez pas à nous signaler toute information obsolète.",
  },
  {
    question: "Comment créer un compte sur OriCI ?",
    answer: "Cliquez sur 'Connexion' en haut de la page, puis 'Créer un compte'. Vous pouvez vous inscrire avec votre email ou via Google. Un compte vous permet de sauvegarder vos recherches et de recevoir des alertes sur les nouvelles bourses.",
  },
  {
    question: "OriCI est-il gratuit ?",
    answer: "Oui, OriCI est entièrement gratuit pour les étudiants et les parents. Notre mission est de démocratiser l'accès à l'information sur l'orientation scolaire en Côte d'Ivoire.",
  },
];

export default function Guides() {
  return (
    <div className="min-h-screen flex flex-col  bg-background">
      <Navigation/>
      
      <main className="flex-1">
        <div className="bg-card border-b py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="font-serif font-bold text-3xl mb-2">Guides & Ressources</h1>
            <p className="text-muted-foreground">
              Conseils et informations pour réussir ton orientation
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <section className="mb-16">
            <h2 className="font-serif font-bold text-2xl mb-6">
              Guides d'orientation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <GuideCard
                  key={guide.id}
                  guide={guide}
                  onClick={() => console.log("Navigate to guide", guide.id)}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif font-bold text-2xl mb-6 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" />
              Questions fréquentes
            </h2>
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left" data-testid={`faq-${index}`}>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
