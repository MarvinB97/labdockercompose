// Lista de servicios
const services = [
  { name: "Service 1", url: "http://localhost:5001/api" },
  { name: "Service 2", url: "http://localhost:5002/api" },
  { name: "Service 3", url: "http://localhost:5003/api" },
  { name: "Service 4", url: "http://localhost:5004/api" },
];

const list = document.getElementById("services-list");

// Función para crear un loader con texto quieto
function createLoader() {
  const loader = document.createElement("div");
  loader.className = "loader";

  const spinner = document.createElement("div");
  spinner.className = "spinner";

  const text = document.createElement("div");
  text.className = "spinner-text";
  text.textContent = "Loading...";

  loader.appendChild(spinner);
  loader.appendChild(text);

  return loader;
}

services.forEach((service) => {
  const li = document.createElement("li");
  const loader = createLoader();

  li.innerHTML = `<strong>${service.name}:</strong>`;
  li.appendChild(loader);
  list.appendChild(li);

  fetch(service.url)
    .then((response) => response.json())
    .then((data) => {
      li.innerHTML = `<strong>${service.name}:</strong> ${data.message}`;
    })
    .catch((error) => {
      console.error("Error connecting to the service:", service.name, error);
      li.innerHTML = `<strong>${service.name}:</strong> ❌ Not available`;
      li.style.color = "red";
    });
});
