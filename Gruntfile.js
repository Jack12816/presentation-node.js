/* global module:false */
module.exports = function(grunt) {

    var port = grunt.option('port') || process.env.NODE_PORT || 8000;

    // Project configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            compress: {
                files: {
                    'public/css/theme.min.css': ['public/css/theme.css'],
                    'public/css/custom.min.css': ['public/css/custom.css']
                }
            }
        },

        uglify: {
            compress: {
                files: {
                    'public/js/custom.min.js': ['public/js/custom.js']
                }
            }
        },

        shell: {
            concatContents: {
                command: 'make build'
            }
        },

        connect: {
            server: {
                options: {
                    port: port,
                    base: './public/'
                }
            }
        },

        watch: {
            main: {
                files: [
                    'Gruntfile.js',
                    'public/css/theme.css',
                    'public/css/custom.css',
                    'public/js/custom.js'
                ],
                tasks: 'default'
            },
            content: {
                files: ['content/**'],
                tasks: 'content'
            }
        }
    });

    // Dependencies
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task
    grunt.registerTask('default', ['cssmin', 'uglify']);

    // Content generation (jade to HTML)
    grunt.registerTask('content', ['shell']);

    // Serve presentation locally
    grunt.registerTask('serve', ['connect', 'watch']);
};

