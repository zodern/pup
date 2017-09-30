import getOAuthProfile from './get-oauth-profile';

test('Returns Google profile data properly formatted.', () => {
  const googleProfile = getOAuthProfile({}, {
    services: { google: { email: 'example@test.com', given_name: 'Andy', family_name: 'Warhol' } },
  });
  expect(googleProfile).toEqual({ email: 'example@test.com', name: { first: 'Andy', last: 'Warhol' } });
});

test('Returns GitHub profile data properly formatted.', () => {
  const githubProfile = getOAuthProfile({ profile: { name: 'Andy Warhol' } }, {
    services: { github: { email: 'example@test.com' } },
  });
  expect(githubProfile).toEqual({ email: 'example@test.com', name: { first: 'Andy', last: 'Warhol' } });
});

test('Returns Facebook profile data properly formatted.', () => {
  const facebookProfile = getOAuthProfile({}, {
    services: { facebook: { email: 'example@test.com', first_name: 'Andy', last_name: 'Warhol' } },
  });
  expect(facebookProfile).toEqual({ email: 'example@test.com', name: { first: 'Andy', last: 'Warhol' } });
});
