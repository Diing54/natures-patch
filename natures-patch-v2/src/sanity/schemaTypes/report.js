export default {
  name: 'report',
  title: 'Reports & Financials',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Report Title',
      type: 'string',
      description: 'e.g., "2025 Annual Report" or "Q4 Impact Audit"',
      validation: Rule => Rule.required()
    },
    {
      name: 'file',
      title: 'Upload File',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx,.xls,.xlsx' // Restrict to documents
      },
      validation: Rule => Rule.required()
    }
  ]
}
