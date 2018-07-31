const Router = require('nextjs-dynamic-routes')

const router = module.exports = new Router()

router.add({ name: 'player', pattern: '/player/:username/:platform(pc|ps4|xb1)?' });
