const LEVEL: number = 25;

export const CHANCE = 5;

export interface Loot {
  name: string;
  card: string;
  lootCard: string;
}

export interface LootByStage {
  stage: {
    name: string;
    level: number;
    loot: {
      beginner: Loot[];
      intermediate: Loot[];
      expert: Loot[];
    };
  };
}

const mountainBeginner: Loot[] = [
  {
    name: "sand",
    card: "images/cards/conso/CONSO_sand.png",
    lootCard: "images/cases/loot/LOOT_CONSO_sand.png",
  },
  {
    name: "stone",
    card: "images/cards/conso/stone.png",
    lootCard: "images/cases/loot/LOOT_CONSO_stone.png",
  },
  {
    name: "iron",
    card: "images/cards/conso/iron.png",
    lootCard: "images/cases/loot/LOOT_CONSO_iron.png",
  },
  {
    name: "wood",
    card: "images/cards/conso/wood.png",
    lootCard: "images/cases/loot/LOOT_CONSO_wood.png",
  },
  {
    name: "plastic",
    card: "images/cards/conso/plastic.png",
    lootCard: "images/cases/loot/LOOT_CONSO_plastic.png",
  },
  {
    name: "energy",
    card: "",
    lootCard: "images/cases/loot/LOOT_BOOST_energy.png",
  },
  {
    name: "coin",
    card: "",
    lootCard: "images/cases/loot/LOOT_MONEY_coin.png",
  },
];

const mountainIntermediate: Loot[] = [
  ...mountainBeginner,
  {
    name: "iron2",
    card: "images/cards/conso/CONSO_iron2.png",
    lootCard: "images/cases/loot/LOOT_CONSO_iron2.png",
  },
  {
    name: "wood2",
    card: "images/cards/conso/wood2.png",
    lootCard: "images/cases/loot/LOOT_CONSO_wood2.png",
  },
  {
    name: "plastic2",
    card: "images/cards/conso/plastic2.png",
    lootCard: "images/cases/loot/LOOT_CONSO_plastic2.png",
  },
];
const mountainExpert: Loot[] = [
  ...mountainIntermediate,
  {
    name: "carbon",
    card: "images/cards/conso/CONSO_carbon.png",
    lootCard: "images/cases/loot/LOOT_CONSO_carbon.png",
  },
  {
    name: "latex",
    card: "images/cards/conso/latex.png",
    lootCard: "images/cases/loot/LOOT_CONSO_latex.png",
  },
  {
    name: "silicium",
    card: "images/cards/conso/silicium.png",
    lootCard: "images/cases/loot/LOOT_CONSO_silicium.png",
  },
];

export const Loots: LootByStage[] = [
  {
    stage: {
      name: "mountain",
      level: LEVEL,
      loot: {
        beginner: [...mountainBeginner],
        intermediate: [...mountainIntermediate],
        expert: [...mountainExpert],
      },
    },
  },
  {
    stage: {
      name: "ocean",
      level: LEVEL,
      loot: {
        beginner: [...mountainBeginner],
        intermediate: [...mountainIntermediate],
        expert: [...mountainExpert],
      },
    },
  },
];
