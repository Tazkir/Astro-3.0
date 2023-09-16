import { z, defineCollection } from 'astro:content';
// import { format } from 'date-fns';

// const authorsCollection = defineCollection({
//   schema: ({ image }) =>
//     z.object({
//       name: z.string(),
//       image: image(),
//     }),
// });

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      date: z.string(),
      image: image(),
      title: z.string(),
    }),
});

export const collections = {
  //   authors: authorsCollection,
  posts: postsCollection,
};
