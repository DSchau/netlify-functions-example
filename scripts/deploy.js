require('dotenv').config()
const Netlify = require('netlify')
const path = require('path')

const client = new Netlify(process.env.ACCESS_TOKEN)

async function createSite() {
  await client.createSiteInTeam({
    body: {
      // TODO: your site name
      name: `netlify-functions-test-dschau`
    },
    // TODO: your account slug
    accountSlug: `dschau`
  })
}
async function publish() {
  // TODO: your siteID
  await client.deploy(`1870766c-a150-416a-9db6-c0a2f548261f`, `public`, {
    fnDir: `functions`,
    syncFileLimit: 500,
    statusCb(update) {
      console.log(update)
    }
  })
}

publish()
