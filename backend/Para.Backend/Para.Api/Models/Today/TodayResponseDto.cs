using Para.Api.Models.Today;

namespace Para.Api.Models.Today;

public sealed class TodayResponseDto
{
    public DateOnly Date { get; init; }
    public IReadOnlyList<GoalDto> Goals { get; init; } = [];
    public IReadOnlyList<RecommendedActionDto> RecommendedActions { get; init; } = [];
}
