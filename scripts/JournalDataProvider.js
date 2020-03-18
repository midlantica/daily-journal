let journal = []

const eventHub = document.querySelector(".entryLog")

const dispatchStateChangeEvent = () => {
  const journalStateChangedEvent = new CustomEvent("journalStateChanged")

  eventHub.dispatchEvent(journalStateChangedEvent)
}

export const useJournal = () => journal.sort((c, n) => n.date - c.date).slice()

export const getJournal = () => {
  return fetch("http://localhost:8088/journal")
    .then(response => response.json())
    .then(parsedJournal => {
      journal = parsedJournal
    })
}

export const saveJournal = JournalEntry => {
  return fetch("http://localhost:8088/journal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(JournalEntry),
  })
    .then(getJournal)
    .then(dispatchStateChangeEvent)
}

// document.querySelector("#submitBtn").addEventListener("click", theClickEvent => {
//   submitEntry()
// })

// export const submitEntry = () => {
//   const journalDate = document.getElementById("journalDate").value
//   const conceptsCovered = document.getElementById("conceptsCovered").value
//   const journalEntry = document.getElementById("journalEntry").value
//   const moodForTheDay = document.getElementById("moodForTheDay").value
//   return `${journalDate.value} ${conceptsCovered.value} ${journalEntry.value} ${moodForTheDay.value}`
// }

// submitEntry()
