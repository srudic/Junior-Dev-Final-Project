export function sortArray({ array, sortBy }) {
  if (sortBy === "") {
    return array;
  }

  // check order -> asc || desc
  let sortOrder = 0;
  if (sortBy.includes("-asc")) {
    sortBy = sortBy.replace("-asc", "");
    sortOrder = 1;
  } else if (sortBy.includes("-desc")) {
    sortBy = sortBy.replace("-desc", "");
    sortOrder = -1;
  }

  let sortedArray = [];
  if (sortBy === "city") {
    sortedArray = array.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else if (sortBy === "creationdate") {
    sortedArray = array.sort((a, b) => {
      const dateA = new Date(
        a[sortBy].seconds * 1000 + a[sortBy].nanoseconds / 1000000
      );
      const dateB = new Date(
        b[sortBy].seconds * 1000 + b[sortBy].nanoseconds / 1000000
      );
      return dateA - dateB;
    });
  }

  if (sortOrder === 1) {
    return [...sortedArray];
  } else {
    return [...sortedArray.reverse()];
  }
}
