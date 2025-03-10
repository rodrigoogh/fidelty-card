import { apiConfig } from "../api/config";

export async function fetchClient(id) {
    try {
        if (isNaN(id)) {
            throw new Error("Invalid ID.");
        }
        const response = await fetch(`${apiConfig.baseURL}/clients/${id}`);

        if (response.status === 404) {
            throw new Error('ID not found.');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        alert(`Something went wrong when fetching client: ${error.message}`);
    }
}