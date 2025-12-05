import { useState, useMemo } from "react";
import { Code, Briefcase, Stethoscope, Scale, Cpu, Calculator, Palette, Microscope, Database } from "lucide-react";
import { FiliereCard, type Filiere } from "@/components/FiliereCard";
import { FilterSidebar, FilterGroup } from "@/components/FilterSidebar";
import { SearchBar } from "@/components/SearchBar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { Footer } from "./Footer";

// todo: remove mock functionality
const mockFilieres: Filiere[] = [
  {
    id: "1",
    name: "Informatique et Réseaux",
    domain: "Sciences et Technologies",
    level: "Licence",
    duration: "3 ans",
    careers: ["Développeur", "Admin Réseaux", "Data Analyst"],
    demandLevel: "high",
    icon: Code,
    isFavorite: false,
  },
  {
    id: "2",
    name: "Médecine Générale",
    domain: "Santé",
    level: "Doctorat",
    duration: "7 ans",
    careers: ["Médecin", "Chirurgien", "Spécialiste"],
    demandLevel: "high",
    icon: Stethoscope,
    isFavorite: true,
  },
  {
    id: "3",
    name: "Droit des Affaires",
    domain: "Droit et Sciences Politiques",
    level: "Master",
    duration: "5 ans",
    careers: ["Avocat", "Juriste", "Notaire"],
    demandLevel: "medium",
    icon: Scale,
    isFavorite: false,
  },
  {
    id: "4",
    name: "Génie Civil",
    domain: "Ingénierie",
    level: "Master",
    duration: "5 ans",
    careers: ["Ingénieur BTP", "Chef de chantier", "Urbaniste"],
    demandLevel: "high",
    icon: Cpu,
    isFavorite: false,
  },
  {
    id: "5",
    name: "Comptabilité et Finance",
    domain: "Commerce et Gestion",
    level: "Licence",
    duration: "3 ans",
    careers: ["Comptable", "Auditeur", "Contrôleur de gestion"],
    demandLevel: "high",
    icon: Calculator,
    isFavorite: false,
  },
  {
    id: "6",
    name: "Arts Graphiques",
    domain: "Arts et Culture",
    level: "BTS",
    duration: "2 ans",
    careers: ["Graphiste", "Designer", "Directeur artistique"],
    demandLevel: "medium",
    icon: Palette,
    isFavorite: false,
  },
  {
    id: "7",
    name: "Biologie Moléculaire",
    domain: "Sciences et Technologies",
    level: "Master",
    duration: "5 ans",
    careers: ["Chercheur", "Biologiste", "Enseignant"],
    demandLevel: "low",
    icon: Microscope,
    isFavorite: false,
  },
  {
    id: "8",
    name: "Marketing Digital",
    domain: "Commerce et Gestion",
    level: "Licence",
    duration: "3 ans",
    careers: ["Community Manager", "Chef de projet digital", "SEO Manager"],
    demandLevel: "high",
    icon: Briefcase,
    isFavorite: true,
  },

  {
    id: "9",
    name: "Data Science",
    domain: "Sciences et Technologies",
    level: "Master",
    duration: "5 ans",
    careers: ["Data Scientist", "Analyste", "Ingénieur IA"],
    demandLevel: "high",
    icon: Database,
    isFavorite: false,
  },

];

const filterGroups: FilterGroup[] = [
  {
    id: "level",
    label: "Niveau",
    options: [
      { id: "bts", label: "BTS/DUT", count: 25 },
      { id: "licence", label: "Licence", count: 80 },
      { id: "master", label: "Master", count: 60 },
      { id: "doctorat", label: "Doctorat", count: 15 },
    ],
  },
  {
    id: "domain",
    label: "Domaine",
    options: [
      { id: "sciences", label: "Sciences & Tech", count: 45 },
      { id: "commerce", label: "Commerce & Gestion", count: 35 },
      { id: "sante", label: "Santé", count: 20 },
      { id: "droit", label: "Droit", count: 15 },
      { id: "arts", label: "Arts & Culture", count: 10 },
      { id: "ingenierie", label: "Ingénierie", count: 25 },
      { id: "education", label: "Éducation", count: 30 },
      { id: "sciences-humaines", label: "Sciences Humaines", count: 22 },
      { id: "agriculture", label: "Agriculture", count: 18 },
      { id: "environnement", label: "Environnement", count: 12 },
    ],
  },
  {
    id: "demand",
    label: "Niveau de demande",
    options: [
      { id: "high", label: "Forte demande", count: 50 },
      { id: "medium", label: "Demande moyenne", count: 40 },
      { id: "low", label: "Faible demande", count: 10 },
    ],
  },
];

export default function Filieres() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState("name");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilterChange = (groupId: string, optionId: string, checked: boolean) => {
    setSelectedFilters((prev) => {
      const current = prev[groupId] || [];
      if (checked) {
        return { ...prev, [groupId]: [...current, optionId] };
      }
      return { ...prev, [groupId]: current.filter((id) => id !== optionId) };
    });
  };

  const filteredFilieres = useMemo(() => {
    let result = [...mockFilieres];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (f) =>
          f.name.toLowerCase().includes(query) ||
          f.domain.toLowerCase().includes(query) ||
          f.careers.some((c) => c.toLowerCase().includes(query))
      );
    }

    if (selectedFilters.level?.length) {
      result = result.filter((f) =>
        selectedFilters.level.some((l) => f.level.toLowerCase().includes(l))
      );
    }

    if (selectedFilters.demand?.length) {
      result = result.filter((f) => selectedFilters.demand.includes(f.demandLevel));
    }

    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "demand":
        const demandOrder = { high: 0, medium: 1, low: 2 };
        result.sort((a, b) => demandOrder[a.demandLevel] - demandOrder[b.demandLevel]);
        break;
      case "duration":
        result.sort((a, b) => a.duration.localeCompare(b.duration));
        break;
    }

    return result;
  }, [searchQuery, selectedFilters, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-20">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Filières
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Découvrez les formations disponibles et leurs débouchés professionnels
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="lg:hidden mb-4">
          <button
            type="button"
            className="w-full rounded-md border px-4 py-2 text-sm font-medium bg-background hover:bg-accent transition-colors"
            onClick={() => setShowMobileFilters(true)}
          >
            Filtrer les filières
          </button>
        </div>

        {showMobileFilters && (
          <div className="fixed inset-0 z-40 flex">
            <div
              className="fixed inset-0 bg-black/40"
              onClick={() => setShowMobileFilters(false)}
            />
            <div className="relative ml-auto w-full max-w-xs h-full bg-background shadow-lg p-4 overflow-y-auto">
              <FilterSidebar
                groups={filterGroups}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                onClearAll={() => setSelectedFilters({})}
              />
              <button
                type="button"
                className="mt-4 w-full rounded-md border px-4 py-2 text-sm font-medium bg-background hover:bg-accent transition-colors"
                onClick={() => setShowMobileFilters(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        )}

        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar
            groups={filterGroups}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onClearAll={() => setSelectedFilters({})}
          />
        </aside>

        <main className="flex-1">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <SearchBar
              placeholder="Rechercher une filière ou métier..."
              onSearch={setSearchQuery}
              className="flex-1"
            />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48" data-testid="select-sort-filieres">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nom (A-Z)</SelectItem>
                <SelectItem value="demand">Niveau de demande</SelectItem>
                <SelectItem value="duration">Durée</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4 text-sm text-muted-foreground">
            {filteredFilieres.length} filière(s) trouvée(s)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredFilieres.map((filiere) => (
              <FiliereCard
                key={filiere.id}
                filiere={filiere}
                onFavoriteToggle={(id, fav) => console.log("Toggle:", id, fav)}
              />
            ))}
          </div>
        </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

