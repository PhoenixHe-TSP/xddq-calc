import { BattleProfile } from "@/observable/BattleProfile";
import { basicProperties } from "@/observable/properties/BasicProperties";
import {
  Body1,
  Card,
  CardHeader,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";
import { observer } from "mobx-react";
import { CardValueView } from "@/components/BattleProfileCard/BattleProfileCardValue";
import { battleProperties } from "@/observable/properties/BattleProperties";
import { resistProperties } from "@/observable/properties/ResistProperties";

const useBattleProfileCardStyles = makeStyles({
  root: {
    backgroundColor: "#304146",
    color: "#f3e2a5",
  },
  propertyContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#304146",
    ...shorthands.borderTop("4px", "solid", "#3c595e"),
    ...shorthands.margin("-10px", "-12px", "-6px", "-12px"),
    ...shorthands.padding("8px", "12px"),
  },
});

type BattleProfileCardProps = {
  profile: BattleProfile;
};

const BattleProfileCard = (props: BattleProfileCardProps) => {
  const { profile } = props;
  const styles = useBattleProfileCardStyles();

  return (
    <Card className={styles.root}>
      <CardHeader
        header={
          <Body1>
            <b>{profile.name}</b>
          </Body1>
        }
      />
      <div className={styles.propertyContainer}>
        {basicProperties.map((property) => (
          <CardValueView profile={profile} property={property} />
        ))}
      </div>
      <div className={styles.propertyContainer}>
        {battleProperties.map((property) => (
          <CardValueView profile={profile} property={property} />
        ))}
      </div>
      <div className={styles.propertyContainer}>
        {resistProperties.map((property) => (
          <CardValueView profile={profile} property={property} />
        ))}
      </div>
    </Card>
  );
};
export const BattleProfileCardView = observer(BattleProfileCard);
