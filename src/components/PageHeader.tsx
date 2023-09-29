import { observer } from "mobx-react";
import { HeaderState, HeaderPageEnum } from "@/observable/HeaderState";
import { Button, makeStyles, shorthands } from "@fluentui/react-components";
import {
  TableDeleteColumn24Filled,
  ContentSettings24Filled,
} from "@fluentui/react-icons";

type HeaderButtonProps = {
  pageEnum: HeaderPageEnum;
  icon: JSX.Element;
  text: string;
  headerState: HeaderState;
};

const HeaderButton = (props: HeaderButtonProps) => {
  return (
    <Button
      shape="square"
      icon={props.icon}
      appearance={
        props.pageEnum === props.headerState.currentPage
          ? "primary"
          : "secondary"
      }
      onClick={() => props.headerState.setPage(props.pageEnum)}
    >
      {props.text}
    </Button>
  );
};
const HeaderButtonView = observer(HeaderButton);

const useHeaderStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "32px",
    backgroundColor: "#fff",
    marginTop: "-1px",
    marginBottom: "-1px",
    ...shorthands.borderTop("1px", "solid", "#ccc"),
  },
});

type PageHeaderProps = {
  headerState: HeaderState;
};

const PageHeader = (props: PageHeaderProps) => {
  const { headerState } = props;
  const headerStyles = useHeaderStyles();

  return (
    <div className={headerStyles.root}>
      <HeaderButtonView
        icon={<TableDeleteColumn24Filled />}
        text="对战模拟器"
        pageEnum={HeaderPageEnum.BattleSim}
        headerState={headerState}
      />
      <HeaderButtonView
        icon={<ContentSettings24Filled />}
        text="数据档案"
        pageEnum={HeaderPageEnum.Profiles}
        headerState={headerState}
      />
    </div>
  );
};

export const PageHeaderView = observer(PageHeader);
