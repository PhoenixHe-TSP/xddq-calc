import { BattleProfile } from "@/observable/BattleProfile";
import { BaseProperty } from "@/observable/properties/BaseProperty";
import { mergeStyles } from "@fluentui/react";
import { Label, makeStyles } from "@fluentui/react-components";

const useBattleProfileCardValueStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100px",
  },
  label: {
    color: "var(--colorNeutralForeground2)",
    marginRight: "4px",
  },
  value: {},
});

type BattleProfileCardValueProps = {
  property: BaseProperty;
  profile: BattleProfile;
};

const CardValue = (props: BattleProfileCardValueProps) => {
  const { property, profile } = props;
  const styles = useBattleProfileCardValueStyles();

  const displayName = property.displayName;
  const rawValue = property.getValFromProfile(profile);

  let displayValue = "";
  if (property.valueType === "percent") {
    displayValue = `${rawValue.toFixed(1)}%`;
  } else if (property.valueType === "number") {
    if (rawValue > 100000000) {
      displayValue = `${(rawValue / 100000000).toFixed(2)}亿`;
    } else if (rawValue > 10000) {
      displayValue = `${(rawValue / 10000).toFixed(
        rawValue > 10000000 ? 1 : 2
      )}万`;
    } else if (Number.isInteger(rawValue)) {
      displayValue = `${rawValue}`;
    } else {
      displayValue = `${rawValue.toFixed(2)}`;
    }
  }

  return (
    <span className={styles.root}>
      <Label className={mergeStyles(styles.label)}>{displayName}:</Label>
      {displayValue}
    </span>
  );
};
export const CardValueView = CardValue;
