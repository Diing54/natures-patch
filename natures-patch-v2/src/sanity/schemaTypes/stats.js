export default {
  name: 'stats',
  title: 'Impact Statistics',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (e.g. Q4 2025 Stats)',
      type: 'string'
    },
    {
      name: 'treesPlanted',
      title: 'Total Trees Planted',
      type: 'string', // String allows "50k+" or "12,500" formatting
    },
    {
      name: 'acresRestored',
      title: 'Acres Restored',
      type: 'string',
    },
    {
      name: 'carbonSequestered',
      title: 'Carbon Sequestered (Tons)',
      type: 'string',
    },
    {
      name: 'survivalRate',
      title: 'Survival Rate (%)',
      type: 'number',
    }
  ]
}
