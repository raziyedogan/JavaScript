/*The user is asked for midterm and final exam grades. The average is calculated with 40% of the midterm grade and 60% of the final grade and the 
result is shown on the screen. The user is asked if he/she wants to know the letter grade. If the user click the "OK" button, the letter grade and 
whether the user has passed or failed the course is displayed on the screen. If the user click the "Cancel" button, the process ends and the letter 
grade is not displayed.*/

let midterm_exam = Number(prompt("Enter your midterm exam result. "));
let final_exam = Number(prompt("Enter your final exam result. "));

console.log("midterm exam: ",midterm_exam);
console.log("final exam: ",final_exam);

let avg = midterm_exam*0.4 + final_exam*0.6;

alert("Grades have been successfully taken. Your average is : " + avg);
console.log("average:", avg);
avg = Math.round(avg);
console.log("average:", avg);

let l_g = confirm("Would you like to know your letter grade?");
console.log("confirm result: ", l_g);

if(l_g == true){   //This if block is executed if the user wants to see the letter grade.

    if(avg >= 80 && avg <= 100){
        alert("Your letter grade: AA");
        alert("You passed the course.");
    }
    
    else if(avg >= 71 && avg < 80){
        alert("Your letter grade: BA");
        alert("You passed the course.");
    }
    
    else if(avg >= 63 && avg < 71){
        alert("Your letter grade: BB");
        alert("You passed the course.");
    }
    
    else if(avg >= 55 && avg < 63){
        alert("Your letter grade: CB");
        alert("You passed the course.");
    }
    
    else if(avg >= 50 && avg < 55){
        alert("Your letter grade: CC");
        alert("You passed the course.");
    }
    
    else if(avg >= 45 && avg < 50){
        alert("Your letter grade: DC");
        alert("You passed the course.");
    }
    
    else if(avg >= 35 && avg < 45){
        alert("Your letter grade: DD");
        alert("You passed the course.");
    }
    
    else if(avg >= 0 && avg < 35){
        alert("Your letter grade: FF");
        alert("You failed the course.");
    }
}
