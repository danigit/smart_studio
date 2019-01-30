/**
 * Function that draw the border of the canvas
 * @param canvas - the canvas on which to draw
 * @param context - the context of the canvas
 * @param space
 */
function drawCanvasBorder(canvas, context, space) {
    context.setLineDash([0, 0]);
    context.strokeStyle = 'black';
    context.fillStyle   = 'black';
    context.lineWidth   = 1;
    context.beginPath();
    context.moveTo(space, space);
    context.lineTo(space, canvas.height - space);
    context.lineTo(canvas.width - space, canvas.height - space);
    context.lineTo(canvas.width - space, space);
    context.lineTo(space, space);
    context.stroke();
}

function encodeRequest(action, data) {
    return JSON.stringify({action: action, data: data});
}

function drawDashedLine(canvas, context, length, pattern, spacing, width, direction) {
    let virtualWidth = scaleSize(width, canvas) * spacing;
    context.strokeStyle = 'lightgray';

    if (direction === 'horizontal') {
        for (let i = 25; i < canvas.height - 25; i += virtualWidth){
            context.beginPath();
            context.setLineDash(pattern);
            context.moveTo(25, i);
            context.lineTo(length - 25, i);
            context.stroke();
        }
    }else if (direction === 'vertical'){
        for (let i = 25; i < canvas.width - 25; i += virtualWidth){
            context.beginPath();
            context.setLineDash(pattern);
            context.moveTo(i, 25);
            context.lineTo(i, length - 25);
            context.stroke();
        }
    }
}

function updateCanvas(canvas, context, image) {
    if (image !== undefined) {
        context.drawImage(image, 0, 0);
        context.stroke();
    }
    drawCanvasBorder(canvas, context, 25);
}


function drawIcon(result, context, img, width, canvas) {
    let virtualRadius = 0;

    angular.forEach(result, function (value) {
        virtualRadius = scaleSize(width, canvas) * value.radius;

        context.beginPath();
        context.fillStyle = '#0093c4';
        context.fillRect(value.x_pos, value.y_pos - 17, 15, 15);
        context.fillStyle = 'white';
        context.fillText(value.id, value.x_pos + 5, value.y_pos - 6);
        context.drawImage(img, value.x_pos, value.y_pos);
        context.strokeStyle = '#ff000015';
        context.stroke();
        if (value.radius > 0){
            context.beginPath();
            context.setLineDash([]);
            context.arc(value.x_pos + 5, value.y_pos - 6, virtualRadius, 0, 2 * Math.PI);
            context.fillStyle = '#ff000009';
            context.fill();
            context.stroke();
        }

    });
}

function scaleSize(width, canvas) {
    return (100/width) * (canvas.width/100);
}

function openFullScreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}