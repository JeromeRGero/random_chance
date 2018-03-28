var quarter = Math.floor(Math.random() * 300) + 1, sum = 0, win;
console.log("Number of quaters is: " + quarter);
for(var i = quarter; i > 0; i--){
    if(Math.floor(Math.random() * 100) + 1 == 100){
        sum++;
        win = Math.floor(Math.random() * 50) + 51;
        console.log("--------------------------\n" + 
        "You win! And you still have " + i + " quaters left!" +
        "\n -------------------------- \nYou have won " + win + " quarters"); 
        i += win;
        console.log("Now you have a total of " + i);
    }
} 
console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n" + 
    "In total you won " + sum + "\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n" + 
    "You should have won on average " + quarter/100);




