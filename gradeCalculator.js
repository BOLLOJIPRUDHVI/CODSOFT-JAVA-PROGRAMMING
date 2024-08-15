// JavaScript code for TASK 2: STUDENT GRADE CALCULATOR

// Function to calculate the grade based on average percentage
function calculateGrade(percentage) {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
}

// Function to start the grade calculation process
function startGradeCalculation() {
    let subjects = parseInt(prompt("Enter the number of subjects:"));
    let totalMarks = 0;

    for (let i = 1; i <= subjects; i++) {
        let marks = parseFloat(prompt(`Enter marks obtained in subject ${i} (out of 100):`));
        totalMarks += marks;
    }

    let averagePercentage = totalMarks / subjects;
    let grade = calculateGrade(averagePercentage);

    alert(`Total Marks: ${totalMarks}`);
    alert(`Average Percentage: ${averagePercentage.toFixed(2)}%`);
    alert(`Grade: ${grade}`);
}

startGradeCalculation(); // Call function to start grade calculation
