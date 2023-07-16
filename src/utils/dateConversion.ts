export function convertToISODate(dateString: string): string {
  const dateParts = dateString.split(' ');
  const day = parseInt(dateParts[0], 10);
  const monthIndex = getMonthIndex(dateParts[1]);
  const year = parseInt(dateParts[2], 10);

  const formattedDate = new Date(year, monthIndex, day).toLocaleDateString(
    'en-GB',
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }
  );

  return formattedDate;
}

function getMonthIndex(monthName: string): number {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months.indexOf(monthName);
}

// Example usage
const inputDate = '20 July 2023';
const formattedDate = convertToISODate(inputDate);

console.log(formattedDate); // Output: "07/20/2023"
