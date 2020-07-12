module.exports = function(plop) {
    plop.setGenerator('keystone list', {
        description: 'A KeystoneJS list generator',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Keystone list name:'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'lists/{{ pascalCase name }}.js',
                templateFile: 'plop-templates/keystone-list.hbs'
            }
        ]
    });

    plop.setGenerator('gatsby page', {
        description: 'A Gatsby page generator',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Gatsby page name:'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'client/src/pages/{{ camelCase name }}.tsx',
                templateFile: 'plop-templates/gatsby-page.hbs'
            }
        ]
    });
};
