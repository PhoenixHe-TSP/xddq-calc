import { BattleProfile } from "@/observable/BattleProfile";
import { makeStyles } from "@fluentui/react-components";
import { observer } from "mobx-react";
import { BattleProfileCardView } from "../BattleProfileCard/BattleProfileCard";

type BattleSimPageProps = {};

const useBattleSimPageStyles = makeStyles({
  root: {},
});

const p = new BattleProfile();
p.name = "刘叔";
p.basic_GongJi = 2078000;
p.basic_ShengMing = 20619500;
p.basic_FangYu = 362357;
p.basic_MingJie = 6466;

p.battle_JiYun = 75.1;
p.battle_BaoJi = 179.5;
p.battle_LianJi = 191.8;
p.battle_ShanBi = 77.9;
p.battle_FanJi = 92.4;
p.battle_XiXue = 73.3;

p.resist_JiYun = 213;
p.resist_BaoJi = 135.1;
p.resist_LianJi = 157.9;
p.resist_ShanBi = 144.1;
p.resist_FanJi = 137.8;
p.resist_XiXue = 142.8;

const BattleSimPage = (props: BattleSimPageProps) => {
  const styles = useBattleSimPageStyles();

  return (
    <div className={styles.root}>
      <BattleProfileCardView profile={p} />
    </div>
  );
};
export const BattleSimPageView = observer(BattleSimPage);
