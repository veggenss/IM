
document.cookie = "username=spyware; expires=Thu, 01 Jan 2026 00:00:00 GMT"
// Data storage for daily waste
const data = [];

// Form and table elements
const form = document.getElementById('data-form');
const tableBody = document.querySelector('#data-table tbody');
const chartCanvas = document.getElementById('chart');

// Chart instance
let chart;

// Add data to the table and chart
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const day = document.getElementById('day').value;
    const weight = parseFloat(document.getElementById('weight').value);

    // Add to data array
    data.push({ day, weight });

    // Update table
    const row = document.createElement('tr');
    row.innerHTML = `<td>${day}</td><td>${weight} kg</td>`;
    tableBody.appendChild(row);

    // Update chart
    updateChart();
});

// Update chart
// Update chart function
function updateChart() {
    const labels = data.map(entry => entry.day);
    const values = data.map(entry => entry.weight);

    if (chart) chart.destroy(); // Destroy previous chart

    chart = new Chart(chartCanvas, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Avfall (kg)',
                data: values,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.8)', // Gul
                    'rgba(75, 192, 192, 0.8)', // Lys blågrønn
                    'rgba(54, 162, 235, 0.8)', // Blå
                    'rgba(153, 102, 255, 0.8)', // Lilla
                    'rgba(255, 99, 132, 0.8)', // Rosa
                    'rgba(255, 159, 64, 0.8)', // Oransje
                    'rgba(255, 99, 255, 0.8)'  // Lys rosa
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white' // Make the legend text white
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white' // Make x-axis labels white
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)' // Light gridlines
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'white' // Make y-axis labels white
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)' // Light gridlines
                    }
                }
            }
        }
    });
}

// Quiz data
const quizQuestions = [
    { item: 'Plastflaske', correct: 'Plast' },
    { item: 'Avis', correct: 'Papir' },
    { item: 'Matrester', correct: 'Restavfall' },
    { item: 'Metallboks', correct: 'Metal' },
    { item: 'Pizzakartong', correct: 'Papir' },
    { item: 'Drikkekartong', correct: 'Papir' },
    { item: 'Lyspære', correct: 'Glass' },
    { item: 'Batteri', correct: 'Farlig Avfall' },
    { item: 'Kjøttbein', correct: 'Restavfall' },
    { item: 'Kulepenn', correct: 'Restavfall' },
    { item: 'Kaffefilter', correct: 'Restavfall' },
    { item: 'Sugerør', correct: 'Plast' },
    { item: 'Glassflaske', correct: 'Glass' },
    { item: 'Syltetøyglass', correct: 'Glass' },
    { item: 'Melkekartong', correct: 'Papir' },
    { item: 'Aluminiumsfolie', correct: 'Metal' },
    { item: 'Mobiltelefon', correct: 'Elektrisk avfall' },
    { item: 'Fyrstikker', correct: 'Restavfall' },
    { item: 'Blomsterjord', correct: 'Restavfall' },
    { item: 'Tannbørste', correct: 'Plast' },
    { item: 'Tomatboks', correct: 'Metal' },
    { item: 'Bok', correct: 'Papir' },
    { item: 'Knust tallerken', correct: 'Restavfall' },
    { item: 'CD-plate', correct: 'Restavfall' },
    { item: 'Malingsspann', correct: 'Metal' },
];


// Shuffle the questions to randomize the order
let shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);
let currentQuestionIndex = 0;
let score = 0; // To track the score

// Quiz elements
const questionElement = document.getElementById('question');
const feedbackElement = document.getElementById('quiz-feedback');
const quizButtons = document.querySelectorAll('.quiz-btn');

// Load quiz question
function loadQuizQuestion() {
    // Check if we've gone through all the questions
    if (currentQuestionIndex >= shuffledQuestions.length) {
        // Display the final score
        questionElement.textContent = `Du har fullført quizen! Du fikk ${score} av ${shuffledQuestions.length} poeng.`;
        feedbackElement.textContent = '';
        quizButtons.forEach(button => button.style.display = 'none'); // Hide buttons
        questionCounterElement.textContent="";
        return;
    }

    // Load the next question
    const question = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = `Hvor skal du sortere ${question.item}?`;
    feedbackElement.textContent = '';

    questionCounterElement.textContent = `Spørsmål ${currentQuestionIndex + 1} av ${shuffledQuestions.length}`;
}

// Check answer
quizButtons.forEach(button => {
    button.addEventListener('click', () => {
        const userAnswer = button.getAttribute('data-answer');
        const correctAnswer = shuffledQuestions[currentQuestionIndex].correct;

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = 'Riktig!';
            feedbackElement.style.color = 'green';
            score++; // Increment score if correct
        } else {
            feedbackElement.textContent = `Feil. Riktig svar er: ${correctAnswer}.`;
            feedbackElement.style.color = 'red';
        }

        // Move to the next question after a short delay
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuizQuestion();
        }, 1000);
    });
});

// Initialize quiz
loadQuizQuestion();


document.addEventListener("DOMContentLoaded", function() {
    // Fetch the IP address from the API
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            // Display the IP address on the screen
            document.getElementById("ip-address").textContent = data.ip;
        })
        .catch(error => {
            console.error("Error fetching IP address:", error);
        });
});