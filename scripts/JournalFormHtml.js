export const JournalFormHtml = entryObj => {
  return `
  <h4>Entry</h4>
  <form>
    <fieldset>
      <label for="date">Date</label>
      <input type="date" id="date" name="${entryObj.theDate}">
    </fieldset>
    <fieldset>
      <label for="subject">Subject</label>
      <input type="text" id="subject" name="${entryObj.subject}">
    </fieldset>
    <fieldset>
      <label for="entry">Journal Entry</label>
      <textarea id="entry" name="${entryObj.entry}" cols="30" rows="4"></textarea>
    </fieldset>
    <fieldset>
      <label for="mood">Mood</label>
      <select class="buttonField" id="mood" name="${entryObj.mood}">
        <option value="select" select>Select...</option>
        <option value="sad">Sad</option>
        <option value="indifferent">Indifferent</option>
        <option value="happy">Happy</option>
        <option value="joy">Joy</option>
      </select>
    </fieldset>
    <button id="saveJournalEntry">Save</button>
  </form>
  `
}
