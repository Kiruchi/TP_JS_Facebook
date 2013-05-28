FbApp.CountChartModel = FbApp.ChartModel.extend({
		processData: function(){
		// On crée un array qui prendra toute l'info sur le nb d'amis
		var data=[];
		this.collection.forEach(function(friend){
			data[friend.get("friend_count")] += 1;			
		});

		for(var i in data)
		{
		    data[i] = 0;
		}

		// On remplit l'array à partir des infos sur le nb d'amis
		this.collection.forEach(function(friend){
			data[friend.get("friend_count")] += 1;	
		});

		var dataTemp = [];

		// On crée le tableau pour HighCharts
		for(var i in data)
		{
			if(i != ""){
				dataTemp.push([i, data[i]]);
			} else {
				dataTemp.push(['Undefined', data[i]]);
			}
			
		    console.log(i + "=" + data[i]);
		}
		this.set('chartData', dataTemp);
		console.log(this.get('chartData'));
	}
});
