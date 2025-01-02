const nums = [74, 61, 94, 98, 78, 85, 55];

const isAGrade = (marks) => marks>=90;

const GradeA = nums.find(isAGrade);

console.log(GradeA);
