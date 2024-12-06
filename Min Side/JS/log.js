//Logg underside - Søke funksjon
document.getElementById('search').addEventListener('input', filterLogs);
document.getElementById('search-icon').addEventListener('click', filterLogs);

// Listen for ENTER key press for responsive search
document.getElementById('search').addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        filterLogs();
    }
});

function filterLogs() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const logs = document.querySelectorAll('.log');

    logs.forEach(log => {
        const titleElement = log.querySelector('h3');
        const title = titleElement.textContent.toLowerCase();

        // Check if search input matches either title or content
        if (title.includes(searchInput)) {
            log.style.display = "block"; // Show matching log
        } else {
            log.style.display = "none"; // Hide non-matching log
        }
    });
}
