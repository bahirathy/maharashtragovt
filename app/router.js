import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rto');
  this.route('education');
  this.route('dash');
  this.route('Issued');
  this.route('uploaded');
  this.route('shared');
  this.route('activity');
  this.route('status');
});

export default Router;
