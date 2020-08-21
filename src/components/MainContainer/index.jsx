import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import MarkdownEditor from "../MarkdownEditor"
import MarkdownVisualizer from "../MarkdownVisualizer"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  container: {
    height: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export default function CenteredGrid({
  actualDocument,
  setActualDocument,
  setDocuments,
  documents,
}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container} justify="center">
        <Grid item xs={6}>
          <MarkdownEditor
            actualDocument={actualDocument}
            setActualDocument={setActualDocument}
            setDocuments={setDocuments}
            documents={documents}
          />
        </Grid>
        <Grid item xs={6}>
          <MarkdownVisualizer actualDocument={actualDocument} />
        </Grid>
      </Grid>
    </div>
  )
}
