function suma(a,b) {
    return a + b;
}

function restar(a,b) {
    return a-b;
}

describe('Testing a las funciones de suma y resta', () => {
    test('Suma de 20 y 30', () => {
        expect(suma(20,30)).toBe(50);
    })
})