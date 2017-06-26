  //左边的统计图
	function seriesLeft(aa){
		var myChart = echarts.init(document.getElementById('leftStatistic'));
		option ={
			title:{text:'最近四周投稿数量折线图',textStyle:{fontFamily:'黑体',color:'#5a5a5a',fontSize:'20px'},left:'70px',top:'20px'},
			tooptip:{trigger:'axis'},
			grid:{containLabel: true,bottom:'30px',left:'9px'},
			xAxis: {type: 'category',boundaryGap: false,data: ['','','','','','',''],splitLine:{show: true},alineStyle:{color:'#f2f0e'},nameTextStyle:{color:'red'}},
			yAxis: {type: 'value',splitLine:{show: false}},
			backgroundColor:'#fff',
			series: aa,
		}
		myChart.setOption(option);
	}
	seriesLeft(aa);


	//右边的统计图
	function seriesRight(bb){
		var myChart2 = echarts.init(document.getElementById('rightStatistic'));
		option2 ={
		title:{text:'最近7天投稿文章阅读折线图',textStyle:{fontFamily:'黑体',color:'#5a5a5a',fontSize:'20px'},left:'70px',top:'20px'},
		tooptip:{trigger:'axis'},
		grid:{containLabel: true,bottom:'30px',left:'9px',show:'true',backgroundColor:'#6ed7c6',borderColor:'#84ddce',borderWidth:'1px'},
		xAxis: {type: 'category',boundaryGap: false,data: ['100','150','200','250','300','350','400','450'],splitLine:{show: true},alineStyle:{color:'#f2f0e'},axisLine:{show:false}},
		yAxis: {type: 'value',splitLine:{show: true},axisLine:{show:false}},
		backgroundColor:'#fff',
		series: bb,
		}
		myChart2.setOption(option2);
	}
	seriesRight(bb);

	