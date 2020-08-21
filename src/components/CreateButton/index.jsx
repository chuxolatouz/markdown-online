import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    float: "right",
  },
}))
export default function CreateButton({ documents, setDocuments }) {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleCreate = () => {
    const doc = {
      name: value,
      content: "**Hello world!!!**",
    }
    setDocuments([...documents, doc])
    setValue("")
    setOpen(false)
  }

  return (
    <div className={classes.buttonContainer}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create a Markdown
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a Markdown</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label="Name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreate} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
