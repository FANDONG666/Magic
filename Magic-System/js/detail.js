$(function(){
	 
	
var myChart2 = echarts.init(document.getElementById('leftStatistic1'));
var colors = ['#5793f3', '#d14a61', '#675bba'];
  
	 	
	 	
 function cxf(aa){
 	
 	var b= {
     title: {
        text: '投稿量',  
        left:"50px"
    },
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '投稿量  ' + params.value + '：' + params.seriesData[0].data;
                    }
                }
            },
             data: ["25", "50", "75", "100", "125", "150", "175", "200", "225", "250"]
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '成交量  ' + params.value + '：' + params.seriesData[0].data;
                    }
                }
            },
            data: ["25", "50", "75", "100", "125", "150", "175", "200", "225", "250"]
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: aa,
 
};

myChart2.setOption(b)
 	
 }

cxf(aa)

 
})


