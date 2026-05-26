// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },
    base: 'web.tecnico.ulisboa.pt/filipe.serafim',
    trailingSlash: 'always',
});


