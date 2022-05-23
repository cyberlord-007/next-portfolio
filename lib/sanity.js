import sanityClient from '@sanity/client';

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
const client = sanityClient({
  projectId: 'nyt4h0zg',
  dataset: 'production',
  token: "skJMVbhsi59ZspeDonO8UTKf1ZwZ6nxFf2KmGuAYNDGVrId27HIlGXliGeJ4K8KeP8xfvN9I3NAlfM8wrLFomHrgiEkwsLmAGwtTXyGh0qKwR02cB36TK97tlfp1lNJMXpVSHCcPRCh3ZFtU2mHvPG6VpAe4W1t6LAKYBQgSXkNjnswDzVB1", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export default client;