// @algorithm @lc id=273 lang=typescript 
// @title integer-to-english-words
// @test(123)="One Hundred Twenty Three"
// @test(12345)="Twelve Thousand Three Hundred Forty Five"
// @test(1234567)="One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
const lt20: string[] = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
    "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
    "Seventeen", "Eighteen", "Nineteen"];
const tens: string[] = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const thousands: string[] = ["Billion", "Million", "Thousand", ""];

function numberToWords(num: number): string {
    if (num === 0) {
        return "Zero";
    }
    let sb: string[] = [];
    for (let i: number = 1000000000, j: number = 0; i > 0; i /= 1000, ++j) {
        if (Math.floor(num / i) === 0) {
            continue;
        }
        sb.push(transfer(Math.floor(num / i)) + thousands[j]);
        num %= i;
    }
    return sb.join(' ').trim();
}

function transfer(num: number): string {
    if (num === 0) {
        return "";
    }
    if (num < 20) {
        return lt20[num] + " ";
    }
    if (num < 100) {
        return tens[Math.floor(num / 10)] + " " + transfer(num % 10);
    }
    return lt20[Math.floor(num / 100)] + " Hundred " + transfer(num % 100);
}
