const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Kota', 18, 'kota418@gmail', 'CodySawa');

test('creates an Engineer object', () => {
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets of employee role', () => {
    expect(engineer.getRole()).toEqual("Engineer");
});

