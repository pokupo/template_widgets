module.exports = {
    dist: {
        options: {
            collapseWhitespace: true,
            preserveLineBreaks:true
        },
        files:[{
            expand: true,
            cwd: 'themes/default/src/tmpl/',
            src: ['*.html'],
            dest: 'themes/default/tmpl/'
        }]
    }
};