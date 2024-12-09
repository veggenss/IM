let navnListe = [];

// Funksjon for å .....?
function leggTilNavn() {
    // Hent verdien fra inputfeltet og fjern ekstra mellomrom
    let navnInput = document.getElementById("navnInput").value.trim();
    if (navnInput !== "") {
        // Hvis navnet ikke er tomt, legg det til i listen
        navnListe.push(navnInput);

        // Vis en melding om at navnet er lagt til
        document.getElementById("output").innerHTML = `<p>${navnInput} er lagt til i listen.</p>`;

        // Tøm ....?
        document.getElementById("navnInput").value = "";
    } else {
        // Hvis inputfeltet er tomt, vis en ????
        document.getElementById("output").innerHTML = "<p>Vennligst skriv inn et gyldig navn.</p>";
    }
}

// Funksjon for å vise ....?
function visListe() {
    if (navnListe.length > 0) {
        // let navnListe = [];
        
        // Function for adding a name to the list
        function leggTilNavn() {
            // Get the value from the input field and remove extra spaces
            let navnInput = document.getElementById("navnInput").value.trim();
            if (navnInput !== "") {
                // If the name is not empty, add it to the list
                navnListe.push(navnInput);
        
                // Display a message indicating that the name has been added
                document.getElementById("output").innerHTML = `<p>${navnInput} er lagt til i listen.</p>`;
        
                // Clear the input field
                document.getElementById("navnInput").value = "";
            } else {
                // If the input field is empty, display an error message
                document.getElementById("output").innerHTML = "<p>Vennligst skriv inn et gyldig navn.</p>";
            }
        }
        
        // Function for displaying the list of names
        function visListe() {
            if (navnListe.length > 0) {
                // If the list is not empty, build an HTML structure with the names
                let listeHTML = "<h2>Navn i listen:</h2><ul>";
                for (let i = 0; i < navnListe.length; i++) {
                    // Add each name as a list item
                    listeHTML += `<li>${navnListe[i]}</li>`;
                }
                listeHTML += "</ul>";
        
                // Display the list
                document.getElementById("output").innerHTML = listeHTML;
            } else {
                // If the list is empty, display an empty list message
                document.getElementById("output").innerHTML = "<p>Listen er tom.</p>";
            }
        }
        
        // Function to end the program
        function avslutt() {
            // Display a message indicating that the program has ended
            document.getElementById("output").innerHTML = "<p>Programmet er avsluttet. Takk for bruk!</p>";
        
            // Disable all buttons
            document.getElementById("leggTilKnapp").disabled = true;
            document.getElementById("visListeKnapp").disabled = true;
            document.getElementById("avsluttKnapp").disabled = true;
        }
        
        // Add event listeners for the buttons
        document.getElementById("leggTilKnapp").addEventListener("click", leggTilNavn); // Run leggTilNavn when the "Legg til navn"-button is clicked
        document.getElementById("visListeKnapp").addEventListener("click", visListe);   // Run visListe when the "Vis listen"-button is clicked
        document.getElementById("avsluttKnapp").addEventListener("click", avslutt);    // Run avslutt when the "Avslutt"-button is clickedHvis listen ikke er tom, bygg en HTML-struktur med navnene
        let listeHTML = "<h2>Navn i listen:</h2><ul>";
        if (let i = 0; i < navnListe.length; i++) {
            // Legg til hvert navn som en listepunkt
            listeHTML += `<li>${navnListe[i]}</li>`;
        }
        listeHTML += "</ul>";

        // Vis listen i ???
        document.getElementById("output").innerHTML = listeHTML;
    } else {
        // Hvis listen er tom, vis en ?????
        document.getElementById("output").innerHTML = "<p>Listen er tom.</p>";
    }
}

// Funksjon for å avslutte programmet
avslutt() {
    // Vis en melding om at programmet er avsluttet
    document.getElementById("output").innerHTML = "<p>Programmet er avsluttet. Takk for bruk!</p>";

    // Deaktiver alle knappene
    document.getElementById("leggTilKnapp").disabled = true;
    document.getElementById("visListeKnapp").disabled = true;
    document.getElementById("avsluttKnapp").disabled = true;
}

// Legg til Event Listeners for knappene
document.getElementById("leggTilKnapp").addEventListener("click", leggTilNavn); // Kjør leggTilNavn når "Legg til navn"-knappen klikkes
document.getElementById("visListeKnapp").addEventListener("click", visListe);   // Kjør visListe når "Vis listen"-knappen klikkes
document.getElementById("avsluttKnapp").addEventListener("click", avslutt);    // Kjør avslutt når "Avslutt"-knappen klikkes
