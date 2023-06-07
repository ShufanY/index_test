$(function () {

    let index = 0;
    let timer = setInterval(moveToNext, 5000);

    $('#contentButton li').click(function(){
        clearInterval(timer)
        index = $(this).index();

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clickme')
        $('#contentButton li').not(this).removeClass('clickme');
        
        timer = setInterval(moveToNext, 5000);
    })

    function moveToNext(){
        if(index < imgCount - 1){
            index++;
        }else{
            index = 0;
        }

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(`#contentButton li:eq(${index})`).addClass('clickme');
        $('#contentButton li').not(`:eq(${index})`).removeClass('clickme');
    }
});