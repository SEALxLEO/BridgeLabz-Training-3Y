const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Workout dataset cannot be empty.");
    }
    this.data = data;
  }

  // Active users (> 7000 steps) via filter
  getActiveUsers() {
    return this.data.filter((entry) => entry.steps > 7000);
  }

  // Average calories via reduce
  getAverageCalories() {
    return this.data.reduce((sum, entry) => sum + entry.calories, 0) / this.data.length;
  }

  // Formatted messages via map
  getUserSummary() {
    return this.data.map(
      (entry) => `User ${entry.user}: ${entry.steps} steps, ${entry.calories} kcal burned.`
    );
  }
}

try {
  const analytics = new FitnessAnalytics(workoutData);
  console.log("Active Users:", analytics.getActiveUsers());
  console.log("Average Calories:", analytics.getAverageCalories().toFixed(2));
  console.log("User Summaries:", analytics.getUserSummary());

  // Empty dataset check
  new FitnessAnalytics([]);
} catch (error) {
  console.error("Analytics Error:", error.message);
}
