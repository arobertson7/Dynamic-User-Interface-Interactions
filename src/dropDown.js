import menuIcon from "./menu.svg";
import menuDownIcon from "./menu-down.svg"

/* requirements for using dropDown
    - must pass in as parameters:
        * BUTTON - the button which toggles dropdown
        * CONTENT - what drops down
        * (optional) buttonIconClosed, buttonIconOpen
    - CONTENT must be comprised of 'li' elements
*/

const dropDown = (function() {
    const openMenu = function(button, content, buttonIconOpen) {
        content.style.visibility = "visible";
        const contentItems = content.querySelectorAll('li');
        // fade in content items one after another
        let timer = 0;
        for (let i = 0; i < contentItems.length; i++) {
            setTimeout(() => {
                contentItems[i].style.opacity = "1";
            }, timer)
            timer += 50;
        }
        // change button svg
        button.querySelector('img').src = buttonIconOpen;
    }

    const closeMenu = function(button, content, buttonIconClosed) {
        const contentItems = content.querySelectorAll('li');
        // fade out content items one after another
        let timer = 0;
        for (let i = contentItems.length - 1; i >= 0; i--) {
            setTimeout(() => {
                contentItems[i].style.opacity = "0";
            }, timer)
            timer += 25;
        }
        timer += 50;
        setTimeout(() => {
            content.style.visibility = "hidden";
            button.querySelector('img').src = buttonIconClosed;
        }, timer);
    }

    const toggle = function(button, content, buttonIconClosed = menuIcon, buttonIconOpen = menuDownIcon) {
        if (content.style.visibility == "hidden") {
            openMenu(button, content, buttonIconOpen);
        }
        else {
            closeMenu(button, content, buttonIconClosed);
        }
    }

    return { toggle };
}());

export default dropDown;