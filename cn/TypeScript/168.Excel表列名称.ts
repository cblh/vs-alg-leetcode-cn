// @algorithm @lc id=168 lang=typescript 
// @title excel-sheet-column-title
// @test(1)="A"
// @test(28)="AB"
// @test(701)="ZY"
// @test(52)="AZ"
function convertToTitle(columnNumber: number): string {
    let res: string[] = [];
    while (columnNumber > 0) {
        --columnNumber;
        let num: number = columnNumber % 26;
        res.unshift(String.fromCharCode(num + 65));
        columnNumber = Math.floor(columnNumber / 26);
    }
    return res.join('');
};