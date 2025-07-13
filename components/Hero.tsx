import Link from "next/link";
// import Background from '/hero-background.avif';
import { getImageProps } from 'next/image'
import Image from "next/image";
function getBackgroundImage(srcSet = '') {
  console.log('getBackgroundImage', srcSet)
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

export default function Hero() {
  // const {
  //   props: { srcSet },
  // } = getImageProps({ alt: '', width: 1000, height: 760, src: `${process.env.BASE_PATH}/hero-background.avif`})
  //   const {
  //   props
  // } = getImageProps({ alt: '', width: 1000, height: 760, src: `${process.env.BASE_PATH}/hero-background.avif`})
  // const backgroundImage = getBackgroundImage(props.src)
  //   console.log('props props is', props)
  //       console.log('srcSet props is', srcSet)
  // console.log('backgroundImage is', backgroundImage)

  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24" style={{
      // backgroundImage,
      backgroundImage: `url(${process.env.BASE_PATH}/hero-background.avif)`,
      backgroundSize: 'cover', // Optional: Adjust as needed
      backgroundRepeat: 'no-repeat', // Optional
      height: '50vh', // Optional: Set a height
    }}>

{/* <Image
        src={`${process.env.BASE_PATH}/hero-desktop.png`}
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      /> */}
      <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
        Wellington Dongming Traditional Chinese Manipulative Orthopaedics and Massage Clinic 
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light">
        Adjust, Release, Heal
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="/get-started"
          className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </Link>
        <Link
          href="https://github.com"
          className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          Download
        </Link>
      </div>
    </section>
  );
}
