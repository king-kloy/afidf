import { action } from "easy-peasy";
import uuid from "uuid";

export default {
  posts: [
    {
      title: "House Party",
      content: " blah blah blah",
      authorFirstName: "Yaw ",
      authorLastName: "Boahene",
      createdAt: "3rd September 2020"
    },
    {
      title: "Sing Song",
      content: "blah blah blah",
      authorFirstName: "Alfred",
      authorLastName: "Benefo",
      createdAt: "4rd October, 2020"
    }
  ],
  //Actions
  add: action((state, post) => {
    state.posts.push(post);
  }),
  remove: action((state, id) => {
    state.posts = state.posts.filter(post => post.id !== id);
  })
};
