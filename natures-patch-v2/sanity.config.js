import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Natures Patch Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // We will get this in a second
  dataset: 'production',
  basePath: '/studio', // The dashboard will live at localhost:3000/studio

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
