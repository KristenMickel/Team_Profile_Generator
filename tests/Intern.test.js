const Intern = require('../lib/Intern');
const intern = new Intern('John', '75315', 'kmgeorgiatech@gmail.com', 'Georgia Institute of Technology');

test('Get the constructor values for the intern object', () => {
    expect(intern.name).toBe('John');
    expect(intern.id).toBe('75315');
    expect(intern.email).toBe('kmgeorgiatech@gmail.com');
    expect(intern.school).toBe('Georgia Institute of Technology');
});

test('Get the name from the getName() method', () => {
    expect(intern.getName()).toBe('John');
});

test('Get the id from the getId() method', () => {
    expect(intern.getId()).toBe('75315');
});

test('Get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('kmgeorgiatech@gmail.com');
})

test('Get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Georgia Institute of Technology');
});

test('Get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
})