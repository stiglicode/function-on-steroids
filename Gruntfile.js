const DEV__filesStructure = [
	"./src/utilities/*js",
	"./src/layout/*js",
	"./src/functions/js/*/*js",
	"./src/functions/js/*js",
	"./src/helpers/*.js",
	"./src/test/index.test.js",
];

const PROD__filesStructure = [
	"./src/utilities/*js",
	"./src/layout/*js",
	"./src/functions/js/*/*js",
	"./src/functions/js/*js",
	"./src/helpers/*.js",
	"./src/export/*js",
];

module.exports = function (grunt) {
	require("jit-grunt")(grunt);
	require("time-grunt")(grunt);

	grunt.initConfig({
		uglify: {
			production: {
				options: {
					sourceMap: true,
					sourceMapName: "./dist/steroid-js.map.js",
				},
				files: [
					{
						src: "./dist/steroid-js.js",
						dest: "./dist/steroid-js.min.js",
					},
				],
			},
			dev: {
				options: {
					sourceMap: true,
					sourceMapName: "./test/steroid-js.test.min.map.js",
				},
				files: [
					{
						src: "./test/steroid-js.test.js",
						dest: "./test/steroid-js.test.min.js",
					},
				],
			},
		},
		concat: {
			dev: {
				src: DEV__filesStructure,
				dest: "./test/steroid-js.test.js",
			},
			production: {
				src: PROD__filesStructure,
				dest: "./dist/steroid-js.js",
			},
		},
	});

	grunt.registerTask("build", ["concat:production", "uglify:production"]);
	grunt.registerTask("dev", ["concat:dev", "uglify:dev"]);
};
