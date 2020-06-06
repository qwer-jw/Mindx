var questionbank=[     //anh em điền câu hỏi với câu trả lời vào cái biến này nhé, anh đang để hết ở dạng array
    [
        "cauhoi0",
        "dung",
        "sai1",
        "sai2",
        "sai3"
    ],
    [
        "cauhoi1",
        "dung",
        "sai1",
        "sai2",
        "sai3"
    ],
    [
        "cauhoi2",
        "dung",
        "sai1",
        "sai2",
        "sai3"
    ],
    [
        "cauhoi3",
        "dung",
        "sai1",
        "sai2",
        "sai3"
    ],
    [
        "cauhoi4",
        "dung",
        "sai1",
        "sai2",
        "sai3"
    ],
    [
        "cauhoi5",
        "dung",
        "sai1",
        "sai2",
        "sai3"
    ],
    [
        "cauhoi6",
        "dung",
        "sai1",
        "sai2",
        "sai3"
    ],
    [
        "cauhoi7",
        "dung",
        "sai1",
        "sai2",
        "sai3"
    ],
    [
        "cauhoi8",
        "dung",
        "sai1",
        "sai2",
        "sai3"
    ],
    [
        "cauhoi9",
        "dung",
        "sai1",
        "sai2",
        "sai3"
    ],
    [
        "cauhoi10",
        "dung",
        "sai1",
        "sai2",
        "sai3"
    ],
] 
var rightansindex
var answer=document.getElementsByClassName("answers")
var ques=document.getElementById("cauhoi")
var scoreD=document.getElementById("score")
var score=0
function answers(){    //hàm này lấy câu hỏi ngẫu nhiên từ questionbank
    var quesindex=Math.floor(Math.random()*questionbank.length)
    ques.textContent=`Cau hoi: ${questionbank[quesindex][0]}`
    rightansindex=Math.floor(Math.random()*4)        //rightansindex là index của câu trả lời đúng
    answer[rightansindex].textContent=questionbank[quesindex][1]
    var y=[0,1,2,3]
    var remove=y.splice(rightansindex,1)
    var b=2
    console.log(y)
    for(var a=0;a<3;a++){  //cái loop này để đưa 3 câu trả lời sai vào vị trí ngẫu nhiên, đoạn này hơi khó hiểu tí :DDDD
        var z=Math.floor(Math.random()*y.length)
        answer[y[z]].textContent=questionbank[quesindex][b]
        b++
        remove=y.splice(z,1)
    }
}
function setup(){ //hàm này để tính điểm và tạo câu hỏi mới
    for(var x=0;x<4;x++){
        answer[x].addEventListener("click",function(e){
            var index=e.target.getAttribute("index")
            if(index==rightansindex){
                score+=50
            } else{
                score-=50
            }
            scoreD.textContent=`Your score: ${score}`
            answers()
            
        })
    }
}
answers()
setup()