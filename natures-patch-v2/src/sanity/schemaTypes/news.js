export default {
  name: 'news',
  title: 'News & Press',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date', // Allows date selection
      options: { dateFormat: 'YYYY-MM-DD' }
    },
    {
      name: 'summary',
      title: 'Short Summary',
      type: 'text',
      rows: 3
    },
    {
      name: 'link',
      title: 'Link to Full Article (Optional)',
      type: 'url'
    }
  ],
  // This forces the dashboard to sort by date automatically
  orderings: [
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    }
  ]
}
