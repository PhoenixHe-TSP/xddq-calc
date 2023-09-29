import React, { useState } from "react";
import "@/App.css";
import {
  FluentProvider,
  teamsDarkTheme,
  makeStyles,
  Theme,
} from "@fluentui/react-components";
import { PageHeaderView } from "@/components/PageHeader";
import { HeaderState } from "./observable/HeaderState";
import { PageContentView } from "./components/PageContent";

const useAppStyles = makeStyles({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
  },
});

const theme: Theme = {
  ...teamsDarkTheme,
};

export const App = () => {
  const [headerState] = useState(() => new HeaderState());
  const appStyle = useAppStyles();

  return (
    <FluentProvider theme={theme}>
      <div className={appStyle.root}>
        <PageContentView headerState={headerState} />
        <PageHeaderView headerState={headerState} />
      </div>
    </FluentProvider>
  );
};
