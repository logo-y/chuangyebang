

var selected = document.querySelector('.selected .right');
var clearEle = '<i class="close">x</i>';
var searchBtn = document.querySelector('.search-box .search');
var searchInput = document.querySelector('.search-box input');
var searchClear = document.querySelector('.search-box .clear');

var dataList = [
    {
        name: '乐嘉科技',
        code: 'sh688886',
        time: '2018-18-03',
        rise: '+9.4',
        shouru: '35.34亿',
        lirun: '12.4亿',
        shiying: '6.8',
        market: '132.80亿'
    },
    {
        name: 'as科技',
        code: 'sh688885',
        time: '2018-18-04',
        rise: '+8.4',
        shouru: '45.34亿',
        lirun: '14.4亿',
        shiying: '7.8',
        market: '32.80亿'
    },
    {
        name: 'ww科技',
        code: 'sh688884',
        time: '2018-18-05',
        rise: '+7.4',
        shouru: '25.34亿',
        lirun: '16.4亿',
        shiying: '6.5',
        market: '13.80亿'
    },
    {
        name: 'ff科技',
        code: 'sh688883',
        time: '2018-18-06',
        rise: '+6.4',
        shouru: '15.34亿',
        lirun: '18.4亿',
        shiying: '4.8',
        market: '232.80亿'
    },
    {
        name: 'aw科技',
        code: 'sh688882',
        time: '2018-18-07',
        rise: '+5.4',
        shouru: '55.34亿',
        lirun: '10.4亿',
        shiying: '6.0',
        market: '532.80亿'
    },
]
var conditions={
    name: '',
    code: '',
    time: '',
    rise: '',
    shouru: '',
    lirun: '',
    shiying: '',
    market: ''
};
setList(conditions);

searchBtn.onclick = function(){
    if(searchInput.value != ''){
        var span;
        if(selected.querySelector('.search-cell')){
            span = selected.querySelector('.search-cell')
        }else{
            span = document.createElement('span')
        }
        span.innerHTML = searchInput.value + clearEle;
        span.className = 'cell search-cell';
        selected.appendChild(span);

        conditions.name = searchInput.value;
        setList(conditions);
    }
}
searchClear.onclick = function(){
    searchInput.value = '';
    if(selected.querySelector('.search-cell')){
        selected.removeChild(selected.querySelector('.search-cell'));

        conditions.name = '';
        setList(conditions);
    }
}

var timeCell = document.querySelectorAll('.time-cell .right .cell');
for(var i=0;i<timeCell.length;i++){
    var timeCellClear = timeCell[i].querySelector('.close')
    timeCell[i].onclick = function(){
        for(var j=0;j<timeCell.length;j++){
            remove(timeCell[j])
        }
        add(this);
        var span;
        if(selected.querySelector('.time-cell')){
            span = selected.querySelector('.time-cell')
        }else{
            span = document.createElement('span')
        }
        span.innerHTML = this.innerHTML;
        span.className = 'cell time-cell';
        selected.appendChild(span);
    }
    timeCellClear.addEventListener('click',function(e){
        e.stopPropagation();
        remove(this.parentNode);
        selected.removeChild(selected.querySelector('.time-cell'));
    })
}

function setList(conditions){
    var tbody = document.querySelector('table tbody');
    var list = filter(conditions, dataList);
    tbody.innerHTML = '';
    for(var i=0;i<list.length;i++){
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${list[i].name}</td>
            <td>${list[i].code}</td>
            <td>${list[i].time}</td>
            <td>${list[i].rise}</td>
            <td>${list[i].shouru}</td>
            <td>${list[i].lirun}</td>
            <td>${list[i].shiying}</td>
            <td>${list[i].market}</td>
        `;
        tbody.appendChild(tr);
    }
}
function filter(condition, data){
    return data.filter(item => {
        return Object.keys(condition).every(key => {
            return String(item[key]).toLowerCase().includes(String(condition[key]).trim().toLowerCase() )
        })
    })
}

function add(el){
    el.classList.add("active");
}; 
function remove(el){
    el.classList.remove("active");
};