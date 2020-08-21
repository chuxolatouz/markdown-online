import * as React from "react"
import ReactMde from "react-mde"
import * as Showdown from "showdown"
import "react-mde/lib/styles/css/react-mde-all.css"

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
})

export default function MarkdownVisualizer({ actualDocument }) {
  const [value, setValue] = React.useState(actualDocument)
  const [selectedTab, setSelectedTab] = React.useState("preview")
  React.useEffect(() => {
    setValue(actualDocument)
  }, [actualDocument])
  return (
    <ReactMde
      value={value.content}
      onChange={setValue}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
      generateMarkdownPreview={(markdown) =>
        Promise.resolve(converter.makeHtml(markdown))
      }
    />
  )
}
