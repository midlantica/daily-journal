export const JournalEntryHtml = entryObj => {
  return `
    <h3 class="marT0">Entries.....</h3>
    <section id="entry--${entryObj.id}" class="journalEntry">
      <p class="journal__date">${entryObj.date} </p>
      <p class="journal__concept">${entryObj.subject} </p>
      <p class="journal__entry">${entryObj.entry} </p>
      <p class="journal__mood">${entryObj.mood}</p>
      <hr>
    </section>
  `
}
