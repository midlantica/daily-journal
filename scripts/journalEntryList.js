import { getJournal, useJournal } from "./JournalDataProvider.js"
import { JournalEntryHtml } from "./JournalEntryHtml.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")

const render = () => {
  getJournal().then(() => {
    const allTheEntries = useJournal()

    contentTarget.innerHTML = allTheEntries
      .map(currentJournalObject => {
        return JournalEntryHtml(currentJournalObject)
      })
      .join("")
  })
}

export const JournalEntryList = () => {
  render()
}
