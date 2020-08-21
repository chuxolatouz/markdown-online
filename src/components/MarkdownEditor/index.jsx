import React, { useState } from "react"
import ReactMde from "react-mde"
import * as Showdown from "showdown"
import "react-mde/lib/styles/css/react-mde-all.css"

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
})
const classes = {
  reactMde: {
    height: "75vh",
  },
}

export default function MarkdownEditor({
  actualDocument,
  setActualDocument,
  documents,
  setDocuments,
}) {
  const [value, setValue] = useState(actualDocument)
  const [selectedTab, setSelectedTab] = React.useState("write")

  const handleChange = (e) => {
    let newDocuments = []
    const index = documents.findIndex((e) => e.name === actualDocument.name)
    value.content = e
    setValue(value)
    setActualDocument(value)
    newDocuments[index] = value
    setDocuments(newDocuments)
  }

  return (
    <ReactMde
      value={value.content}
      classes={classes}
      onChange={handleChange}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
      generateMarkdownPreview={(markdown) =>
        Promise.resolve(converter.makeHtml(markdown))
      }
    />
  )
}
