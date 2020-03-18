console.log("JournalDataProvider.js loaded")

const journal = [
  {
    date: "07/20/2025",
    concept: "HTML & CSS",
    entry:
      "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    mood: "Happy",
  },
  {
    date: "07/22/2025",
    concept: "Second Story",
    entry:
      "This is my second story! We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    mood: "Ok",
  },
  {
    date: "07/23/2025",
    concept: "Third Story",
    entry:
      "Grid layouts with Flexbox in CSS. This is my second story! We talked about HTML components and how to make .",
    mood: "Indifferent",
  },
  {
    date: "07/24/2025",
    concept: "Fourth story",
    entry:
      "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    mood: "Ok",
  },
  {
    date: "07/25/2025",
    concept: "Fifth Story",
    entry:
      "This is my second story! We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    mood: "Happy",
  },
  {
    date: "07/28/2025",
    concept: "Sixth Story",
    entry:
      "Grid layouts with Flexbox in CSS. This is my second story! We talked about HTML components and how to make .",
    mood: "Sad",
  },
]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}

document
  .querySelector("#submitBtn")
  .addEventListener("click", theClickEvent => {
    submitEntry()
  })

const submitEntry = () => {
  const journalDate = document.getElementById("journalDate").value
  const conceptsCovered = document.getElementById("conceptsCovered").value
  const journalEntry = document.getElementById("journalEntry").value
  const moodForTheDay = document.getElementById("moodForTheDay").value
  return `${journalDate.value} ${conceptsCovered.value} ${journalEntry.value} ${moodForTheDay.value}`
}

submitEntry()

export default submitEntry
