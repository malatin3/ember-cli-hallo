/* eslint-env node */
module.exports = {
	normalizeEntityName: function() {},

	afterInstall: function() {
		return this.addBowerPackageToProject('hallo', '1.1.1');
	}
};
