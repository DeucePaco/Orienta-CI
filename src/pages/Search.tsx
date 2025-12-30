
import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "./Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { universities, programs } from "@/data/educationData";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") ?? "").trim();
  const query = q.toLowerCase();

  const universityResults = useMemo(() => {
    if (!query) return [];
    return universities.filter(
      (u) =>
        u.name.toLowerCase().includes(query) ||
        u.shortName.toLowerCase().includes(query) ||
        u.location.toLowerCase().includes(query) ||
        u.domains.some((d) => d.toLowerCase().includes(query)),
    );
  }, [query]);

  const programResults = useMemo(() => {
    if (!query) return [];
    return programs.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.domain.toLowerCase().includes(query) ||
        p.level.toLowerCase().includes(query) ||
        p.universities.some((id) => id.toLowerCase().includes(query)),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-20">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Recherche</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            {q ? (
              <>
                Résultats pour <span className="font-medium text-foreground">&quot;{q}&quot;</span>
              </>
            ) : (
              "Tape une recherche depuis la page d’accueil."
            )}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Universités</CardTitle>
              <CardDescription>{q ? `${universityResults.length} résultat(s)` : ""}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {q && universityResults.length === 0 && (
                  <div className="text-sm text-muted-foreground">Aucune université trouvée.</div>
                )}

                {universityResults.slice(0, 10).map((u) => (
                  <Link
                    key={u.id}
                    to={`/universities/${u.id}`}
                    className="block rounded-lg border p-3 hover:bg-muted transition-colors"
                  >
                    <div className="font-medium">{u.name}</div>
                    <div className="text-sm text-muted-foreground">{u.location}</div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Filières</CardTitle>
              <CardDescription>{q ? `${programResults.length} résultat(s)` : ""}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {q && programResults.length === 0 && (
                  <div className="text-sm text-muted-foreground">Aucune filière trouvée.</div>
                )}

                {programResults.slice(0, 10).map((p) => (
                  <Link
                    key={p.id}
                    to={`/programs/${p.id}`}
                    className="block rounded-lg border p-3 hover:bg-muted transition-colors"
                  >
                    <div className="font-medium">{p.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {p.domain} · {p.level}
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          Bourses : bientôt disponible.
        </div>
      </main>

      <Footer />
    </div>
  );
}

