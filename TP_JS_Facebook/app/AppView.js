// Création de AppView
FbApp.AppView = Backbone.View.extend({
	events:{
		'click #byName':'sortByName',
		'click #byBirthday':'sortByBirthday'
	},

	initialize: function(friends){
		this.collection.on('reset', this.render, this);
		this.$friendList = this.$el.find('.friend-list');
	},

	sortByName: function(){
		this.collection.sortByName();
	},

	sortByBirthday: function(){
		this.collection.sortByBirthday();
	},

	render: function(collection){
		this.$friendList.empty(); // Reset la friend-list

		var $container = $('<div/>'); // On charge le container puis on l'insère à la fin pour éviter d'injecter dans le DOM peu à peu

		collection.forEach(function(friend){
			var view = new FbApp.FriendView({model: friend});
			$container.append(view.render().$el);
		},this);

		this.$friendList.append($container);
	}
});