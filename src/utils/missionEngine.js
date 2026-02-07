export function generateMission(subjects) {
  const prioritized = subjects
    .map((sub) => {
      const score =
        sub.credits * 2 +
        (5 - sub.confidence) +
        sub.weakTopics.length * 2;

      return { ...sub, score };
    })
    .sort((a, b) => b.score - a.score);

  const top = prioritized.slice(0, 2);

  return {
    goal: "Fix Weak Foundations",
    focusTopics: top.flatMap((s) => s.weakTopics.slice(0, 1)),
    reasoning:
      "Subjects selected due to low confidence and higher cognitive load.",
  };
}
