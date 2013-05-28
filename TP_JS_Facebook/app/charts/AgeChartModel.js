FbApp.AgeChartModel = FbApp.ChartModel.extend({
	processData: function(){
		// On crée un array qui prendra toute l'info sur les birthday_date
		var data=[];
		this.collection.forEach(function(friend){
			var datestr = friend.get('birthday_date');
			if(datestr != null){
				var date = datestr.split("/");
				if(date[2]){
					date[2] = new Date().getFullYear() - date[2];
					data[date[2]] += 1;			
				} else {
					data["null"] += 1;
				}			
			} else {
				data["null"] += 1;
			}
		});

		for(var i in data)
		{
		    data[i] = 0;
		}

		// On remplit l'array à partir des infos sur les birthday_date
		this.collection.forEach(function(friend){
			var datestr = friend.get('birthday_date');
			if(datestr != null){
				var date = datestr.split("/");
				if(date[2]){
					date[2] = new Date().getFullYear() - date[2];
					data[date[2]] += 1;			
				} else {
					data["null"] += 1;
				}
			} else {
				data["null"] += 1;
			}
		});
		var dataTemp = [];

		// On crée le tableau pour HighCharts

		for(var i in data)
		{
			if(i != "null"){
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