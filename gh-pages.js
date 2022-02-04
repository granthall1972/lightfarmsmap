var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/granthall1972/lightfarmsmap.git', // Update to point to your repository  
        user: {
            name: 'Grant Hall', // update to use your name
            email: 'granthall1972@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete.')
    }
)