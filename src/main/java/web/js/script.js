window.onload = add_to_loaded;

function add_to_loaded()
{
    var anchors =document.querySelectorAll('a[href^="#"]')
    for(let anchor of anchors)
        {
            anchor.addEventListener('click',function(anchor_event){
                anchor_event.preventDefault();
                var blockID=anchor.getAttribute('href')
                document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth'
            })
            })
        }
}
function validateForm()
{
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    var tel_no = document.forms["form"]["tel_no"].value;
    var category = document.forms["form"]["category"].value;
    var comment = document.forms["form"]["comment"].value;
    var ch_b = document.forms["form"]["ch_b"].checked;
    var dt = new Date(document.forms["form"]["date"].value);

    if (category === '0')
    {
        Pop_up('Категория не выбрана\n');
        return false;
    }
    if (name.trim() === '')
    {
        Pop_up('Имя не заполнено\n');
        return false;
    }
    else if (name.length > 15)
    {
        Pop_up('Имя введено не верно, длинна больше 15 символов\n');
        return false;
    }
    else if (/[<>()\[\]\\.,;:\s@"0-9]/i.test(name))
    {
        Pop_up('Имя введено не верно, присутствуют запрещённые символы\n');
        return false;
    }

    if (tel_no.trim() === '')
    {
        Pop_up('Номер телефона не заполнен\n');
        return false;
    }
    else if(tel_no.length > 16)
    {
        Pop_up('Номер введен не верно, длинна больше 16 символов\n');
        return false;
    }
    else if (tel_no.match(/38[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/) == null)
    {
        Pop_up('Номер введен не верно, формат не соответствует заданному\n');
        return false;
    }

    if (email.trim() === '')
    {
        Pop_up('Почта не заполнена\n');
        return false;
    }
    else if(email.length > 40)
    {
        Pop_up('Почта введена не верно, длинна больше 40 символов\n');
        return false;
    }
    else if (email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null)
    {
        Pop_up('Почта введена не верно, формат не соответствует заданному\n');
        return false;
    }

    if (comment.trim() ===  '')
    {
        Pop_up('Строка комменатриев пуста\n');
        return false;
    }

    if (!ch_b)
    {
        Pop_up('Вы не согласились на обработку данных\n');
        return false;
    }

    var max = new Date("2019-12-31");
    var min = new Date("2019-09-01");
    if (dt < min || dt > max)
    {
        Pop_up('Дата больше 2019-12-31 или меньше 2019-09-01\n');
        return false;
    }

    return true;
}

function Pop_up(msg)
{
    var win = document.getElementById("popup_background");
    win.style.display = "block";

    var button = document.getElementById("item5");
    var close_button = document.getElementsByClassName("close")[0];

    button.onclick = function() {
        win.style.display = "block";
    };

    close_button.onclick = function() {
        win.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == win) {
            win.style.display = "none";
        }
    };

    var red_button = document.getElementById('popup_button_no');
    var title = document.getElementById("popup_window_title");
    var errors = document.getElementById("popup_errors");

    red_button.onclick = function() {
        win.style.display = "none";
    };
    title.innerHTML = 'Ошибка отправки';
    errors.innerHTML = msg;
}

