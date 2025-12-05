# Projet 2 — Convertisseur Celsius ↔ Fahrenheit

Ce petit projet Perl affiche une table de conversion entre Celsius et Fahrenheit.

Fichiers:
- `monscript.pl` : script principal (arguments CLI).

Usage (PowerShell):

```powershell
# Exemples
perl .\perl\monscript.pl --mode c2f --start 0 --end 100 --step 10
perl .\perl\monscript.pl --mode f2c --start 32 --end 212 --step 20

# Options utiles:
# --mode     : 'c2f' (default) ou 'f2c'
# --start    : valeur de départ
# --end      : valeur de fin
# --step     : incrément (peut être négatif pour descendre)
# --precision: nombre de décimales (par défaut 2)
```

Concepts couverts:
- Formules mathématiques : C -> F : F = C * 9/5 + 32 ; F -> C : C = (F - 32) * 5/9
- Boucle `for` pour générer la table
- Validation d'arguments en ligne de commande

Notes:
- Le script utilise `Getopt::Long` (module standard Perl).
- Sur Windows PowerShell, utilisez des chemins et échappements comme ci-dessus.
