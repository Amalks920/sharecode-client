import axiosInstance from "./axiosInstance";

// Define the expected type of the response
interface GenerateCodeResponse {
  code: string; // Adjust this according to the actual structure of the response
}

export async function generateCode(): Promise<GenerateCodeResponse> {
  const response = await axiosInstance.get<GenerateCodeResponse>('/generate-code');
  return response.data;
}
