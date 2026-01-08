using Microsoft.AspNetCore.Mvc;
using Para.Api.Models.Today;

namespace Para.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class TodayController : ControllerBase
{
    [HttpGet]
    public ActionResult<TodayResponseDto> GetToday()
    {
        var response = new TodayResponseDto
        {
            Date = DateOnly.FromDateTime(DateTime.UtcNow),
            Goals =
            [
                new GoalDto { Id = "g1", Title = "Finish Step 4", IsDone = false },
                //new GoalDto { Id = "g2", Title = "Move body", IsDone = false }
            ],
            RecommendedActions =
            [
                new RecommendedActionDto
                {
                    Type = "Meditation",
                    DefaultMinutes = 10,
                    UseDefault = true,
                    ManualMinutes = null
                },
                new RecommendedActionDto
                {
                    Type = "Movement",
                    DefaultMinutes = 20,
                    UseDefault = true,
                    ManualMinutes = null
                },
                new RecommendedActionDto
                {
                    Type = "Reflection",
                    DefaultMinutes = 10,
                    UseDefault = true,
                    ManualMinutes = null
                }
            ]
        };

        return Ok(response);
    }
}
