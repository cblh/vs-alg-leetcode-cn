// @algorithm @lc id=468 lang=typescript 
// @title validate-ip-address
// @test("172.16.254.1")="IPv4"
// @test("2001:0db8:85a3:0:0:8A2E:0370:7334")="IPv6"
// @test("256.256.256.256")="Neither"
// @test("20EE:FGb8:85a3:0:0:8A2E:0370:7334")="Neither"
function validIPAddress(queryIP: string): string {
    if (isIPv4(queryIP)) {
        return 'IPv4'
    }
    if (isIPv6(queryIP)) {
        return 'IPv6'
    }
    return 'Neither'
};
function isIPv4(queryIP: string): boolean {
    const ss = queryIP.split('.')
    if (ss.length !== 4) {
        return false
    }
    for (const s of ss) {
        const num = Number(s)
        if (num < 0 || num > 255 || num + '' !== s) {
            return false
        }
    }
    return true
}
function isIPv6(queryIP: string): boolean {
    const ss = queryIP.split(':')
    if (ss.length !== 8) {
        return false
    }
    for (const s of ss) {
        if (s.length === 0 || s.length > 4) {
            return false
        }
        for (const char of s) {
            if ((char >= '0' && char <= '9') || (char >= 'a' && char <= 'f') || (char >= 'A' && char <= 'F')) {
                continue
            }
            return false
        }
    }
    return true
}