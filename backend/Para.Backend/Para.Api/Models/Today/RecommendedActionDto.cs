namespace Para.Api.Models.Today;

public sealed class RecommendedActionDto
{
    public string Type { get; init; } = default!;
    public int DefaultMinutes { get; init; }
    public bool UseDefault { get; init; }
    public int? ManualMinutes { get; init; }
}
