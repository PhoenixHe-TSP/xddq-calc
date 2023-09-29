import { BaseProperty } from "./BaseProperty";

export const KangJiYun_Property: BaseProperty = {
  displayName: "抗击晕",
  valueType: "percent",
  getValFromProfile(profile) {
    return profile.resist_JiYun;
  },
};

export const KangBaoJi_Property: BaseProperty = {
  displayName: "抗暴击",
  valueType: "percent",
  getValFromProfile(profile) {
    return profile.resist_BaoJi;
  },
};

export const KangLianJi_Property: BaseProperty = {
  displayName: "抗连击",
  valueType: "percent",
  getValFromProfile(profile) {
    return profile.resist_LianJi;
  },
};

export const KangShanBi_Property: BaseProperty = {
  displayName: "抗闪避",
  valueType: "percent",
  getValFromProfile(profile) {
    return profile.resist_ShanBi;
  },
};

export const KangFanJi_Property: BaseProperty = {
  displayName: "抗反击",
  valueType: "percent",
  getValFromProfile(profile) {
    return profile.resist_FanJi;
  },
};

export const KangXiXue_Property: BaseProperty = {
  displayName: "抗吸血",
  valueType: "percent",
  getValFromProfile(profile) {
    return profile.resist_XiXue;
  },
};

export const resistProperties: BaseProperty[] = [
  KangJiYun_Property,
  KangBaoJi_Property,
  KangLianJi_Property,
  KangShanBi_Property,
  KangFanJi_Property,
  KangXiXue_Property,
];
