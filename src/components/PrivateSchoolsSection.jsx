import React, { useState, useMemo } from "react";
import { privateSchools } from "@/data/privateSchoolsData";
import { PrivateSchoolCard } from "@/components/PrivateSchoolCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { SearchBar } from "@/components/SearchBar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const filterGroups = [
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

export function PrivateSchoolsSection() {
  // 1) états
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortBy, setSortBy] = useState("name");

  // 2) fonction pour changer un filtre (copiée de Universities.tsx)
  const handleFilterChange = (groupId, optionId, checked) => {
    setSelectedFilters((prev) => {
      const current = prev[groupId] || [];
      if (checked) {
        return { ...prev, [groupId]: [...current, optionId] };
      }
      return { ...prev, [groupId]: current.filter((id) => id !== optionId) };
    });
  };

  // 3) calcul des écoles filtrées
  const filteredSchools = useMemo(() => {
    let result = [...privateSchools];

    // recherche texte
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.city.toLowerCase().includes(query) ||
          s.country.toLowerCase().includes(query)
      );
    }

    // filtre par ville
    if (selectedFilters.city?.length) {
      result = result.filter((s) =>
        selectedFilters.city.some((c) => s.city.toLowerCase().includes(c))
      );
    }

    // filtre par pays
    if (selectedFilters.country?.length) {
      result = result.filter((s) =>
        selectedFilters.country.some((c) => s.country.toLowerCase().includes(c))
      );
    }

    // tri
    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "city":
        result.sort((a, b) => a.city.localeCompare(b.city));
        break;
    }

    return result;
  }, [searchQuery, selectedFilters, sortBy]);

  // 4) rendu (layout similaire à Universities.tsx)
  return (
    <section className="w-full bg-slate-950 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
          Établissements privés en Côte d’Ivoire
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Barre latérale filtres */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <FilterSidebar
              groups={filterGroups}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onClearAll={() => setSelectedFilters({})}
            />
          </aside>

          {/* Zone principale : recherche + tri + grille */}
          <main className="flex-1">
            {/* barre recherche + tri */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <SearchBar
                placeholder="Rechercher un établissement privé..."
                onSearch={setSearchQuery}
                className="flex-1"
              />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nom (A-Z)</SelectItem>
                  <SelectItem value="city">Ville (A-Z)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* nombre de résultats */}
            <div className="mb-4 text-sm text-slate-300">
              {filteredSchools.length} établissement(s) trouvé(s)
            </div>

            {/* grille de cartes, mais on réutilise PrivateSchoolCard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchools.map((school) => (
                <PrivateSchoolCard key={school.id} school={school} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
{/*
export function PrivateSchoolsSection() {
  return (
    <section className="w-full bg-slate-950 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
          Établissements privés en Côte d’Ivoire
        </h2>
*/}
        {/* Grille responsive : 1 / 2 / 3 colonnes */}
        {/*<div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-6
          "
        >
          {privateSchools.map((school) => (
            <PrivateSchoolCard key={school.id} school={school} />
          ))}
        </div>
      </div>
    </section>
  );
}
*/}