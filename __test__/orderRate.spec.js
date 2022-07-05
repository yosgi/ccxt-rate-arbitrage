const order = require('../functions/orderRate');
test('order rate', () => {
    return order().then( ([aimSymbol,rate]) => {
        expect(rate).toBeGreaterThanOrEqual(0);
    });
});