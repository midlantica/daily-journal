import { saveJournal } from "./JournalDataProvider.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".formWrap")
const eventHub = document.querySelector(".container")

let visibility = true

eventHub.addEventListener("journalStateChanged", customEvent => {
  render()
})

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveJournalEntry") {
    const theDate = document.getElementById("theDate").value
    const subject = document.getElementById("subject").value
    const entry = document.getElementById("entry").value
    const mood = document.getElementById("mood").value
    // return ${journalDate.value} ${conceptsCovered.value} ${journalEntry.value} ${moodForTheDay.value}

    const newEntry = {
      theDate: theDate,
      subject: subject,
      entry: entry,
      mood: mood,
    }

    // Change API state and application state
    saveJournal(newEntry)
  }
})

const render = () => {
  contentTarget.innerHTML = `
  <form class="dh-Form">
    <fieldset>
      <label for="theDate">Date</label>
      <input type="date" id="theDate">
    </fieldset>
    <fieldset>
      <label for="subject">Subject</label>
      <input type="text" id="subject">
    </fieldset>
    <fieldset>
      <label for="entry">Journal Entry</label>
      <textarea id="entry" cols="30" rows="4"></textarea>
    </fieldset>
    <fieldset>
      <label for="mood">Mood</label>
      <select class="buttonField" id="mood">
        <option value="select" select>Select...</option>
        <option value="sad">Sad</option>
        <option value="indifferent">Indifferent</option>
        <option value="happy">Happy</option>
        <option value="joy">Joy</option>
      </select>
    </fieldset>
    <button id="saveJournalEntry" class="btn-border-one marT1">Save</button>
  </form>
  `
}

export const JournalForm = () => {
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
