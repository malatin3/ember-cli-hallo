import Ember from 'ember';
import layout from '../templates/components/hallo-editor';

export default Ember.Component.extend({
	layout,
	options: {},

	didInsertElement() {
		jQuery('p').hallo(this.get('options'));
	}
});
