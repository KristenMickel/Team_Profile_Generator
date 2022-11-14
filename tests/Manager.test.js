const Manager = require('../lib/Manager');
const manager = new Manager('Terry', '79456', 'kmgeorgiatech@gmail.com', '5424');

test('Get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Terry');
    expect(manager.id).toBe('79456');
    expect(manager.email).toBe('kmgeorgiatech@gmail.com');
    expect(manager.officeNumber).toBe('5424');
});

test('Get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Terry');
});

test('Get the id from the getId() method', () => {
    expect(manager.getId()).toBe('79456');
});

test('Get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('kmgeorgiatech@gmail.com');
})

test('Get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('5424');
});

test('Get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});