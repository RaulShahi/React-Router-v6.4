import { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
    <Outlet />
      <main>
        <PostsList />‚
      </main>
    </>
  ); 
}

export const loader = async()=>{
  const response = await fetch('http://localhost:8080/posts')
  const resData = await response.json();
  return resData.posts
}

export default Posts;
