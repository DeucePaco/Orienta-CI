import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FilterSidebar, type FilterGroup } from "@/components/FilterSidebar";
import { SearchBar } from "@/components/SearchBar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { Footer } from "./Footer";
import { PrivateSchoolsSection } from "@/components/PrivateSchoolsSection";

interface MockUniversity {
  id: number;
  name: string;
  city: string;
  type: "public" | "private";
  programCount: number;
  isVerified: boolean;
  description: string;
  imageUrl?: string;
  domain: string[];
  isFavorite: boolean;
}

const mockUniversities: MockUniversity[] = [
  {
    id: 1,
    name: "Université Félix Houphouët-Boigny",
    city: "Abidjan",
    type: "public",
    programCount: 45,
    isVerified: true,
    description: "La plus grande université de Côte d'Ivoire, offrant une large gamme de formations dans tous les domaines académiques.",
    imageUrl: "/UFHB.jpg",
    domain: ["Sciences", "Lettres", "Droit"],
    isFavorite: false,
  },
  {
    id: 2,
    name: "Institut National Polytechnique",
    city: "Yamoussoukro",
    type: "public",
    programCount: 28,
    isVerified: true,
    description: "École d'excellence en ingénierie et sciences appliquées, reconnue internationalement pour la qualité de ses formations.",
    imageUrl: "/INP.jpg",
    domain: ["Ingénierie", "Sciences"],
    isFavorite: true,
  },
  {
    id: 3,
    name: "ESATIC",
    city: "Abidjan",
    type: "public",
    programCount: 12,
    isVerified: true,
    description: "École Supérieure Africaine des Technologies de l'Information et de la Communication, spécialisée en informatique et télécommunications.",
    imageUrl: "/ESATIC.png",
    domain: ["Informatique", "Télécoms"],
    isFavorite: false,
  },
  {
    id: 4,
    name: "Université Alassane Ouattara",
    city: "Bouaké",
    type: "public",
    programCount: 32,
    isVerified: true,
    description: "Université moderne au cœur de la Côte d'Ivoire, offrant des formations diversifiées et de qualité.",
    imageUrl: "/UAO.png",
    domain: ["Sciences", "Lettres", "Économie"],
    isFavorite: false,
  },
  {
    id: 5,
    name: "PIGIER Côte d'Ivoire",
    city: "Abidjan",
    type: "private",
    programCount: 18,
    isVerified: true,
    description: "École privée d'excellence offrant des formations professionnelles en commerce, gestion et informatique.",
    imageUrl: "/PIGIER.jpg",
    domain: ["Commerce", "Gestion", "Informatique"],
    isFavorite: false,
  },
  {
    id: 6,
    name: "École Supérieure de Commerce (ESCAE)",
    city: "Abidjan",
    type: "private",
    programCount: 15,
    isVerified: true,
    description: "École de commerce reconnue formant les futurs managers et entrepreneurs dans les domaines du commerce, finance et marketing.",
    imageUrl: "/ESCAE.png",
    domain: ["Commerce", "Finance", "Marketing"],
    isFavorite: true,
  },
  {
    id: 7,
    name: "Institut Universitaire d'Abidjan (IUA)",
    city: "Abidjan",
    type: "public",
    programCount: 45,
    isVerified: true,
    description: "Institution universitaire publique offrant une large gamme de formations dans les domaines des sciences, lettres et droit.",
    imageUrl: "/IUA.jpg",
    domain: ["Sciences", "Lettres", "Droit"],
    isFavorite: false,
  },
  {
    id: 8,
    name: "Institut International Polytechnique des Elite d'Abidjan (IIPEA)",
    city: "Abidjan",
    type: "public",
    programCount: 5,
    isVerified: true,
    description: "Institution universitaire publique offrant une large gamme de formations dans les domaines des sciences, lettres et droit.",
    imageUrl: "/IIPEA.jpg",
    domain: ["Sciences", "Lettres", "Droit"],
    isFavorite: false,
  },
  {
    id: 9,
    name: "Institut Ivoirien de Technologie de Grand-Bassam (IIT)",
    city: "Grand-Bassam",
    type: "private",
    programCount: 12, 
    isVerified: true,
    description:
      "Institut axé sur les technologies de l’information, l’entrepreneuriat et l’innovation, avec une forte ouverture internationale.",
    imageUrl: "/IIT.jpg",
    domain: ["Informatique", "Data Science", "Entrepreneuriat"],
    isFavorite: false,
  },
  {
    id: 10,
    name: "Université de Man",
    city: "Man",
    type: "public",
    programCount: 18, 
    isVerified: true,
    description:
      "Université publique située à Man, offrant des formations en sciences, ingénierie, gestion et environnement.",
    imageUrl: "/UNIV_MAN.jpg",
    domain: ["Sciences", "Ingénierie", "Économie", "Environnement"],
    isFavorite: false,
  },
];

const filterGroups: FilterGroup[] = [
  {
    id: "type",
    label: "Type d'établissement",
    options: [
      { id: "public", label: "Public", count: 7 },
      { id: "private", label: "Privé", count: 3 },
    ],
  },
  {
    id: "city",
    label: "Ville",
    options: [
      { id: "abidjan", label: "Abidjan", count: 6 },
      { id: "bouake", label: "Bouaké", count: 8 },
      { id: "yamoussoukro", label: "Yamoussoukro", count: 5 },
      { id: "san-pedro", label: "San-Pédro", count: 2 },
      { id: "daloa", label: "Daloa", count: 2 },
      { id: "dabou", label: "Dabou", count: 2 },
    ],
  },
  {
    id: "domain",
    label: "Domaine",
    options: [
      { id: "sciences", label: "Sciences", count: 20 },
      { id: "commerce", label: "Commerce/Gestion", count: 25 },
      { id: "ingenierie", label: "Ingénierie", count: 15 },
      { id: "sante", label: "Santé", count: 8 },
      { id: "droit", label: "Droit", count: 10 },
      { id: "lettres", label: "Lettres & Arts", count: 12 },
    ],
  },
];

// Mapping entre les IDs numériques de mockUniversities et les IDs string de educationData
const universityIdMapping: Record<number, string> = {
  1: "ufhb",      // Université Félix Houphouët-Boigny
  2: "inp-hb",    // Institut National Polytechnique
  3: "esatic",    // ESATIC
  4: "uao",       // Université Alassane Ouattara
  5: "pigier",    // PIGIER Côte d'Ivoire
  6: "escae",     // École Supérieure de Commerce (ESCAE)
  7: "iua",       // Institut Universitaire d'Abidjan (IUA)
  8: "ipea",      // Institut International Polytechnique des Elite d'Abidjan (IPEA)
  9: "iit",      // Institut International des Technologies (IIT)
  10: "u-man",      // Universite de Man
};

export default function Universites() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const q = (searchParams.get("q") ?? "").trim();
    if (q) setSearchQuery(q);
  }, [searchParams]);

  const handleFilterChange = (groupId: string, optionId: string, checked: boolean) => {
    setSelectedFilters((prev) => {
      const current = prev[groupId] || [];
      if (checked) {
        return { ...prev, [groupId]: [...current, optionId] };
      }
      return { ...prev, [groupId]: current.filter((id) => id !== optionId) };
    });
  };

  const filteredUniversities = useMemo(() => {
    let result = [...mockUniversities];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (u) =>
          u.name.toLowerCase().includes(query) ||
          u.city.toLowerCase().includes(query) ||
          u.domain.some((d) => d.toLowerCase().includes(query))
      );
    }

    if (selectedFilters.type?.length) {
      result = result.filter((u) => selectedFilters.type.includes(u.type));
    }

    if (selectedFilters.city?.length) {
      result = result.filter((u) =>
        selectedFilters.city.some((c) => u.city.toLowerCase().includes(c))
      );
    }

    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "filieres":
        result.sort((a, b) => b.programCount - a.programCount);
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
            Universités
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Explorez les établissements d'enseignement supérieur en Côte d'Ivoire
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0">
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
                placeholder="Rechercher une université..."
                onSearch={setSearchQuery}
                className="flex-1"
              />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48" data-testid="select-sort">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nom (A-Z)</SelectItem>
                  <SelectItem value="filieres">Nombre de filières</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-4 text-sm text-muted-foreground">
              {filteredUniversities.length} université(s) trouvée(s)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUniversities.map((university, index) => {
                const mappedId = universityIdMapping[university.id] || university.id.toString();
                return (
                  <Link 
                    key={university.id} 
                    to={`/universities/${mappedId}`}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-white rounded-xl overflow-hidden border border-cyan-500/40 hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/30 transition duration-300 flex flex-col">
                        {/* Zone image + logo */}
                        <div className="relative h-40 w-full overflow-hidden">
                          {university.imageUrl && (
                            <img
                              src={university.imageUrl}
                              alt={university.name}
                              className="h-full w-full object-cover transform hover:scale-105 transition duration-500"
                            />
                          )}

                          {/* Logo superposé en bas à gauche (optionnel, si tu as un champ logo) */}
                          {/* 
                          <div className="absolute bottom-2 left-2 bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
                            <img
                              src={university.logo}
                              alt={`Logo de ${university.name}`}
                              className="h-10 w-10 object-contain"
                            />
                          </div> 
                          */}
                        </div>

                        {/* Bande blanche / sombre avec le nom */}
                        <div className="bg-slate-900 px-4 pt-3 pb-4 flex-1 flex flex-col">
                          <h3 className="text-sm font-semibold text-white leading-snug mb-1">
                            {university.name}
                          </h3>

                          {/* Type d’établissement */}
                          <p className="text-xs text-slate-300 mb-2 flex items-center gap-1">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            {university.type === "public" ? "Université publique" : "Université privée"}
                          </p>

                          {/* Bande du bas : ville + pays + bouton "Voir plus" */}
                          <div className="mt-auto pt-2 border-t border-slate-700 flex items-center justify-between text-xs text-slate-300">
                            <div className="flex flex-col">
                              <span className="flex items-center gap-1">
                                <span className="text-base">📍</span>
                                {university.city}
                              </span>
                              <span className="flex items-center gap-1">
                                Côte d’Ivoire <span>🇨🇮</span>
                              </span>
                            </div>

                            <button
                              type="button"
                              className="
                                ml-3
                                inline-flex 
                                items-center 
                                px-3 
                                py-1.5 
                                rounded-full 
                                text-xs 
                                font-medium 
                                bg-cyan-500 
                                text-slate-900 
                                hover:bg-cyan-400 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-cyan-500 
                                focus:ring-offset-2 
                                focus:ring-offset-slate-900 
                                transition 
                                duration-200 
                                hover:translate-y-[-1px] 
                                active:translate-y-[1px]
                              "
                            >
                              Voir plus
                            </button>
                          </div>
                        </div>
                      </div>
                  </Link>
                );
              })}
            </div>
          </main>
        </div>
        
      </div>
      
      <Footer />
    </div>
  );
}
