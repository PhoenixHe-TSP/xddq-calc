import { makeAutoObservable } from "mobx";
import { deserialize, serializable, serialize } from "serializr";

export class BattleProfile {
  @serializable public name: string = "";

  @serializable public basic_GongJi = 0; // 攻击
  @serializable public basic_ShengMing = 0; // 生命
  @serializable public basic_FangYu = 0; // 防御
  @serializable public basic_MingJie = 0; // 敏捷

  @serializable public battle_JiYun = 0; // 击晕
  @serializable public battle_BaoJi = 0; // 暴击
  @serializable public battle_LianJi = 0; // 连击
  @serializable public battle_ShanBi = 0; // 闪避
  @serializable public battle_FanJi = 0; // 反击
  @serializable public battle_XiXue = 0; // 吸血

  @serializable public resist_JiYun = 0; // 抗击晕
  @serializable public resist_BaoJi = 0; // 抗暴击
  @serializable public resist_LianJi = 0; // 抗连击
  @serializable public resist_ShanBi = 0; // 抗闪避
  @serializable public resist_FanJi = 0; // 抗反击
  @serializable public resist_XiXue = 0; // 抗吸血

  @serializable public special_ZuiZhongZengShang = 0; // 最终增伤
  @serializable public special_ZuiZhongJianShang = 0; // 最终减伤
  @serializable public special_QiangHuaBaoShang = 0; // 强化暴伤
  @serializable public special_RuoHuaBaoShang = 0; // 弱化暴伤
  @serializable public special_QiangHuaZhiLiao = 0; // 强化治疗
  @serializable public special_RuoHuaZhiLiao = 0; // 弱化治疗
  @serializable public special_QiangHuaLingShou = 0; // 强化灵兽
  @serializable public special_RuoHuaLingShou = 0; // 弱化灵兽
  @serializable public special_QiangHuaDaoFaShangHai = 0; // 强化道法伤害
  @serializable public special_RuoHuaDaoFaShangHai = 0; // 弱化道法伤害
  @serializable public special_WuShiZhanDouShuXing = 0; // 无视战斗属性
  @serializable public special_WuShiZhanDouKangXing = 0; // 无视战斗抗性
  @serializable public special_GeDang = 0; // 隔挡
  @serializable public special_KangGeDang = 0; // 抗隔挡
  @serializable public special_PoJia = 0; // 破甲
  @serializable public special_KangPoJia = 0; // 抗破甲

  public constructor() {
    makeAutoObservable(this);
  }

  public serialize(): string {
    return JSON.stringify(serialize(this));
  }
}

export function deserializeBattleProfile(json: string): BattleProfile {
  return deserialize(BattleProfile, JSON.parse(json));
}
