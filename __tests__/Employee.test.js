const Employee = require('../lib/Employee');

const employee = new Employee('Kota', 18, 'kota418@gmail.com');

test('creates an employee object', () => {
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('gets employee ID', () => {
    expect(employee.getId()).toEqual(employee.id);
});

test('gets employee email', () => {
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee role', () => {
    expect(employee.getRole()).toEqual("Employee");
});