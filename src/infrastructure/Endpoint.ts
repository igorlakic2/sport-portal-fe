const apiUrl = import.meta.env.VITE_API_URL;

const Endpoint = {
  CATEGORIES: apiUrl + "/categories",
  AUTH: apiUrl + "/auth",
};

export default Endpoint;
