// const journal = [
//   {
//     date: "07/24/2025",
//     concept: "HTML & CSS",
//     entry:
//       "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
//     mood: "Ok"
//   }
// ]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
// export const useJournalEntries = () => {
//   const sortedByDate = journal.sort(
//     (currentEntry, nextEntry) =>
//       Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//   )
//   return sortedByDate
// }

document
  .querySelector("#submitBtn")
  .addEventListener("click", theClickEvent => {
    console.log("111111111111111")
    submitEntry()
  }
)

const submitEntry = () => {
  const journalDate = document.getElementById("journalDate").value
  const conceptsCovered = document.getElementById("conceptsCovered").value
  const journalEntry = document.getElementById("journalEntry").value
  const moodForTheDay = document.getElementById("moodForTheDay").value
  console.log(
    `${journalDate} ${conceptsCovered} ${journalEntry} ${moodForTheDay}`
  )
  console.log("222222222")
}
// submitEntry()