module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt); //加载所有的任务

    // 配置Grunt各种模块的参数
    grunt.initConfig({
        uglify:{
            release:{
                files: {
                    'angular-promise-button.min.js': ['angular-promise-button.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify:release']);

};
