# 🤖 AI Study Planner — Mission Mode

An AI-powered study planner designed specifically for engineering students.  
This project generates a personalized **7-Day Study Mission** based on subject credits, weak areas, and confidence levels to help students study smarter.

---

## 🚀 Problem Statement
Engineering students often struggle to balance multiple technical subjects with different cognitive loads and deadlines.  
Traditional planners fail to adapt dynamically to learning difficulty and priorities.

---

## 💡 Solution
This AI Study Planner introduces **Mission Mode**, which:
- Calculates priority using credits, confidence level, and weak topics
- Generates a focused weekly mission
- Helps students avoid random or inefficient study patterns

---

## ⚙️ Features
- AI-based priority scoring
- Personalized 7-Day Mission generation
- Clean dashboard interface
- Real-time mission output

---

## 🧠 How It Works
The system ranks subjects using:

Priority Score =
(credits × 2) + (5 − confidence) + weakTopics.length × 2

Higher score → Higher priority in the mission.

---

## 🛠️ Tech Stack
- React (Vite)
- JavaScript
- CSS

---

## 🎥 Demo Video
https://drive.google.com/file/d/1kejKvrOi3tLrvEW71RnboagmaaifMnWo/view?usp=sharing

---

## 📌 Future Improvements
- Adaptive weekly confidence tracking
- Real input form instead of sample data
- Cognitive load visualization
