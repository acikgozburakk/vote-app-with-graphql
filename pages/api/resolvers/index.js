import { faker } from "@faker-js/faker";

export const resolvers = {
  Query: {
    users: (_, { count }) => {
      return [...Array(count)].map(() => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatar: faker.image.avatarLegacy(),
        job: faker.person.jobTitle(),
        country: faker.location.country(),
        voteCount: faker.random.numeric(),
        adress: faker.location.streetAddress({ useFullAddress: true }),
        phone: faker.phone.number(),
        bio: faker.person.bio(),
      }));
    },
  },
};
