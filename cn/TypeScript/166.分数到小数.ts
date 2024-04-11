// @algorithm @lc id=166 lang=typescript 
// @title fraction-to-recurring-decimal
// @test(1,2)="0.5"
// @test(2,1)="2"
// @test(4,333)="0.(012)"
function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator === 0) {
        return '0'
    }
    const sb: string[] = []
    const neg = numerator > 0 !== denominator > 0
    sb.push(neg ? '-' : '')
    let a = Math.abs(numerator),
        b = Math.abs(denominator)
    sb.push(Math.floor(a / b).toString())
    a %= b
    if (a === 0) {
        return sb.join('')
    }
    sb.push('.')
    const d = new Map<number, number>()
    while (a !== 0) {
        d.set(a, sb.length)
        a *= 10
        sb.push(Math.floor(a / b).toString())
        a %= b
        if (d.has(a)) {
            sb.splice(d.get(a)!, 0, '(')
            sb.push(')')
            break
        }
    }
    return sb.join('')
}