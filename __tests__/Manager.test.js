const Manager = require('../lib/Manager');

const manager = new Manager('Kota', 18, 'kota418@gmail', 1);

test('creates an Manager object', () => {    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    expect(manager.getRole()).toEqual("Manager");
});