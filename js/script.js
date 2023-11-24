//burger
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
$(document).ready(function () {
    let selectedMenuItem = null;

    $(".menu-item").click(function () {
        const menuItem = $(this);

        if (selectedMenuItem === menuItem[0]) {
            return; // Ничего не делать, если кликнули по тому же элементу
        }

        const text = menuItem.text().trim();
        const newText = text.startsWith('|') ? text.slice(1) : '| ' + text;

        if (selectedMenuItem && selectedMenuItem !== menuItem[0]) {
            const prevText = $(selectedMenuItem).text().trim();
            $(selectedMenuItem).text(prevText.startsWith('|') ? prevText.slice(1) : '| ' + prevText);
            $(selectedMenuItem).removeClass('active');
            $(selectedMenuItem).removeClass('reversed');
        }

        menuItem.text(newText);
        menuItem.addClass('active');
        menuItem.toggleClass('reversed');
        selectedMenuItem = menuItem[0];
    });
});
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.headerBody h1').classList.toggle('none')
})
//burger

/////////////////////////////////////////////////////////////////////////////////////////////////

//Splide
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'fade',
        rewind: true,
    }).mount();

    splide.on('moved', function (newIndex) {
        var headerBodyH1 = document.querySelector('.headerBody h1');

        // Плавно скрываем текущий текст
        headerBodyH1.classList.remove('active');

        setTimeout(function () {
            if (newIndex + 1 === 1) {
                headerBodyH1.textContent = 'Helping clients create change';
            } else if (newIndex + 1 === 2) {
                headerBodyH1.textContent = 'The right people for your team';
            } else if (newIndex + 1 === 3) {
                headerBodyH1.textContent = 'Developing people, delivering results';
            }
            document.querySelectorAll('.headerFooterBox').forEach(elem => {
                var h4Text = elem.querySelector('h4').textContent;
            
                if (h4Text === headerBodyH1.textContent) {
                    setTimeout(function () {
                        elem.querySelector('h4').classList.add('activeH4');
                        elem.querySelector('hr').classList.add('activeHr');
                    }, 100); // Небольшая задержка
                } else {
                    setTimeout(function () {
                        elem.querySelector('h4').classList.remove('activeH4');
                        elem.querySelector('hr').classList.remove('activeHr');
                    }, 100); // Небольшая задержка
                }
            });
            // Плавно показываем новый текст
            headerBodyH1.classList.add('active');
        }, 500); // Задержка соответствует времени анимации opacity
        
    });
});

//Splide

/////////////////////////////////////////////////////////////////////////////////////////////////

//labels
$(document).ready(function () {
    // Инициализация Slick Carousel
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        easing: 'linear',
        cssEase: 'linear',
        arrows: false,
        swipe: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    speed: 4000,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    speed: 6000,
                    slidesToShow: 2,
                }
            },
            {
                speed: 8000,
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});
//labels

/////////////////////////////////////////////////////////////////////////////////////////////////

// last Slider
document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.container');
    
    function changeBackground(container) {
        // Устанавливаем текст "Learn more ->" для активного контейнера
        containers.forEach((c) => {
            c.querySelector('p').textContent = (c === container) ? 'Learn more ->' : '>';
        });
    }
    
    containers.forEach((container) => {
        container.addEventListener('click', function () {
            // Удаляем текущий класс из MainDIV
            document.getElementById('MainDIV').classList.remove('bg1');
            document.getElementById('MainDIV').classList.remove('bg2');
            document.getElementById('MainDIV').classList.remove('bg3');
            document.getElementById('MainDIV').classList.remove('bg4');
            document.getElementById('MainDIV').classList.remove('bg5');

            // Добавляем новый класс
            document.getElementById('MainDIV').classList.add(container.dataset.image);

            // Запускаем функцию для изменения текста
            changeBackground(container);
        });

        container.addEventListener('mouseenter', function () {
            container.style.opacity = '0.8';
        });

        container.addEventListener('mouseleave', function () {
            container.style.opacity = '1';
        });
    });
});






// last Slider







