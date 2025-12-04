const API_BASE_URL = 'https://barbershop-chatbot-634672397115.europe-west3.run.app';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatRequest {
  memoryId: string;
  message: string;
}

export interface ChatResponse {
  memoryId: string;
  message: string;
}

export const chatbotApi = {
  sendMessage: async (request: ChatRequest): Promise<ChatResponse> => {
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  },
};