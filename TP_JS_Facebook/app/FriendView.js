var PricingModel = Backbone.Model.extend({
	prices:[
		{count:5, pricing:99},
        {count:10, pricing:149},
        {count:15, pricing:239},
        {count:30, pricing:469},
        {count:50, pricing:890}
	],
	defaults:{
		serverCount : 0,
		pricing : 0
	},

	setPosition : function (position){
		if(!this.prices[position]){return;}

		this.set('count', this.prices[position].count);
		this.set('pricing', this.prices[position].pricing);
	}
});


var PricingView = Backbone.View.extend({
	events : {
		'change #sliderPricing':'onChange'
	},
	initialize : function(){
		this.model.on('change:pricing', this.renderPricing, this);
		this.model.on('change:count', this.renderServerCount, this);
		this.$price = this.$el.find('#price');
		this.$count = this.$el.find('#count');
	},
	onChange : function(e){
		console.log($(e.currentTarget).val());
		this.model.setPosition($(e.currentTarget).val());
	},
	renderPricing:function(model, value){ // Model et Value donnés par Backbone
		this.$price.text(value);
	},
	renderServerCount:function(model, value){
		this.$count.text(value);
	}
});

// Bootstrap -- Initialisation des models, vues
var pricingModel = new PricingModel();
var view = new PricingView({
	model: pricingModel,
	el : $('.entreprise')[0]
});