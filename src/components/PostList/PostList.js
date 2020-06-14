import React, { useState, useEffect } from "react";

import PostItem from "./PostItem";
import Pagination from "./Pagination";
import Search from "./Search";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  const [filters, setfilters] = useState({
    _page: 1,
    _limit: 10,
  });

  useEffect(() => {
    async function fetchPosts() {
      try {
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?_limit=${filters._limit}&_page=${filters._page}`;
        const res = await fetch(requestUrl);
        const resJon = await res.json();

        const { data, pagination } = resJon;
        setPosts(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch post list");
      }
    }

    fetchPosts();
  }, [filters]);

  const onPagination = (newPage) => {
    setfilters({ ...filters, _page: newPage });
  };

  const onSubmit = (searchTerm1) => {
    setfilters({
      ...filters,
      _page: 1,
      title_like: searchTerm1.searchTerm,
    });
    console.log(searchTerm1.searchTerm);
  };

  return (
    <div className="container">
      <Search onSubmit={onSubmit} />
      <ul className="list-group">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
      <Pagination pagination={pagination} onPagination={onPagination} />
    </div>
  );
}
