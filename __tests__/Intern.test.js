const Intern = require('../lib/Intern');

const intern = new Intern('Kota', 18, 'kota418@gmail', 'UCR');

test('creates an Intern object', () => {    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets of employee role', () => {
    expect(intern.getRole()).toEqual("Intern");
});