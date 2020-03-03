console.log("JournalEntry.js loaded")

const JournalEntryComponent = entry => {
  return `
    <section id="entry--${entry.id}" class="journalEntry">
      <p class="journal__date">${entry.date} </p>
      <p class="journal__concept">${entry.concept} </p>
      <p class="journal__entry">${entry.entry} </p>
      <p class="journal__mood">${entry.mood}</p>
      <hr>
    </section>
  `
}

export default JournalEntryComponent
