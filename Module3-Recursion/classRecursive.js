
const people = ["Victor", "Thomas", "Mytisha", "kyle", "Matthew"];

// // Recursive function to pass the message
// function passMessage(index) {
//   // Base Case: If we've reached the last person, stop.
//   if (index === people.length - 1) {
//     console.log(`${people[index]} received the message and stopped!`);
//   } else {
//     // Recursive Step: Pass the message to the next person
//     console.log(`${people[index]} passed the message to ${people[index + 1]}`);
//     passMessage(index + 1); // Recursive call with the next person in line
//   }
// }

// Start passing the message from the first person
// passMessage(0);


function passMessageRecursive (index) {
  if (index===4) 
      console.log ("End")
  else {
    debugger;
    console.log (`person ${people[index]} passed message to ${people[index+1]}`)
    passMessageRecursive (index+1)
  }
}

passMessageRecursive(0);