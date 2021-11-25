const raisinAlarm = function (cookie) {
  // Put your solution here
  for (let obj of cookie) {
    if (obj === "🍇") {
      return "Raisin Alert";
    }
  }
  return "All Good!";
}

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));