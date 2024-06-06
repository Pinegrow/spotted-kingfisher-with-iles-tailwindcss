import { computed } from 'vue'
import { usePage, useRoute } from 'iles'

export const useNav = () => {
  const { site } = usePage()
  const navlinksFromConfig = site.nav
  const navlinks = computed(() => navlinksFromConfig)

  const currentRoute = useRoute()
  const currentPath = computed(() => {
    return currentRoute.path
  })

  return {
    navlinks,
    currentPath,
  }
}

export const isCurrentRoute = (navlink, currentPath) => {
  if (!currentPath) {
    currentPath = useNav().currentPath.value
  }
  return navlink.link === '/'
    ? currentPath === navlink.link
    : currentPath.startsWith(navlink.link)
}
