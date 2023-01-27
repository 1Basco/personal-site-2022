import { useState } from "react";
import Hero from "../components/Hero/Hero";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import useSWR from "swr";
import PostList from "../components/PostList/PostList";

// async function fetcher(...args) {
//   const response = await fetch(...args);
//   const json = await response.json();
//   return setPosts(json);
// }

const Blog = () => {
  // get the posts via the api blog_posts
  // const [posts, setPosts] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const { data } = useSWR("/api/blog_posts", fetcher);

  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      {/* <Section>
        <PostList posts={posts} />
      </Section> */}
    </Layout>
  );
};

export default Blog;
