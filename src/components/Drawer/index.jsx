import React, { useState } from "react"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import { makeStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import Toolbar from "@material-ui/core/Toolbar"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import { drawerWidth } from "../../App"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  selected: {
    backgroundColor: "#482880",
  },
}))

export default function DrawerBar({ documents, setActualDocument }) {
  const classes = useStyles()
  const [selectedItem, setSelectedItem] = useState(0)
  const handleClick = (document, index) => {
    setSelectedItem(index)
    setActualDocument(document)
  }
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Markdown Editor
          </Typography>
        </Toolbar>
      </div>
      <Divider />
      <List>
        {documents.map((document, index) => (
          <ListItem
            selected={selectedItem === index}
            button
            key={`${document.name + index}`}
            onClick={() => handleClick(document, index)}
          >
            <ListItemText primary={document.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
