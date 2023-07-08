const apiKey = "AIzaSyBLROUu9avV4AZwd8xOfbqc6jFZjZS9hKc";

 export const handleSearch = async ( query: string) => {
    try {
      const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${apiKey}&query=${query}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
  };

  export const eventPlace = async ( address : string) => {
  try {
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`; 
  const response = await fetch(apiUrl);
  const data = await response.json();
  if (data.results.length > 0) {
    const { lat, lng } = data.results[0].geometry.location;
    
    return {lat, lng}
  } else {
    throw new Error("Nenhum resultado encontrado.");
  }
} catch (error) {
  console.error(error);
}
}