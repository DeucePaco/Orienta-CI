import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, GraduationCap, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Universités", href: "/universities" },
  { label: "Filières", href: "/programs" },
  { label: "Favoris", href: "/favorites" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Guides", href: "/guides" },
];

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<"universities" | "programs" | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link to="/" className="flex items-center gap-2">
             <img
                  src="/BOY.jpeg"
                  alt="Logo Boy"
                  className="w-10 h-10 rounded-lg object-cover"
              />
            {/*<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>*/}
            <span className="font-serif font-bold text-xl hidden sm:block">Boy</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {/* Accueil simple */}
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "secondary" : "ghost"}
                size="sm"
                data-testid="nav-home"
              >
                Accueil
              </Button>
            </Link>

            {/* Dropdown Universités */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("universities")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Button
                variant={location.pathname === "/universities" ? "secondary" : "ghost"}
                size="sm"
                data-testid="nav-universities"
              >
                Universités
              </Button>
              {openDropdown === "universities" && (
                <div className="absolute left-0 mt-2 w-56 rounded-md border bg-background shadow-md z-50">
                  <div className="py-1">
                    <Link to="/universities">
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Toutes les universités
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={() => {
                        // exemple d'action complémentaire
                        setOpenDropdown(null);
                      }}
                    >
                      Universités publiques (bientôt)
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown Filières */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("programs")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Button
                variant={location.pathname === "/programs" ? "secondary" : "ghost"}
                size="sm"
                data-testid="nav-programs"
              >
                Filières
              </Button>
              {openDropdown === "programs" && (
                <div className="absolute left-0 mt-2 w-56 rounded-md border bg-background shadow-md z-50">
                  <div className="py-1">
                    <Link to="/programs">
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Toutes les filières
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={() => {
                        // exemple d'action complémentaire
                        setOpenDropdown(null);
                      }}
                    >
                      Filières populaires (bientôt)
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Autres items simples (Favoris, Dashboard, etc.) */}
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={location.pathname === item.href ? "secondary" : "ghost"}
                  size="sm"
                  data-testid={`nav-${item.href.replace("/", "")}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-sm">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
          </form>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/login" className="hidden sm:block">
              <Button variant="outline" size="sm" data-testid="button-login">
                Connexion
              </Button>
            </Link>
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="px-4 py-4 space-y-2">
            <form onSubmit={handleSearch} className="md:hidden mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-mobile"
                />
              </div>
            </form>
            {/* Liens principaux sur mobile (sans dropdown pour simplifier) */}
            <Link to="/universities">
              <Button
                variant={location.pathname === "/universities" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                Universités
              </Button>
            </Link>
            <Link to="/programs">
              <Button
                variant={location.pathname === "/programs" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                Filières
              </Button>
            </Link>
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={location.pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link to="/login" className="sm:hidden block">
              <Button variant="outline" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Connexion
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
