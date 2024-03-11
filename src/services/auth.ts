import { FormValues } from "../components/Access/types";

export const loginUser = async (data: FormValues) => {
    return fetch(`${import.meta.env.VITE_API_HOSTNAME}/auth/login`, {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "Application/json"
        }
    }).then(response => {
        if (!response.ok) throw {message: "An error occurred while processing the request"}
        return response.json()
    })
}