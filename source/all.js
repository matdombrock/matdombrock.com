if (ssmeta && ssmeta.type && ssmeta.type == "post") {
  const ssContent = document.querySelector('.ss-content');
  // Add the date to the top of post pages 
  const date = ssmeta.date;
  if (date) {
    const [year, month] = date.split('-');
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[parseInt(month, 10) - 1]; // "January"
    const dateElement = document.createElement('div');
    dateElement.className = 'ss-post-date';
    dateElement.innerHTML = `<strong>Dated:</strong> ${monthName} ${year}`;
    ssContent.insertBefore(dateElement, ssContent.firstChild);
  }
}

// Handle the year in the footer
const footerYear = document.getElementById('footer-year');
if (footerYear) {
  const currentYear = new Date().getFullYear();
  footerYear.textContent = currentYear;
}
