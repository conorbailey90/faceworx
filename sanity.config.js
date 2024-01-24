import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'faceworx',

  projectId: 'u4q3kibf',
  dataset: 'production',
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
