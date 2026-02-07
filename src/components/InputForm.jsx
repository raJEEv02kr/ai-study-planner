export default function InputForm({ onGenerate }) {
  const sampleSubjects = [
    {
      name: "Operating Systems",
      credits: 3,
      confidence: 2,
      weakTopics: ["Deadlocks", "Memory Management"],
    },
    {
      name: "Data Structures",
      credits: 4,
      confidence: 3,
      weakTopics: ["Graphs"],
    },
  ];

  return (
   <button
  onClick={() => onGenerate(sampleSubjects)}
  style={{
    backgroundColor: "#2563eb",
    color: "white",
    padding: "10px 16px",
    borderRadius: "8px",
    marginTop: "15px",
    border: "none",
    cursor: "pointer"
  }}
>
  Generate 7-Day Mission
</button>

  );
}
