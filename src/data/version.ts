import type { GameVersion } from "@/lib/types";

export const CURRENT_VERSION: GameVersion = {
  code: "kingdom_revival",
  name: "童話：王國復甦",
  server: "台服",
  expansion: "竹取物語",
  expansionDate: "2025-10-01",
};

export const VERSION_LABEL = `${CURRENT_VERSION.server} · ${CURRENT_VERSION.name} · ${CURRENT_VERSION.expansion}`;
