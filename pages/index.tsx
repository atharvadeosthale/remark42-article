import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-3xl font-bold">First article</div>
      <div className="text-lg">First article content</div>

      <div id="remark42">{''}</div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          const remark_config = {
            host: 'http://localhost:8080',
            site_id: 'remark123',
            
          };
          window.remark_config = remark_config;
          !function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);`,
        }}
      ></script>
    </div>
  )
}
