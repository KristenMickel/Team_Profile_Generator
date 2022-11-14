const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Joe', '98765', 'kmgeorgiatech@gmail.com', 'KristenMickel');

test('Get the constructor values for the intern object', () => {
    expect(engineer.name).toBe('Joe');
    expect(engineer.id).toBe('98765');
    expect(engineer.email).toBe('kmgeorgiatech@gmail.com');
    expect(engineer.githubUser).toBe('KristenMickel');
});

test('Get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Joe');
});

test('Get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('98765');
});

test('Get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('kmgeorgiatech@gmail.com');
})

test('Get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('KristenMickel');
});

test('Get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
})