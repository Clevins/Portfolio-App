import CEntry from "./Entry";

export default class CTimeline {
  entries: (CEntry | null)[];

  constructor(entries: CEntry[]) {
    this.entries = this.transformArray(entries);
  }

  // For Timeline grid Layout need an array with the following Pattern
  // Entries = [null, CEntry, CEntry, null, null, CEntry, CEntry, null, null ... CEntry]
  //           [  0      1       2     3     4      5       6      7     8        n]
  transformArray(entries: (CEntry | null)[]) {
    // Initialize the new array with an empty array
    let modifiable = [];

    // Iterate over the original array
    for (let i = 0; i < entries.length; i++) {
      // Insert a null value at the beginning of each block
      if (i % 2 === 0) {
        modifiable.push(null);
      }
      // Insert the current element
      modifiable.push(entries[i]);
      // Insert a null value at the end of each block
      if (i % 2 === 1) {
        modifiable.push(null);
      }
    }

    // Add the last null if the length of entries is even
    if (entries.length % 2 === 0) {
      modifiable.push(null);
    }

    return modifiable;
  }
}
