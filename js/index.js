function init() {
    // 绑定鼠标移入移出事件
    bindEvent();
}
init();

function bindEvent() {
    $('.cube').on('mouseenter', function (e) {
        addClass(e, 'in', this);
        changeBg(this);
    }).on('mouseleave', function (e) {
        addClass(e, 'out', this);
        $(this).on('animationend', function () {
            if ($(this).attr('id').indexOf('out') !== -1) {
                $(this).attr('id', '');
            }
        })

    })
}

function addClass(e, state, item) {
    var d = getDir(e, item);
    var str = '';
    switch (d) {
        case 0:
            str += '-top';
            break;
        case 1:
            str += '-right';
            break;
        case 2:
            str += '-bottom';
            break;
        case 3:
            str += '-left';
            break;
    }
    $(item).attr('id', '');
    $(item).attr('id', state + str);
}

function getDir(e, item) {
    var w = item.offsetWidth;
    var x = e.clientX - item.offsetLeft - w / 2;
    var y = e.clientY - item.offsetTop - w / 2;
    var d = (Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90) + 3) % 4;
    return d;
}
function changeBg(item) {
    var color = $(item).attr('data-bg');
    $('.wrapper').attr('id', color);
}