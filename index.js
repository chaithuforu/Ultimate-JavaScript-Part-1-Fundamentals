const marks = [91, 100];
let avg = findAvg(marks);
let grade = findGrade(avg);
console.log(avg + '--' + grade);
function findGrade(averageMark) {
    if (averageMark >= 90) {
        return 'A';
    }
    else if (averageMark >= 80) {
        return 'B';
    }
    else if (averageMark >= 70) {
        return 'C';
    }
    else if (averageMark >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}
function findAvg(marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    return sum/marks.length;
}
