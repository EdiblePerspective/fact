
//array
const stats=[
    {str:14},
    {dex:15},
    {con:13},
    {int:15},
    {wis:17},
    {cha:11},
]
for(let i=0; i<=5; i++){
    console.log(stats[i]);
}

function total(){
    console.log(stats)
}


//////////////////////////////////////////////////////

//object
const atr={
    str:14,
    dex:15,
    con:13,
    int:15,
    wis:17,
    cha:11,
    getTotal: function(){
        return this.str+this.dex+this.con+this.int+this.wis+this.cha;
    },
};

const overall=atr.getTotal();
function all(){
    console.log(overall) //print total stats, 85
}
