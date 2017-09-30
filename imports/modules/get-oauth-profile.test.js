import getOAuthProfile from './get-oauth-profile';

test('Returns Google profile data properly formatted.', () => {
  const googleProfile = getOAuthProfile({}, {
    services: {
      google: {
        email: 'admin@admin.com',
        given_name: 'Andy',
        family_name: 'Warhol',
      },
    },
  });

  expect(googleProfile).toEqual({
    email: 'admin@admin.com',
    name: {
      first: 'Andy',
      last: 'Warhol',
    },
  });
});

test('Returns GitHub profile data properly formatted.', () => {
  const githubProfile = getOAuthProfile({
    profile: {
      name: 'Andy Warhol',
    },
  }, {
    services: {
      github: {
        email: 'admin@admin.com',
      },
    },
  });

  expect(githubProfile).toEqual({
    email: 'admin@admin.com',
    name: {
      first: 'Andy',
      last: 'Warhol',
    },
  });
});

test('Returns Facebook profile data properly formatted.', () => {
  const facebookProfile = getOAuthProfile({}, {
    services: {
      facebook: {
        email: 'admin@admin.com',
        first_name: 'Andy',
        last_name: 'Warhol',
      },
    },
  });

  expect(facebookProfile).toEqual({
    email: 'admin@admin.com',
    name: {
      first: 'Andy',
      last: 'Warhol',
    },
  });
});
