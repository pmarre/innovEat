const nav_overlay = document.getElementById('mobile--background--js');
const nav_stack = document.getElementById('menu--stack');
const close = document.getElementById('close');
const menu_items = document.getElementById('mobile--menu');

nav_stack.addEventListener('click', function(){
    nav_overlay.style.width = '100%';
    setTimeout(mobile_menu_height_grow, 500);
});

close.addEventListener('click', function(){
    mobile_menu_height_shrink();
    setTimeout(mobile_menu_width_shrink, 500);
});


function mobile_menu_width_shrink() {
    nav_overlay.style.width = '0';
}


function mobile_menu_height_grow(){
        nav_overlay.style.height = '100vh';
        menu_items.style.display = 'flex';
}

function mobile_menu_height_shrink(){
    nav_overlay.style.height = '10vh';
    menu_items.style.display = 'none';
}
