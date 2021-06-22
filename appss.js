document.addEventListener('DOMContentLoaded',()=>{
    Highcharts.chart('container',{

        chart : {
            type:'areaspline',
            zoomType:'x'
        },
        yAxis:{
            title :{
                
            text:'Fruit eaten'
            }
        },
        tooltip :{
            borderColor:'red',
            // followPointer:true
            formatter() {
                console.log("asdasdat",this);
                return `X value = ${this.x} Y value = ${this.y}`
            }
            ,
        },
        xAxis : {
            categories: ['Apples','Bananas','Oranges']
        },
        series : [{
            name:'John',
            data:[1,2,3]
        },
        {
            name:'yash',
            data:[2,4,8]
        },
        {
            name:'cape',
            data:[6,12,18]
        },
    {

    }]
    })
})