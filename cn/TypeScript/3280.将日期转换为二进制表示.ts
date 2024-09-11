// @algorithm @lc id=3567 lang=typescript 
// @title convert-date-to-binary
// @test("2080-02-29")="100000100000-10-11101"
// @test("1900-01-01")="11101101100-1-1"
function convertDateToBinary(date: string): string {
    // Split the date string into year, month, and day
    const [year, month, day] = date.split('-').map(Number);
    // Function to remove leading zeros from a binary string
    const removeLeadingZeros = (binary: string): string => {
        return binary.replace(/^0+/, '') || '0';
    };

    // Convert year to binary (11 bits)
    const binaryYear = year.toString(2).padStart(11, '0');

    // Convert month to binary (4 bits)
    const binaryMonth = month.toString(2).padStart(4, '0');

    // Convert day to binary (5 bits)
    const binaryDay = day.toString(2).padStart(5, '0');

    // Combine the binary representations
    return `${removeLeadingZeros(binaryYear)}-${removeLeadingZeros(binaryMonth)}-${removeLeadingZeros(binaryDay)}`;
};