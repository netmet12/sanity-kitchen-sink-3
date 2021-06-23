export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60d3a13dff4bf52198cc2c8e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-3-studio-tiu51jva',
                  apiId: '0dc0edc9-c014-455d-8bfc-9490be8ad7ea'
                },
                {
                  buildHookId: '60d3a13edefd941cf93df8ae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-3-web-v67pjqj7',
                  apiId: 'ab1ab566-9317-460b-a001-8b6e0a6d1c6f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/netmet12/sanity-kitchen-sink-3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-3-web-v67pjqj7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
