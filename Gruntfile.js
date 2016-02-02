module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: true,
        staticMappings: {
            jshint: 'grunt/jshint.js'
        }
    });
};