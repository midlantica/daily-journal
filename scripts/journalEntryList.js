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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const EntryListComponent = () => {
//   // Use the journal entry data from the data provider component
//   const entries = useJournalEntries()

//   for (const entry of entries) {
//     /*
//       Invoke the component that returns an
//       HTML representation of a single entry
//     */
//     entryLog.innerHTML += JournalEntryComponent(entry)
//     // console.log(`This is a joutnal thing: ${journal}`)
//   }
// }

// export default EntryListComponent
