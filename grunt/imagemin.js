module.exports = {
    all: {
        files: [
            {
                expand: true,
                cwd: 'themes/black_yellow/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/black_yellow/images/'
            },
            {
                expand: true,
                cwd: 'themes/blue/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/blue/images/'
            },
            {
                expand: true,
                cwd: 'themes/brown_green/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/brown_green/images/'
            },
            {
                expand: true,
                cwd: 'themes/default/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/default/images/'
            },
            {
                expand: true,
                cwd: 'themes/pink_blue/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/pink_blue/images/'
            },
            {
                expand: true,
                cwd: 'themes/red_black/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/red_black/images/'
            },
            {
                expand: true,
                cwd: 'themes/red_green/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/red_green/images/'
            }]
    }
};