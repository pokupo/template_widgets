module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'scripts/main.js',
            '!scripts/main.min.js'
        ],
        tasks: [
            'jshint',
            'uglify'
        ]
    }
};