import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-xl">Boy</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Ta plateforme de confiance pour l'orientation scolaire et universitaire en Côte d'Ivoire.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" data-testid="link-facebook">
                <SiFacebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="link-instagram">
                <SiInstagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="link-linkedin">
                <SiLinkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/universities" className="text-muted-foreground hover:text-foreground transition-colors">
                  Universités
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Filières
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-muted-foreground hover:text-foreground transition-colors">
                  Favoris
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>

              {/*
              <li>
                <Link href="/bourses" className="text-muted-foreground hover:text-foreground transition-colors">
                  Bourses
                </Link>
              </li>
              */}
              <li>
                <Link to="/guides" className="text-muted-foreground hover:text-foreground transition-colors">
                  Guides d'orientation
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contact@Boy.ci</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+225 07 00 00 00 00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Reçois les dernières opportunités de bourses et d'orientation.
            </p>
            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); console.log("Newsletter signup"); }}>
              <Input
                type="email"
                placeholder="Ton email"
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button type="submit" data-testid="button-newsletter">
                OK
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Boy. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link to="/mentions-legales" className="hover:text-foreground transition-colors">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="hover:text-foreground transition-colors">
              Confidentialité
            </Link>
            <Link to="/signalement" className="hover:text-foreground transition-colors">
              Signaler un abus
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
