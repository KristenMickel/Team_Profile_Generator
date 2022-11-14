const Employee = require('../lib/Employee');
const employee = new Employee('Jim', '12345', 'kmgeorgiatech@gmail.com');

test('Get constructor values for the employee object', () => {
    expect(employee.name).toBe('Jim');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('kmgeorgiatech@gmail.com');
});

test('Get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Jim');
});

test('Get the id from the getId() method', () => {
    expect(employee.getId()).toBe('12345');
});

test('Get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('kmgeorgiatech@gmail.com');
})

test('Get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
})