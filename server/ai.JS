
const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

const aiClient = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1"
});

router.post("/chat", async (req, res) => {
    try {
        const userPrompt = req.body.message;

        const userMessage = {   
            role: "user",
            content: userPrompt
        };

        const aiResponse = await aiClient.chat.completions.create({
            model: process.env.AI_MODEL,
            messages: [
                {
                    role: "system",
                    content: "You are StyleOne's AI fashion stylist. Suggest outfits, colour combinations and accessories."
                },
                userMessage
            ] 
        });

        res.json({
            reply: aiResponse.choices[0].message.content
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "AI request failed"
        });
    }
});

router.post("/search", async (req, res) => {
  try {
    const userPrompt = req.body.message;

    if (!userPrompt || typeof userPrompt !== "string") {
      return res.status(400).json({
        error: "Please enter a search query"
      });
    }

    const aiResponse = await aiClient.chat.completions.create({
      model: process.env.AI_MODEL,
      messages: [
        {
          role: "system",
          content: `You are an AI product search assistant for StyleOne.

Convert the user's request into product filters.

Available categories:
- men's clothing
- women's clothing
- jewelery
- electronics

Return ONLY a JSON object:
{
  "category": null,
  "maxPriceINR": null
}

Rules:
- Extract the category if mentioned.
- Extract the maximum budget in Indian rupees.
- Use null for unspecified filters.
- Use exact category names from the list.
- Do not include explanations or markdown.`
        },
        {
          role: "user",
          content: userPrompt
        }
      ],
      temperature: 0
    });

    const content = aiResponse.choices[0].message.content;

    const filters = JSON.parse(content);

    res.json(filters);

  } catch (error) {
    console.error("AI Search Error:", error);

    res.status(500).json({
      error: "AI product search failed"
    });
  }
});


module.exports = router;
