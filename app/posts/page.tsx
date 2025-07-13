import { getAllPosts } from "app/lib/api";
import Header from "components/Header";
import Container from "components/post/container";
import { HeroPost } from "components/post/hero-post";
import { Intro } from "components/post/intro";
import { MoreStories } from "components/post/more-stories";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Header />
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
