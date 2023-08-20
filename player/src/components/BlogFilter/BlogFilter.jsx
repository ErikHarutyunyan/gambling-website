import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, setLatest, setSearch } from '../../app/features/posts/postsSlice';
const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const dispatch = useDispatch()
  const posts = useSelector(selectPosts)
  useEffect(() => {
    if (postQuery || latest) {
    dispatch(setSearch(postQuery));
    dispatch(setLatest(latest));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postQuery, latest]);

   if (postQuery === "bomb") {
     throw new Error("💥 CABOOM 💥");
   }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    const isLatest = form.latest.checked;
   
    const params = {};

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;
    // ?post=dolor&latest=true

    setSearchParams(params);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={posts.search}
        placeholder='bomb crashed'
        onChange={(e) => dispatch(setSearch((e.target.value)))}
      />
      <input
        type="submit"
        value="Search"
        checked={posts.latest}
        onChange={(e) => {
          dispatch(setLatest(e.target.checked));
        }}
      />
      <label htmlFor="">
        <input type="checkbox" name="latest" /> New only
      </label>
    </form>
  );
};

export default BlogFilter