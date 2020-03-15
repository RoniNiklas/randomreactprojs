import weightService from "./weight"

test('lbToKgConversion returns correct value', () => {
    expect(weightService.lbToKgConversion(1)).toBe(0.45359237)
})

test('lbToKgConversion returns correct value', () => {
    expect(weightService.lbToKgConversion(2)).toBe(2*0.45359237)
})

test('kgToLbConversion returns correct value', () => {
    expect(weightService.kgToLbConversion(1)).toBe(2.20462262)
})

test('kgToLbConversion returns correct value', () => {
    expect(weightService.kgToLbConversion(2)).toBe(2*2.20462262)
})

test('rounded rounds down correctly', () => {
    expect(weightService.rounded(2.501)).toBe(2.5)
})

test('rounded rounds up correctly', () => {
    expect(weightService.rounded(2.49)).toBe(2.5)
})

test('rounded doesnt round unnecessarily', () => {
    expect(weightService.rounded(2.5)).toBe(2.5)
})