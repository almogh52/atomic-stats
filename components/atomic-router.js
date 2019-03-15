import Router from '../routes';
import NProgress from "nprogress"

NProgress.configure({ showSpinner: false })

class AtomicRouter {
    pushRoute(name, params = {}, options) {
        // If the player is trying to route to another location while entering his player id, ignore requests
        if (typeof window !== undefined && window["__ATOMIC_USER__"] && window["__ATOMIC_USER__"].player_id == undefined)
            return

        NProgress.start()
        Router.pushRoute(name, params=params, options)
    }
}

export default new AtomicRouter()