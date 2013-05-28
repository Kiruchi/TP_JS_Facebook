FbApp.SexChartView = FbApp.ChartView.extend({
		initialize: function(){
		this.model.on('change:chartData', this.render, this);
		this.$chart = this.$el.find('.chartsTab');
	},

	render: function(){
		this.$chart.append(        
				$('.chartsTab').highcharts({
	            chart: {
	                plotBackgroundColor: null,
	                plotBorderWidth: null,
	                plotShadow: false
	            },
	            title: {
	                text: 'Sex'
	            },
	            tooltip: {
	              pointFormat: '{series.name}: <b>{point.percentage}%</b>',
	              percentageDecimals: 1,
	              formatter: function() {
  				 	 return '<b>'+ this.point.name +'</b>: '+ Math.round(this.percentage) +' %';
				  }
	            },
	            plotOptions: {
	                pie: {
	                    allowPointSelect: true,
	                    cursor: 'pointer',
	                    dataLabels: {
	                        enabled: true
	                    },
	                    showInLegend: true
	                }
	            },
	            series: [{
	                type: 'pie',
	                name: 'Pourcentage ',
	                data: this.model.get('chartData')
	            }]
	        })
		);
	}
});
