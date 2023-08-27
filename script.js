const user_answer = prompt("Please enter your number: ");

let current_number = 1;
while (current_number <= parseInt(user_answer)){
    if (current_number % 3 == 0 && current_number % 5 == 0){
        console.log("Fizz Buzz");
    } else if (current_number % 3 == 0){
        console.log("Fizz");
    } else if (current_number % 5 == 0){
        console.log("Buzz");
    } else {
     console.log(current_number);
    }
    current_number++;
}