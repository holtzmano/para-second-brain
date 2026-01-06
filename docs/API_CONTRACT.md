# API Contract (examples)

## GET /api/today

Response example:
```json
{
  "date": "2026-01-06",
  "goals": [
    { "id": "g1", "title": "Example goal", "isDone": false }
  ],
  "recommendedActions": [
    {
      "type": "Meditation",
      "defaultMinutes": 10,
      "useDefault": true,
      "manualMinutes": null
    },
    {
      "type": "Movement",
      "defaultMinutes": 20,
      "useDefault": true,
      "manualMinutes": null
    },
    {
      "type": "Reflection",
      "defaultMinutes": 10,
      "useDefault": true,
      "manualMinutes": null
    }
  ]
}
