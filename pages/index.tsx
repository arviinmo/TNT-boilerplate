import Head from "next/head";

export default function Home() {
  return (
    <div className="px-8 py-0">
      <Head>
        <title>TNT - Nextjs boilerplate Super-Power</title>
        <meta name="description" content="nextjs boilerplate created by Arvin Mostafaei" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-grow min-h-screen px-0 py-16">
        <h1 className="m-0 text-6xl">
          Welcome to{" "}
          <a className="text-blue-600 no-underline" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mx-0 my-10 text-2xl leading-normal">
          Get started by editing{" "}
          <code className="p-3 text-lg bg-gray-100 rounded">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-center max-w-[800px]">
          <a
            href="https://nextjs.org/docs"
            className="p-6 m-4 text-left no-underline border border-solid max-w-[300px] hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 focus:border-blue-600 active:text-blue-600 active:border-blue-600"
          >
            <h2 className="mx-0 mt-0 mb-4 text-2xl">Documentation &rarr;</h2>
            <p className="m-0 text-xl leading-normal">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 m-4 text-left no-underline border border-solid max-w-[300px] hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 focus:border-blue-600 active:text-blue-600 active:border-blue-600"
          >
            <h2 className="mx-0 mt-0 mb-4 text-2xl">Learn &rarr;</h2>
            <p className="m-0 text-xl leading-normal">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="p-6 m-4 text-left no-underline border border-solid max-w-[300px] hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 focus:border-blue-600 active:text-blue-600 active:border-blue-600"
          >
            <h2 className="mx-0 mt-0 mb-4 text-2xl">Examples &rarr;</h2>
            <p className="m-0 text-xl leading-normal">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 m-4 text-left no-underline border border-solid max-w-[300px] hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 focus:border-blue-600 active:text-blue-600 active:border-blue-600"
          >
            <h2 className="mx-0 mt-0 mb-4 text-2xl">Deploy &rarr;</h2>
            <p className="m-0 text-xl leading-normal">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
