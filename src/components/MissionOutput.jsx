export default function MissionOutput({ mission }) {
  if (!mission) return null;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        backgroundColor: "#ffffff",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        🚀 Next 7 Days Mission
      </h2>

      <p style={{ marginTop: "8px", fontSize: "16px" }}>
        {mission.goal}
      </p>

      <h3
        style={{
          fontWeight: "600",
          marginTop: "16px",
          marginBottom: "6px",
        }}
      >
        Focus Topics:
      </h3>

      <ul style={{ paddingLeft: "20px" }}>
        {mission.focusTopics.map((t, i) => (
          <li key={i} style={{ marginBottom: "4px" }}>
            {t}
          </li>
        ))}
      </ul>

      <p
        style={{
          fontSize: "14px",
          color: "#6b7280",
          marginTop: "14px",
        }}
      >
        {mission.reasoning}
      </p>
    </div>
  );
}
