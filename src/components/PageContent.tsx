import { HeaderPageEnum, HeaderState } from "@/observable/HeaderState";
import { makeStyles, shorthands } from "@fluentui/react-components";
import { observer } from "mobx-react";
import { BattleSimPageView } from "./BattleSim/BattleSimPage";

const usePageContentStyles = makeStyles({
  root: {
    flexGrow: 1,
    overflowY: "scroll",
    ...shorthands.padding("16px", "24px"),
  },
});

type PageContentProps = {
  headerState: HeaderState;
};

const getPageFromEnum = (headerState: HeaderState) => {
  if (headerState.currentPage === HeaderPageEnum.BattleSim) {
    return <BattleSimPageView />;
  }

  return undefined;
};

const PageContent = (props: PageContentProps) => {
  const styles = usePageContentStyles();

  const page = getPageFromEnum(props.headerState);

  return <div className={styles.root}>{page}</div>;
};
export const PageContentView = observer(PageContent);
