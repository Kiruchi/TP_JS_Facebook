FbApp.AppView = Backbone.View.extend({
  events:{
    'click #byName':'sortByName',
    'click #byBirthday':'sortByBirthday',
    'keyup #search':'search',
    'click #rs' : 'showRelationShipChart',
    'click #sex' : 'showSexChart',
    'click #age' : 'showAgeChart',
    'click #count' : 'showCountChart'
  },

  initialize: function(){
    this.collection.on('reset', this.render, this);
    this.$friendList = this.$el.find('.friend-list');
  },

  search: function(e){
    this.collection.search(e.currentTarget.value);
  },

  sortByName: function(){
    this.collection.sortByName();
  },

  sortByBirthday: function(){
    this.collection.sortByBirthday();
  },

  showRelationShipChart: function(){
    this.relationShipView.render();
  },

  showSexChart: function(){
    this.sexView.render();
  },

  showAgeChart: function(){
    this.ageView.render();
  },

  showCountChart: function(){
    this.countView.render();
  },

  render: function(collection){
    this.$friendList.empty();

    var $container = $('<div/>');

    collection.forEach(function(friend){
      var view = new FbApp.FriendView({model: friend});
      $container.append(view.render().$el);
    }, this);

    this.$friendList.append($container);
  }
});

