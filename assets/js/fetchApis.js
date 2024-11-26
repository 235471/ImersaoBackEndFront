const apiUrl = "https://imersaobackendalura-770467420355.southamerica-east1.run.app/fotos";

// Função para buscar os dados do endpoint
export default async function fetchImages() {
  try {
    const response = await fetch(apiURL); // Usando a URL importada
    const data = await response.json();
    console.log("hello");
    return data;
  } catch (error) {
    //console.error("Erro ao buscar dados:", error);
  }
}
