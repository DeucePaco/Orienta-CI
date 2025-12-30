// src/components/PrivateSchoolCard.jsx
import React from "react";

export function PrivateSchoolCard({ school }) {
  return (
    <div
      className="
        bg-slate-900 
        rounded-xl 
        overflow-hidden 
        border border-cyan-500/40 
        hover:border-cyan-400 
        shadow-lg 
        hover:shadow-cyan-500/30 
        transition 
        duration-300 
        flex 
        flex-col
      "
    >
      {/* Zone image + logo */}
      <div className="relative h-40 w-full overflow-hidden">
        {/* Photo principale */}
        <img
          src={school.mainImage}
          alt={school.name}
          className="h-full w-full object-cover transform hover:scale-105 transition duration-500"
        />

        {/* Logo superposé en bas à gauche */}
        <div
          className="
            absolute 
            bottom-2 
            left-2 
            bg-white 
            rounded-lg 
            shadow-md 
            p-2 
            flex 
            items-center 
            justify-center
          "
        >
          <img
            src={school.logo}
            alt={`Logo de ${school.name}`}
            className="h-10 w-10 object-contain"
          />
        </div>
      </div>

      {/* Contenu texte */}
      <div className="bg-slate-900 px-4 pt-3 pb-4 flex-1 flex flex-col">
        <h3 className="text-sm font-semibold text-white leading-snug mb-1">
          {school.name}
        </h3>

        <p className="text-xs text-slate-300 mb-2 flex items-center gap-1">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {school.type}
        </p>

        <div className="mt-auto pt-2 border-t border-slate-700 flex items-center justify-between text-xs text-slate-300">
          <div className="flex flex-col">
            <span className="flex items-center gap-1">
              <span className="text-base">📍</span>
              {school.city}
            </span>
            <span className="flex items-center gap-1">
              {school.country} <span>{school.flag}</span>
            </span>
          </div>

          {/* Bouton "Voir plus" avec micro‑animation */}
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
  );
}