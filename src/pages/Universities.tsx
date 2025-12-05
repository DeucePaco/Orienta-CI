import { useState, useMemo } from "react";
import { UniversityCard, type University } from "@/components/UniversityCard";
import { FilterSidebar, type FilterGroup } from "@/components/FilterSidebar";
import { SearchBar } from "@/components/SearchBar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { Footer } from "./Footer";

// todo: remove mock functionality
const mockUniversities: University[] = [
  {
    id: 1,
    name: "Université Félix Houphouët-Boigny",
    city: "Abidjan",
    type: "public",
    programCount: 45,
    isVerified: true,
    description: "Université Félix Houphouët-Boigny",
    imageUrl: "https://example.com/uni1.jpg",
    domain: ["Sciences", "Lettres", "Droit"],
    studentCount: 65000,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Institut National Polytechnique",
    city: "Yamoussoukro",
    type: "public",
    programCount: 28,
    isVerified: true,
    description: "Institut National Polytechnique",
    imageUrl: "https://example.com/uni2.jpg",
    domain: ["Ingénierie", "Sciences"],
    studentCount: 12000,
    isFavorite: true,
  },
  {
    id: 3,
    name: "ESATIC",
    city: "Abidjan",
    type: "public",
    programCount: 12,
    isVerified: true,
    description: "ESATIC",
    imageUrl: "https://example.com/uni3.jpg",
    domain: ["Informatique", "Télécoms"],
    studentCount: 2500,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Université Alassane Ouattara",
    city: "Bouaké",
    type: "public",
    programCount: 32,
    isVerified: true,
    description: "Université Alassane Ouattara",
    imageUrl: "https://example.com/uni4.jpg",
    domain: ["Sciences", "Lettres", "Économie"],
    studentCount: 35000,
    isFavorite: false,
  },
  {
    id: 5,
    name: "PIGIER Côte d'Ivoire",
    city: "Abidjan",
    type: "private",
    programCount: 18,
    isVerified: true,
    description: "PIGIER Côte d'Ivoire",
    imageUrl: "https://example.com/uni5.jpg",
    domain: ["Commerce", "Gestion", "Informatique"],
    studentCount: 8000,
    isFavorite: false,
  },
  {
    id: 6,
    name: "École Supérieure de Commerce (ESCAE)",
    city: "Abidjan",
    type: "private",
    programCount: 15,
    isVerified: true,
    description: "École Supérieure de Commerce (ESCAE)",
    imageUrl: "https://example.com/uni6.jpg",
    domain: ["Commerce", "Finance", "Marketing"],
    studentCount: 3500,
    isFavorite: true,
  },
  {
    id: 7,
    name: "Institut Universitaire d'Abidjan (IUA)",
    city: "Abidjan",
    type: "public",
    programCount: 45,
    isVerified: true,
    description: "Institut Universitaire d'Abidjan (IUA)",
    imageUrl: "https://example.com/uni1.jpg",
    domain: ["Sciences", "Lettres", "Droit"],
    studentCount: 65000,
    isFavorite: false,
  },
];

const filterGroups: FilterGroup[] = [
  {
    id: "type",
    label: "Type d'établissement",
    options: [
      { id: "public", label: "Public", count: 12 },
      { id: "private", label: "Privé", count: 38 },
    ],
  },
  {
    id: "city",
    label: "Ville",
    options: [
      { id: "abidjan", label: "Abidjan", count: 35 },
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

export default function Universites() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState("name");

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
      case "students":
        result.sort((a, b) => b.studentCount - a.studentCount);
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
                  <SelectItem value="students">Nombre d'étudiants</SelectItem>
                  <SelectItem value="filieres">Nombre de filières</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-4 text-sm text-muted-foreground">
              {filteredUniversities.length} université(s) trouvée(s)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredUniversities.map((university) => (
                <UniversityCard
                  key={university.id}
                  university={university}
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


/*
import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UniversityCard, type University } from "@/components/UniversityCard";
import { FilterSidebar, type FilterGroup } from "@/components/FilterSidebar";
import { SearchBar } from "@/components/SearchBar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// todo: remove mock functionality
const mockUniversities: University[] = [
  {
    id: 1,
    name: "Université Félix Houphouët-Boigny",
    city: "Abidjan",
    type: "public",
    domain: ["Sciences Economiques", "Lettres", "Droit"],
    studentCount: 65000,
    isFavorite: false,
    programCount: 45,
    isVerified: true,
    description: "Université Félix Houphouët-Boigny",
    imageUrl: "https://www.univ-ub.ac.ci/",
  },
  {
    id: 2,
    name: "Institut National Polytechnique",
    city: "Yamoussoukro",
    type: "public",
    domain: ["Ingénierie", "Sciences Economiques"],
    studentCount: 12000,
    isFavorite: true,
    programCount: 28,
    isVerified: true,
    description: "Université Félix Houphouët-Boigny",
    imageUrl: "https://www.univ-ub.ac.ci/",
  },
  {
    id: 3,
    name: "ESATIC",
    city: "Abidjan",
    type: "public",
    domain: ["Informatique", "Télécoms"],
    studentCount: 2500,
    isFavorite: false,
    programCount: 12,
    isVerified: true,
    description: "Université Félix Houphouët-Boigny",
    imageUrl: "https://www.univ-ub.ac.ci/",
  },
  {
    id: 4,
    name: "Université Alassane Ouattara",
    city: "Bouaké",
    type: "public",
    domain: ["Sciences Economiques", "Lettres", "Économie"],
    studentCount: 35000,
    programCount: 32,
    isFavorite: false,
    isVerified: true,
    description: "Université Félix Houphouët-Boigny",
    imageUrl: "https://www.univ-ub.ac.ci/",
  },
  {
    id: 5,
    name: "PIGIER Côte d'Ivoire",
    city: "Abidjan",
    type: "private",
    domain: ["Commerce", "Gestion", "Informatique"],
    studentCount: 8000,
    programCount: 18,
    isFavorite: false,
    isVerified: true,
    description: "Université Félix Houphouët-Boigny",
    imageUrl: "https://www.univ-ub.ac.ci/",
  },
  {
    id: 6,
    name: "École Supérieure de Commerce (ESCAE)",
    city: "Abidjan",
    type: "private",
    domain: ["Commerce", "Finance", "Marketing"],
    studentCount: 3500,
    programCount: 15,
    isFavorite: true,
    isVerified: true,
    description: "Université Félix Houphouët-Boigny",
    imageUrl: "https://www.univ-ub.ac.ci/",
  },
];

const filterGroups: FilterGroup[] = [
  {
    id: "type",
    label: "Type d'établissement",
    options: [
      { id: "public", label: "Public", count: 12 },
      { id: "private", label: "Privé", count: 38 },
    ],
  },
  {
    id: "city",
    label: "Ville",
    options: [
      { id: "abidjan", label: "Abidjan", count: 35 },
      { id: "bouake", label: "Bouaké", count: 8 },
      { id: "yamoussoukro", label: "Yamoussoukro", count: 5 },
      { id: "san-pedro", label: "San-Pédro", count: 2 },
    ],
  },
  {
    id: "domain",
    label: "Domaine",
    options: [
      { id: "sciences-Economiques", label: "Sciences Economiques", count: 20 },
      { id: "commerce", label: "Commerce/Gestion", count: 25 },
      { id: "ingenierie", label: "Ingénierie", count: 15 },
      { id: "sante", label: "Santé", count: 8 },
      { id: "droit", label: "Droit", count: 10 },
      { id: "lettres", label: "Lettres & Arts", count: 12 },
      { id: "administration-des-affaires (ADA)", label: "Administration Des Affaires", count: 12 },
    ],
  },
];

export default function Universites() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    types: [],
    cities: [],
    domains: [],
    costRange: ["0", "2_000_000"],
  });
  const clearFilters = () => {
    setSelectedFilters({ types: [], cities: [], domains: [], costRange: ["0", "2_000_000"] });
  };
  

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
      case "students":
        result.sort((a, b) => b.studentCount - a.studentCount);
        break;
      case "filieres":
        result.sort((a, b) => b.programCount - a.programCount);
        break;
    }

    return result;
  }, [searchQuery, selectedFilters, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="bg-card border-b py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl font-bold mb-2">Universités</h1>
            <p className="text-muted-foreground">
              Explorez les établissements d'enseignement supérieur en Côte d'Ivoire
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0">
            <FilterSidebar
              groups={filterGroups}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onClearAll={clearFilters}
            />
          </aside>

          <section className="flex-1">
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
                  <SelectItem value="students">Nombre d'étudiants</SelectItem>
                  <SelectItem value="filieres">Nombre de filières</SelectItem>
                </SelectContent>
              </Select>
            </div>
</section>
*/
/*
import { UniversityCard, University } from "@/components/UniversityCard";
import { FilterSidebar, FilterGroup } from "@/components/FilterSidebar";
import { SearchBar } from "@/components/SearchBar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { Footer } from "./Footer";

// todo: remove mock functionality
const mockUniversities: University[] = [
  {
    id: 1,
    name: "Université Félix Houphouët-Boigny",
    city: "Abidjan",
    type: "public",
    programCount: 45,
    isVerified: true,
    description: "Université Félix Houphouët-Boigny",
    imageUrl: "https://example.com/uni1.jpg",
    domain: ["Sciences", "Lettres", "Droit"],
    studentCount: 65000,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Institut National Polytechnique",
    city: "Yamoussoukro",
    type: "public",
    programCount: 28,
    isVerified: true,
    description: "Institut National Polytechnique",
    imageUrl: "https://example.com/uni2.jpg",
    domain: ["Ingénierie", "Sciences"],
    studentCount: 12000,
    isFavorite: true,
  },
  {
    id: 3,
    name: "ESATIC",
    city: "Abidjan",
    type: "public",
    programCount: 12,
    isVerified: true,
    description: "ESATIC",
    imageUrl: "https://example.com/uni3.jpg",
    domain: ["Informatique", "Télécoms"],
    studentCount: 2500,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Université Alassane Ouattara",
    city: "Bouaké",
    type: "public",
    programCount: 32,
    isVerified: true,
    description: "Université Alassane Ouattara",
    imageUrl: "https://example.com/uni4.jpg",
    domain: ["Sciences", "Lettres", "Économie"],
    studentCount: 35000,
    isFavorite: false,
  },
  {
    id: 5,
    name: "PIGIER Côte d'Ivoire",
    city: "Abidjan",
    type: "private",
    programCount: 18,
    isVerified: true,
    description: "PIGIER Côte d'Ivoire",
    imageUrl: "https://example.com/uni5.jpg",
    domain: ["Commerce", "Gestion", "Informatique"],
    studentCount: 8000,
    isFavorite: false,
  },
  {
    id: 6,
    name: "École Supérieure de Commerce (ESCAE)",
    city: "Abidjan",
    type: "private",
    programCount: 15,
    isVerified: true,
    description: "École Supérieure de Commerce (ESCAE)",
    imageUrl: "https://example.com/uni6.jpg",
    domain: ["Commerce", "Finance", "Marketing"],
    studentCount: 3500,
    isFavorite: true,
  },
  {
    id: 7,
    name: "Institut Universitaire d'Abidjan (IUA)",
    city: "Abidjan",
    type: "public",
    programCount: 45,
    isVerified: true,
    description: "Institut Universitaire d'Abidjan (IUA)",
    imageUrl: "https://example.com/uni1.jpg",
    domain: ["Sciences", "Lettres", "Droit"],
    studentCount: 65000,
    isFavorite: false,
  },
];

const filterGroups: FilterGroup[] = [
  {
    id: "type",
    label: "Type d'établissement",
    options: [
      { id: "public", label: "Public", count: 12 },
      { id: "private", label: "Privé", count: 38 },
    ],
  },
  {
    id: "city",
    label: "Ville",
    options: [
      { id: "abidjan", label: "Abidjan", count: 35 },
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

export default function Universites() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState("name");

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
      case "students":
        result.sort((a, b) => b.studentCount - a.studentCount);
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
                <SelectItem value="students">Nombre d'étudiants</SelectItem>
                <SelectItem value="filieres">Nombre de filières</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4 text-sm text-muted-foreground">
            {filteredUniversities.length} université(s) trouvée(s)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredUniversities.map((university) => (
              <UniversityCard
                key={university.id}
                university={university}
                onFavoriteToggle={(id, fav) => console.log("Toggle:", id, fav)}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
*/
/*-----------------------------------------------------------------------------*/