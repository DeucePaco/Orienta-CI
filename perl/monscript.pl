#!/usr/bin/perl
use strict;
use warnings;

# Convertisseur Celsius <-> Fahrenheit
# Usage:
#   perl monscript.pl --mode c2f --start 0 --end 100 --step 10
#   perl monscript.pl --mode f2c --start 32 --end 212 --step 20

use Getopt::Long qw(GetOptions);

my $mode = 'c2f';
my $start = undef;
my $end = undef;
my $step = undef;
my $precision = 2;
my $help = 0;

GetOptions(
    'mode=s'      => \$mode,
    'start=f'     => \$start,
    'end=f'       => \$end,
    'step=f'      => \$step,
    'precision=i' => \$precision,
    'help|h'      => \$help,
) or usage();

sub usage {
    print <<"USAGE";
Usage: perl monscript.pl [--mode c2f|f2c] [--start N] [--end N] [--step N] [--precision P]

Defaults:
  --mode c2f      (Celsius to Fahrenheit)
  --start 0 --end 100 --step 10
  --precision 2

Examples:
  perl monscript.pl --mode c2f --start 0 --end 100 --step 10
  perl monscript.pl --mode f2c --start 32 --end 212 --step 20
  perl monscript.pl --help
USAGE
    exit(1);
}

if ($help) {
    usage();
}

# Set sensible defaults if values not provided
if (!defined $start) {
    $start = ($mode eq 'f2c') ? 32 : 0;
}
if (!defined $end) {
    $end = ($mode eq 'f2c') ? 212 : 100;
}
if (!defined $step) {
    $step = 10;
}

# Validate mode
if ($mode ne 'c2f' && $mode ne 'f2c') {
    die "Invalid mode '$mode'. Use 'c2f' or 'f2c'.\n";
}

# Validate numeric values and step
for my $v ([$start,'start'],[$end,'end'],[$step,'step']) {
    my ($val,$name) = @$v;
    unless (defined $val && $val =~ /^-?\d+(?:\.\d+)?$/) {
        die "Invalid $name value: must be a number.\n";
    }
}
if ($step == 0) { die "Step cannot be zero.\n"; }

# Decide loop direction when start > end
my $ascending = $start < $end ? 1 : 0;

sub c_to_f { my ($c) = @_; return $c * 9/5 + 32; }
sub f_to_c { my ($f) = @_; return ($f - 32) * 5/9; }

my $fmt = "%0.${precision}f";

if ($mode eq 'c2f') {
    printf "%-12s | %-12s\n", 'Celsius', 'Fahrenheit';
    print "" . ('-' x 27) . "\n";
    if ($ascending) {
        for (my $c = $start; $c <= $end + 1e-12; $c += $step) {
            my $f = c_to_f($c);
            printf "% -10s | % -10s\n", sprintf($fmt,$c), sprintf($fmt,$f);
        }
    } else {
        for (my $c = $start; $c >= $end - 1e-12; $c -= abs($step)) {
            my $f = c_to_f($c);
            printf "% -10s | % -10s\n", sprintf($fmt,$c), sprintf($fmt,$f);
        }
    }
} else { # f2c
    printf "%-12s | %-12s\n", 'Fahrenheit', 'Celsius';
    print "" . ('-' x 27) . "\n";
    if ($ascending) {
        for (my $f = $start; $f <= $end + 1e-12; $f += $step) {
            my $c = f_to_c($f);
            printf "% -10s | % -10s\n", sprintf($fmt,$f), sprintf($fmt,$c);
        }
    } else {
        for (my $f = $start; $f >= $end - 1e-12; $f -= abs($step)) {
            my $c = f_to_c($f);
            printf "% -10s | % -10s\n", sprintf($fmt,$f), sprintf($fmt,$c);
        }
    }
}

exit(0);
