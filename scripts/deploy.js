require('dotenv').config()
const Netlify = require('netlify')
const path = require('path')

const client = new Netlify(process.env.ACCESS_TOKEN)

async function createSite() {
  await client.createSiteInTeam({
    body: {
      name: `netlify-functions-test-dschau`
    },
    accountSlug: `dschau`
  })
}
async function publish() {
  await client.deploy(`1870766c-a150-416a-9db6-c0a2f548261f`, `public`, {
    fnDir: `functions`,
    syncFileLimit: 500,
    statusCb(...args) {
      console.log(args)
    }
  })
}

publish()
