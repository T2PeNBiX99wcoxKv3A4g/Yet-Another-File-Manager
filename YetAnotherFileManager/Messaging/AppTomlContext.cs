using System.Text.Json.Serialization;
using Tomlyn.Serialization;
using YetAnotherFileManager.Models;

namespace YetAnotherFileManager.Messaging;

/// <summary>The settings file's TOML serializer, generated so a trimmed build keeps every property.</summary>
[TomlSourceGenerationOptions(
    PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase,
    PropertyNameCaseInsensitive = true,
    WriteIndented = true,
    IndentSize = 2)]
[TomlSerializable(typeof(AppSettings))]
internal partial class AppTomlContext : TomlSerializerContext;
