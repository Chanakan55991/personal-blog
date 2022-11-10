import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import addClasses from 'rehype-add-classes';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.chanakancloud.net/',
  integrations: [sitemap(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [[addClasses, {
      h1: 'text-4xl font-bold font-mplus mb-2',
      h2: 'text-2xl font-bold font-mplus mb-2',
      h3: 'text-xl font-bold font-mplus mb-2',
      h4: 'text-lg font-bold font-mplus mb-2',
      h5: 'font-bold font-mplus mb-2',
      h6: 'font-bold font-mplus mb-2',
      img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6 mt-4',
      p: 'mb-6',
      a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500',
      ul: 'list-disc mt-4 ml-6',
      li: 'gap-6 mb-6',
      blockquote: 'ml-6 italic border-l-4 border-orange-400 px-4'
    }]]
  }
});
