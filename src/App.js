import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import CssBaseline from "@material-ui/core/CssBaseline"

import MainContainer from "./components/MainContainer"
import Drawer from "./components/Drawer"
import CreateButton from "./components/CreateButton"
import DeleteButton from "./components/DeleteButton"
export const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "90vh",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: "100%",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}))

export default function App() {
  const classes = useStyles()
  const defaultDocument = { name: "demo", content: "***#Hi!***" }
  const [documents, setDocuments] = useState([defaultDocument])
  const [actualDocument, setActualDocument] = useState(defaultDocument)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer documents={documents} setActualDocument={setActualDocument} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <MainContainer
          actualDocument={actualDocument}
          documents={documents}
          setDocuments={setDocuments}
          setActualDocument={setActualDocument}
        />
        <CreateButton
          documents={documents}
          setDocuments={setDocuments}
          setActualDocument={setActualDocument}
        />
        <DeleteButton />
      </main>
    </div>
  )
}
