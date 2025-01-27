const cfg = require('@hexonet/semantic-release-github-npm-config');
cfg.plugins.unshift([
	'@semantic-release/exec',
	{
		prepareCmd: 'gulp build',
	},
]);
cfg.plugins = cfg.plugins.map(plugin => {
	if (plugin[0] === '@semantic-release/git') {
		plugin[1].assets.push(
			'uts46.min.js',
			'idna-map.min.js',
			'uts46bundle.js',
			'uts46bundle.min.js',
			'uts46bundle.min.js.map',
		);
	}
	return plugin;
});
module.exports = cfg;
