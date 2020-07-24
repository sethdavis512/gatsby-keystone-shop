const React = require('react');

export default {
    // logo,
    pages: () => [
        // Custom pages
        {
            label: 'A new dashboard',
            path: 'test',
            component: () => <div>Test</div>
        }
    ]
    // customToast
};
