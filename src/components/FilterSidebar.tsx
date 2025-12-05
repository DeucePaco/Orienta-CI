import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
}

interface FilterSidebarProps {
  groups: FilterGroup[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (groupId: string, optionId: string, checked: boolean) => void;
  onClearAll: () => void;
}

export function FilterSidebar({ groups, selectedFilters, onFilterChange, onClearAll }: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const totalSelected = Object.values(selectedFilters).flat().length;

  const filterContent = (
    <>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filtres
          {totalSelected > 0 && (
            <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
              {totalSelected}
            </span>
          )}
        </h3>
        {totalSelected > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClearAll}
            data-testid="button-clear-filters"
          >
            Effacer tout
          </Button>
        )}
      </div>

      <Accordion type="multiple" defaultValue={groups.map(g => g.id)} className="space-y-2">
        {groups.map((group) => (
          <AccordionItem key={group.id} value={group.id} className="border-none">
            <AccordionTrigger className="py-2 hover:no-underline" data-testid={`accordion-${group.id}`}>
              {group.label}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                {group.options.map((option) => {
                  const isChecked = selectedFilters[group.id]?.includes(option.id) ?? false;
                  return (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${group.id}-${option.id}`}
                        checked={isChecked}
                        onCheckedChange={(checked) => {
                          onFilterChange(group.id, option.id, !!checked);
                        }}
                        data-testid={`checkbox-${group.id}-${option.id}`}
                      />
                      <Label
                        htmlFor={`${group.id}-${option.id}`}
                        className="flex-1 text-sm cursor-pointer"
                      >
                        {option.label}
                      </Label>
                      {option.count !== undefined && (
                        <span className="text-xs text-muted-foreground">
                          ({option.count})
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );

  return (
    <>
      <Button
        variant="outline"
        className="lg:hidden mb-4 gap-2"
        onClick={() => setIsOpen(true)}
        data-testid="button-open-filters"
      >
        <Filter className="h-4 w-4" />
        Filtres
        {totalSelected > 0 && (
          <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
            {totalSelected}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-background p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Filtres</h3>
              <Button size="icon" variant="ghost" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            {filterContent}
          </div>
        </div>
      )}

      <Card className="hidden lg:block p-4 sticky top-20">
        {filterContent}
      </Card>
    </>
  );
}
