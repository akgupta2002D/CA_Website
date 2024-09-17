/**
 * Author: Ankit Gupta
 * Project: RA & CA Information Assistant
 *
 * Configuration and utility functions for Llama model via OpenRouter.
 */

import { OpenAI } from 'openai'

// Initialize OpenAI client with OpenRouter configuration
const llamaOpenRouter = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    // 'HTTP-Referer': process.env.YOUR_SITE_URL,
    // 'X-Title': process.env.YOUR_SITE_NAME
  }
})

// Specify the Llama model to be used
export const LLAMA_MODEL_NAME = 'meta-llama/llama-3.1-8b-instruct:free' // Adjust model as per the requirement

// Generate system prompt for the Llama model
export function createLlamaSystemPrompt () {
  return `You are an AI assistant based on the Llama model, specializing in providing information for Residential Assistants and Community Assistants. Your primary function is to provide accurate, detailed, and helpful information about residential life and community management. When responding:

  1. Always prioritize accuracy and relevance to the RA and CA duties.
  2. Use clear and concise language for easy understanding.
  3. Structure your response with clear paragraphs.
  4. Always refer to the provided training manuals or guidelines when answering.
  5. If the provided context doesn't cover the query, clearly state that the information might not be available.
  6. Use official terms and names as used in training materials.
  7. Maintain a professional and supportive tone throughout the conversation.
  8. If a query falls outside the scope of RA and CA responsibilities, politely redirect the conversation to relevant topics.
  9. Provide practical examples or suggestions when relevant to the discussion of residential life or community management.`
}

// Enhance user prompt with relevant context
export function enhanceLlamaPromptWithContext (originalPrompt, context) {
  if (!context.length)
    return `Question related to RA and CA duties: ${originalPrompt}`

  const formattedContext = context
    .map((doc, index) => `Training Material ${index + 1}: ${doc}`)
    .join('\n\n')

  return `
Relevant Training Materials:
${formattedContext}

User's Question about RA and CA Duties:
${originalPrompt}

Guidance for Response:
- Provide a concise and structured answer based on RA and CA training manuals.
- Use bullet points or numbered lists to clarify distinct points.
- Use official terminology as appropriate.
- If the question relates to a specific guideline or section, reference it directly.
- If the training materials provided are insufficient, state this clearly and provide any general knowledge about RA and CA duties that might be relevant.
- Ensure your response aligns with the latest guidelines and practices for RAs and CAs.`
}

export default llamaOpenRouter
