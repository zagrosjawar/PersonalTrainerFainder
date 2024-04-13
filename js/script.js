        function findPersonalTrainers() {
            const url = "https://api.npoint.io/78e2172785e323d665ad";
            fetch(url)
            .then(response => response.json())
            .then(function (data) {
                // test data content:
                //console.log("Data: ", data);
                if (!data) {
                    alert("Failed to fetch Personal Trainer's Data. Please try again.");                
                    return;
                } else {
                    let filteredData = filterData(data);
                    displayTrainers(filteredData);
                }
            })
            .catch(function(error) {
                console.error("Error: ", error);
                alert("There was an error fetching the data.");
            });
        }

        function filterData(data) {
            let expertise = document.getElementById("expertise_select").value;
            let communication = document.getElementById("communication_select").value;
            let filteredData = data.filter(function (pt) {
                return pt.expertise === expertise && pt.communication === communication;
            });
            return filteredData;
        }

        



        // data is a list [] of personal trainers bjects {}
        function displayTrainers(data) {
            let container = document.getElementById("trainers");
            container.innerHTML = '';  // Clear the container first
            let personalTrainerDiv = document.createElement("div");
            personalTrainerDiv.setAttribute("class", "personalTrainerDiv"); // to style it later
        
            // If no data is found, display a message - empy array
            if (data.length === 0) {
                personalTrainerDiv.innerHTML = "<h2>No PT found with the selected criteria</h2>";
                container.appendChild(personalTrainerDiv);
                return;
            }
            
            // console.log("Filtered Data: ", data);
            let infoHTML = "";
            for (let i = 0; i < data.length; i++) {
                let name = data[i].name;
                let exp = data[i].expertise;
                let com = data[i].communication;
                let bio = data[i].bio;

                infoHTML += `
                <h2>PT name: ${name}</h2>
                <p><b>Expertise:</b> ${exp}</p>
                <p><b>Communication:</b> ${com}</p>
                <p>${bio}</p>
                <hr>
                `;
        
            }

            personalTrainerDiv.innerHTML = infoHTML;
            container.appendChild(personalTrainerDiv);


            

        
            
        }
// End of script.js