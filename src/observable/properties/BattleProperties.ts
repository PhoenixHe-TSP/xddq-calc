import { BaseProperty } from "@/observable/properties/BaseProperty";

export const JiYun_Property: BaseProperty = {
  displayName: "击晕",
  valueType: "percent",
  getValFromProfile(profile) {
    return profile.battle_JiYun;
  },
};

export const BaoJi_Property: BaseProperty = {
  displayName: "暴击",
  valueType: "percent",
  getValFromProfile(profile) {
    return profile.battle_BaoJi;
  },
};

export const LianJi_Property: BaseProperty = {
  displayName: "连击",
  valueType: "percent",
  getValFromProfile(profile) {
    return profile.battle_LianJi;
  },
};

export const ShanBi_Property: BaseProperty = {
  displayName: "闪避",
  valueType: "percent",
  getValFromProfile(profile) {
    return profile.battle_ShanBi;
  },
};

export const FanJi_Property: BaseProperty = {
  displayName: "反击",
  valueType: "percent",
  getValFromProfile(profile) {
    return profile.battle_FanJi;
  },
};

export const XiXue_Property: BaseProperty = {
  displayName: "吸血",
  valueType: "percent",
  getValFromProfile(profile) {
    return profile.battle_XiXue;
  },
};

export const battleProperties: BaseProperty[] = [
  JiYun_Property,
  BaoJi_Property,
  LianJi_Property,
  ShanBi_Property,
  FanJi_Property,
  XiXue_Property,
];
