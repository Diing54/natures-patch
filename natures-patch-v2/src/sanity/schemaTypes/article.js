export default {
  name: 'article',
  title: 'Lab Articles & Research',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Urban Ecology', 'Carbon Markets', 'Indigenous Species', 'Youth & Education', 'Policy Brief', 'Community Voices']
      }
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      initialValue: 'Nature\'s Patch Team'
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date'
    },
    {
      name: 'excerpt',
      title: 'Short Summary (Excerpt)',
      type: 'text',
      rows: 3
    },
    {
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'pdfFile',
      title: 'Attach PDF (Optional)',
      description: 'If this is a research paper, upload the PDF here.',
      type: 'file',
      options: { accept: '.pdf' }
    }
  ]
}
