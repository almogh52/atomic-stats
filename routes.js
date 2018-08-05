const Router = require('nextjs-dynamic-routes')

const router = module.exports = new Router()

router.add({ name: 'player', pattern: '/player/:username/:platform(pc|ps4|xb1)?' });
router.add({ name: 'news', pattern: '/news' })
router.add({ name: 'shop', pattern: '/shop' })
