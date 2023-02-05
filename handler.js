export async function handle(state, action) {
  const { input } = action;
  if (input.type === 'createPost' || input.type === 'updatePost') {
    state.posts[input.post.id] = input.post;
  } else if (input.type === 'deletePost') {
    delete state.posts[input.postId];
  }

  return { state };
}
