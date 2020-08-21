import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import CssBaseline from "@material-ui/core/CssBaseline"

import MainContainer from "./components/MainContainer"
import Drawer from "./components/Drawer"
import CreateButton from "./components/CreateButton"
export const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}))

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <MainContainer />
        <CreateButton />
      </main>
    </div>
  )
}
