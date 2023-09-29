import {
  BattleProfile,
  deserializeBattleProfile,
} from "@/observable/BattleProfile";

test("BattleProfile", () => {
  const profile = new BattleProfile();
  profile.basic_FangYu = 100;

  const profile_ser = profile.serialize();
  expect(profile_ser).toMatchInlineSnapshot(`"{\\"name\\":\\"\\",\\"basic_GongJi\\":0,\\"basic_ShengMing\\":0,\\"basic_FangYu\\":100,\\"basic_MingJie\\":0,\\"battle_JiYun\\":0,\\"battle_BaoJi\\":0,\\"battle_LianJi\\":0,\\"battle_ShanBi\\":0,\\"battle_FanJi\\":0,\\"battle_XiXue\\":0,\\"resist_JiYun\\":0,\\"resist_BaoJi\\":0,\\"resist_LianJi\\":0,\\"resist_ShanBi\\":0,\\"resist_FanJi\\":0,\\"resist_XiXue\\":0,\\"special_ZuiZhongZengShang\\":0,\\"special_ZuiZhongJianShang\\":0,\\"special_QiangHuaBaoShang\\":0,\\"special_RuoHuaBaoShang\\":0,\\"special_QiangHuaZhiLiao\\":0,\\"special_RuoHuaZhiLiao\\":0,\\"special_QiangHuaLingShou\\":0}"`);

  const profile_deser = deserializeBattleProfile(profile_ser);
  expect(profile_deser.basic_FangYu).toBe(100);
});
