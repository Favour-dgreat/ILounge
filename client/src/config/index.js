import axios from "axios";

export const AxiosInstance = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		"Content-Type": "application/json",
	},
});