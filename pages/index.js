import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>escasts</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-168536923-1"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'UA-168536923-1');
        `}}>
        </script>
      </Head>


      <section className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8 h-screen flex flex-col justify-center">
          <div className="md:flex">
            <div className="md:w-1/2 text-center md:text-left">
              <div className="neon absolute top-1 left-1 text-center rounded-lg px-4">
                <h1 className="text-3xl">es<span className="first">cast</span>s</h1>
              </div>
              <h3 className="text-4xl font-bold">Level up your career to next level <br className="hidden md:block" /> through expert
            screencasts.</h3>
              <a href="#"
                className="inline-block mt-5 border-dashed border-2 hover:bg-green-400 border-green-400 py-2 px-4 code">Get
                ready
                to
            binge!</a>
              <span className="block mt-3 text-gray-100 text-sm code fixed right-1 bottom-1">escasts.co@gmail.com</span>
            </div>
            <div className="md:w-1/2">
              <div className="code bg-gray-700 rounded-lg shadow-md p-3 min-h-full mt-8 md:mt-0 h-48">
                <div className="flex justify-between">
                  <div>
                    <span className="inline-block mr-1 w-3 h-3 bg-red-400 rounded-lg"></span>
                    <span className="inline-block mr-1 w-3 h-3 bg-yellow-400 rounded-lg"></span>
                    <span className="inline-block w-3 h-3 bg-green-400 rounded-lg"></span>
                  </div>
                  <div className="text-sm">learn@escasts:~</div>
                  <div></div>
                </div>
                <div className="text-sm mt-2">
                  <span className="block text-teal-400">~ initializing <span className="text-green-400">escasts..</span></span>
                  <span className="block text-teal-400">~ <span className="text-white">cd</span> <span
                    className="text-green-400">escasts</span></span>
                  <span className="block text-teal-400">~ <span className="text-green-400">escasts</span> <span
                    className="text-white">ls</span></span>
                  <span className="block text-teal-400">~ <span className="text-green-400">javascript typescript react vue deno node
                  sql docker</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

