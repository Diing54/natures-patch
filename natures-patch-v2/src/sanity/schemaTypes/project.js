export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Completed', value: 'completed' },
          { title: 'Planned', value: 'planned' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'location',
      title: 'Location (e.g. Rift Valley)',
      type: 'string'
    },
    {
      name: 'geo',
      title: 'Geographic Coordinates',
      type: 'object',
      fields: [
      {name: 'lat', title: 'Latitude', type: 'number'},
      {name: 'lng', title: 'Longitude', type: 'number'}
      ]
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'treesPlanted',
      title: 'Trees Planted Count',
      type: 'number'
    },
    {
      name: 'fundingGoal',
      title: 'Funding Percentage (0-100)',
      type: 'number'
    }
  ]
}
