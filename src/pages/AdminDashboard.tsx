import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations_supabase/client";
import Navigation from "@/components/Navigation";
import { Footer } from "./Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AdminProfile {
  id: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  city: string | null;
  high_school: string | null;
  created_at: string | null;
}

const ADMIN_EMAIL = "yvesdeuce@gmail.com";

const AdminDashboard = () => {
  const [profiles, setProfiles] = useState<AdminProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminAndLoad = async () => {
      setLoading(true);
      setError(null);

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        setIsAuthorized(false);
        setLoading(false);
        return;
      }

      if (user.email !== ADMIN_EMAIL) {
        setIsAuthorized(false);
        setLoading(false);
        return;
      }

      setIsAuthorized(true);

      const { data, error: profilesError } = await (supabase as any)
        .from("profiles")
        .select(
          "id, email, first_name, last_name, phone, city, high_school, created_at"
        )
        .order("created_at", { ascending: false });

      if (profilesError) {
        setError(profilesError.message);
      } else {
        setProfiles((data || []) as AdminProfile[]);
      }

      setLoading(false);
    };

    checkAdminAndLoad();
  }, []);

  const handleGoToAuth = () => {
    navigate("/auth");
  };

  if (loading && isAuthorized === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-muted-foreground">
          Chargement du dashboard administrateur...
        </span>
      </div>
    );
  }

  if (isAuthorized === false) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Accès refusé</CardTitle>
            <CardDescription>
              Cette page est réservée à l’administrateur de la plateforme.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Connectez-vous avec votre compte administrateur pour accéder au
              dashboard.
            </p>
            <Button className="w-full" onClick={handleGoToAuth}>
              Aller à la page de connexion
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard Administrateur</h1>
          <p className="text-muted-foreground text-lg">
            Vue d’ensemble des utilisateurs inscrits sur Orientation CI
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Utilisateurs enregistrés</CardTitle>
            <CardDescription>
              Détails des comptes (email, nom, téléphone, ville, lycée, date
              d’inscription)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-sm text-muted-foreground">
                Chargement des utilisateurs...
              </p>
            ) : error ? (
              <p className="text-sm text-destructive">Erreur : {error}</p>
            ) : profiles.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Aucun utilisateur trouvé pour le moment.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Nom</TableHead>
                      <TableHead>Prénom</TableHead>
                      <TableHead>Téléphone</TableHead>
                      <TableHead>Ville</TableHead>
                      <TableHead>Lycée</TableHead>
                      <TableHead>Date d’inscription</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {profiles.map((profile) => (
                      <TableRow key={profile.id}>
                        <TableCell>
                          {profile.email || (
                            <Badge variant="outline">Inconnu</Badge>
                          )}
                        </TableCell>
                        <TableCell>{profile.last_name || "-"}</TableCell>
                        <TableCell>{profile.first_name || "-"}</TableCell>
                        <TableCell>{profile.phone || "-"}</TableCell>
                        <TableCell>{profile.city || "-"}</TableCell>
                        <TableCell>{profile.high_school || "-"}</TableCell>
                        <TableCell>
                          {profile.created_at
                            ? new Date(profile.created_at).toLocaleString()
                            : "-"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;