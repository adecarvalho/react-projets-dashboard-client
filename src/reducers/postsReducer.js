import {
  POSTS_FETCH,
  POSTS_BY_SUJET_ID_BEGIN,
  POSTS_SEND_NEW,
  POSTS_DELETE_BY_ID
} from "./types"

//
export const PostsReducer = (state, action) => {
  let newstate = undefined
  //
  switch (action.type) {
    //
    case POSTS_BY_SUJET_ID_BEGIN:
      newstate = { ...state, postsLoading: true, posts: [] }
      return newstate

    //
    case POSTS_SEND_NEW:
      const newpost = action.payload
      let items = [...state.posts, newpost]

      newstate = { ...state, posts: items }

      return newstate

    //
    case POSTS_FETCH:
      newstate = { ...state, posts: action.payload, postsLoading: false }
      return newstate
    //

    case POSTS_DELETE_BY_ID:
      const zeid = action.payload

      const tabfilter = state.posts.filter(item => {
        return item._id !== zeid
      })

      newstate = { ...state, posts: tabfilter }
      return newstate

    default:
      return state
  }
}
