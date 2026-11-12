import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function generateItineraryJSON({
  destination,
  budget,
  startDate,
  endDate,
  interests,
  currency
}) {
  // Mock mode (same as before)
  if (process.env.GEMINI_API_KEY === "test-dummy-gemini-key") {
    console.log("🧪 Using mock Gemini response for testing...");

    return {
      itinerary: [
        {
          date: startDate,
          activities: [
            {
              time: "09:00",
              title: `Welcome to ${destination}`,
              description: `Start your ${budget} budget adventure in ${destination}`,
              category: "sightseeing",
              suggestedArea: "City Center"
            }
          ]
        }
      ],
      notes: `Mock itinerary for ${destination}. Budget: ${budget}, Currency: ${currency || "INR"}`
    };
  }

  const prompt = `
You are a travel planner. Generate a day-by-day itinerary in strict JSON.

destination: ${destination}
dates: ${startDate} to ${endDate}
budget: ${budget}
interests: ${interests.join(", ")}
currency: ${currency || "INR"}

Return ONLY valid JSON in this exact format:

{
  "itinerary": [
    {
      "date": "YYYY-MM-DD",
      "activities": [
        {
          "time": "HH:MM",
          "title": "string",
          "description": "string",
          "category": "sightseeing|food|museum|outdoors|nightlife|shopping|cafe|other",
          "suggestedArea": "string"
        }
      ]
    }
  ],
  "notes": "string"
}

Do not wrap in markdown. No explanations.
`;

  const result = await model.generateContent(prompt);
  let text = result.response.text();

  // Remove possible markdown wrapping
  text = text.replace(/```json/g, "").replace(/```/g, "").trim();

  const json = JSON.parse(text);
  return json;
}
