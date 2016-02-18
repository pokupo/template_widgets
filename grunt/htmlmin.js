module.exports = {
    dist: {
        options: {
            collapseWhitespace: true,
            preserveLineBreaks:true
        },
        files:[
            {
                expand: true,
                cwd: 'themes/default/src/tmpl/',
                src: ['*.html'],
                dest: 'themes/default/tmpl/'
            },
            {
                expand: true,
                cwd: 'themes/default/src/',
                src: ['loader.html'],
                dest: 'themes/default/'
            },
            {
                expand: true,
                cwd: 'themes/black_yellow/src/',
                src: ['loader.html'],
                dest: 'themes/black_yellow/'
            },
            {
                expand: true,
                cwd: 'themes/blue/src/',
                src: ['loader.html'],
                dest: 'themes/blue/'
            },
            {
                expand: true,
                cwd: 'themes/brown_green/src/',
                src: ['loader.html'],
                dest: 'themes/brown_green/'
            },
            {
                expand: true,
                cwd: 'themes/pink_blue/src/',
                src: ['loader.html'],
                dest: 'themes/pink_blue/'
            },
            {
                expand: true,
                cwd: 'themes/red_black/src/',
                src: ['loader.html'],
                dest: 'themes/red_black/'
            },
            {
                expand: true,
                cwd: 'themes/red_green/src/',
                src: ['loader.html'],
                dest: 'themes/red_green/'
            },
            {
                expand: true,
                cwd: 'themes/payment/src/',
                src: ['loader.html'],
                dest: 'themes/payment/'
            },
            {
                expand: true,
                cwd: 'themes/payment_dark/src/',
                src: ['loader.html'],
                dest: 'themes/payment_dark/'
            },
            {
                expand: true,
                cwd: 'themes/payment_company/src/',
                src: ['loader.html'],
                dest: 'themes/payment_company/'
            },
            {
                expand: true,
                cwd: 'themes/payment_company_white/src/',
                src: ['loader.html'],
                dest: 'themes/payment_company_white/'
            }
        ]
    }
};