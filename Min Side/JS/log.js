//Logg underside - Søke funksjon
// Filtrer loggene basert på søkefeltets verdi


// Legg til event listeners for søkefelt og søkeikon
document.getElementById('search').addEventListener('input', filterLogs);
document.getElementById('search-icon').addEventListener('click', filterLogs);

function filterLogs() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const logs = document.querySelectorAll('.log');

    logs.forEach(log => {
        const title = log.querySelector('h3').textContent.toLowerCase();
        const content = log.querySelector('p').textContent.toLowerCase(); // Fiks manglende content

        // Sjekk om søket samsvarer med tittel eller innhold
        if (title.includes(searchInput) || content.includes(searchInput)) {
            log.style.display = "block";
        } else {
            log.style.display = "none";
        }
    });
}