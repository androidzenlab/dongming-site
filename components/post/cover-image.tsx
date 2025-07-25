import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={`${process.env.BASE_PATH}${src}`}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm object-center ", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={650}
      height={315}
    />
  );
  return (
    <div className="sm:mx-0 flex justify-center ">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
