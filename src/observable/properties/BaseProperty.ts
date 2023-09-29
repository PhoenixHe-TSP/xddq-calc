import { BattleProfile } from "@/observable/BattleProfile";

export type BaseProperty = {
  displayName: string;
  valueType: "number" | "percent";
  getValFromProfile(profile: BattleProfile): number;
};
