namespace Para.Api.Models.Today;

public sealed class GoalDto
{
    public string Id { get; init; } = default!;
    public string Title { get; init; } = default!;
    public bool IsDone { get; init; }
}
