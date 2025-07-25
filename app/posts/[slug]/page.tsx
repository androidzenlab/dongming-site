import { getAllPosts, getPostBySlug } from "app/lib/api";
import { CMS_NAME } from "app/lib/constants";
import markdownToHtml from "app/lib/markdownToHtml";
import Header from "components/Header";
import Alert from "components/post/alert";
import Container from "components/post/container";
import { PostBody } from "components/post/post-body";
import { PostHeader } from "components/post/post-header";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
// import { getAllPosts, getPostBySlug } from "@/lib/api";
// import { CMS_NAME } from "@/lib/constants";
// import markdownToHtml from "@/lib/markdownToHtml";
// import Alert from "@/app/_components/alert";
// import Container from "@/app/_components/container";
// import Header from "@/app/_components/header";
// import { PostBody } from "@/app/_components/post-body";
// import { PostHeader } from "@/app/_components/post-header";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Alert preview={post.preview} />
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
          <div className="sm:mx-0 flex justify-center ">            
            <Image
              src={`${process.env.BASE_PATH}/${post.ogImage.url}`}
              alt={`post Image for ${post.title}`}
              className={"shadow-sm object-center"}
              width={100}
              height={100}
            /></div>

        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  console.log('params is', params)
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
