import { ab as useThemeStore } from './server.mjs';

function useHideLayoutFooter() {
  const themeStore = useThemeStore();
  if (themeStore.isFooterShown) ;
}

export { useHideLayoutFooter as u };
//# sourceMappingURL=useHideLayoutFooter-CVal8-DF.mjs.map
