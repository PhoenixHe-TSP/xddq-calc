import { BaseProperty } from "@/observable/properties/BaseProperty";

export const GongJi_Property: BaseProperty = {
  displayName: "攻击",
  valueType: "number",
  getValFromProfile(profile) {
    return profile.basic_GongJi;
  },
};

export const FangYu_Property: BaseProperty = {
  displayName: "防御",
  valueType: "number",
  getValFromProfile(profile) {
    return profile.basic_FangYu;
  },
};

export const ShengMing_Property: BaseProperty = {
  displayName: "生命",
  valueType: "number",
  getValFromProfile(profile) {
    return profile.basic_ShengMing;
  },
};

export const MingJie_Property: BaseProperty = {
  displayName: "敏捷",
  valueType: "number",
  getValFromProfile(profile) {
    return profile.basic_MingJie;
  },
};

export const basicProperties: BaseProperty[] = [
  GongJi_Property,
  ShengMing_Property,
  FangYu_Property,
  MingJie_Property,
];
