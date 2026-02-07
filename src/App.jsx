import { useState } from "react";
import InputForm from "./components/InputForm";
import MissionOutput from "./components/MissionOutput";
import { generateMission } from "./utils/missionEngine";

export default function App() {
  const [mission, setMission] = useState(null);

  function handleGenerate(subjects) {
    const result = generateMission(subjects);
    setMission(result);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "14px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          🤖 AI Study Planner — Mission Mode
        </h1>

        <p style={{ color: "#6b7280", marginBottom: "20px" }}>
          Personalized 7-Day Focus Plan for Engineering Students
        </p>

        <InputForm onGenerate={handleGenerate} />
        <MissionOutput mission={mission} />
      </div>
    </div>
  );
}
