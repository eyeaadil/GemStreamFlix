import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constant";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export default genAI;

// const model = genAI.getGenerativeModel({ model: "Gemini 1.5 Flash"});