export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f5bc75b1369810ea7ce50fc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cns7fayt',
                  apiId: '086b7292-b58a-4f54-9947-febac19ee44f'
                },
                {
                  buildHookId: '5f5bc75b1f20d40a30d92aa0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q86uen4b',
                  apiId: 'a260a309-9cc0-49a8-8e91-a2cbc71a2655'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wbrianrus/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q86uen4b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
