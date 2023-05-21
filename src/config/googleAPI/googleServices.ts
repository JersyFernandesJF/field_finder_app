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