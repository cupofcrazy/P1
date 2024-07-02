import { CustomImage } from "@/components/custom-image";
import { postQuery } from "@/lib/sanity/queries";
import { client } from "@/studio/lib/client";
import { BlockContent } from "@/components/block-content";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

const PostPage = async ({ params }: PostPageProps) => {
  const post = await client.fetch<any>(postQuery, { slug: params.slug });
  const publishedAt = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-2xl my-32">
      <div className="w-[180px] mb-4">
        <CustomImage
          className="w-full"
          src={post.cover}
          alt={post.cover.alt}
          width={100}
          height={100}
          aspectRatio={post.cover.metadata.dimensions.aspectRatio}
        />
      </div>
      <h1 className="text-5xl mb-4">{post.title}</h1>
      <h2 className="text-2xl text-neutral-500">{post.description}</h2>
      <hr className="my-4" />
      <p className="mb-1 text-neutral-500">{publishedAt}</p>
      <p className="mb-4">
        Words by <span className="text-neutral-500">{post.author.name}</span>
      </p>

      <div className="my-4"></div>

      <div className="mb-4">
        <BlockContent value={post.body} />
      </div>
    </div>
  );
};

export default PostPage;
