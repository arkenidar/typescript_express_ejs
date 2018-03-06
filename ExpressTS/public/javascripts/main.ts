declare var alert: any
// npm install --save-dev @types/jquery

function init(){
    $('#test').click(function () {
        alert('test div clicked!')
    })    
}

$(init)