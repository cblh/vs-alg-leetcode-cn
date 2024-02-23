// @algorithm @lc id=1802 lang=typescript 
// @title number-of-students-unable-to-eat-lunch
// @test([1,1,0,0],[0,1,0,1])=0
// @test([1,1,1,0,0,1],[1,0,0,0,1,1])=3
function countStudents(students: number[], sandwiches: number[]): number {
    const count = [0, 0];
    for (const v of students) {
        count[v]++;
    }
    for (const v of sandwiches) {
        if (count[v] === 0) {
            return count[v ^ 1];
        }
        count[v]--;
    }
    return 0;
};