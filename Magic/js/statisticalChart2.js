function seriesPie(cc){
		var myChart3 = echarts.init(document.getElementById('chart'));
		
		option3 = {
		  backgroundColor: '#fff',
		    color: ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'],
		    legend: {
		        itemGap:12,
		        bottom:'40px',
		        data:['变现指数','活跃指数','阅读指数','审核通过率']
		    },
		    series: cc,
		}
		myChart3.setOption(option3)
	}
seriesPie(cc);
	
	