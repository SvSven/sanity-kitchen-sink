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
                  buildHookId: '5f59fbdf1d14cc013d21c351',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8re5rq5r',
                  apiId: '7ad9c88c-a2ea-43a1-a170-c6b1d91ef586'
                },
                {
                  buildHookId: '5f59fbdf052b7300a1fab040',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-52hczoaj',
                  apiId: '83a4645e-9379-46bf-8354-d6a676dad0dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SvSven/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-52hczoaj.netlify.app', category: 'apps'}
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
