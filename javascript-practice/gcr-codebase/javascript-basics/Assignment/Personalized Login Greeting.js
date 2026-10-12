// Set user details
const userName = "Devang";
const currentHour = new Date().getHours();

// Determine greeting based on time
if (currentHour < 12) {
  console.log(`Good Morning ${userName}!`);
} else if (currentHour >= 12 && currentHour <= 17) {
  console.log(`Good Afternoon ${userName}!`);
} else {
  console.log(`Good Evening ${userName}!`);
}