import { defineConfig, pluginBundle, pluginSsg } from "minista"

export default defineConfig({
  plugins: [pluginSsg(), pluginBundle()],
})
