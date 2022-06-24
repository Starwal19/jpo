function toggle_hidde_show(nb_hint) {
    button = document.getElementById("Button"+nb_hint);
    hint = document.getElementById("Hint"+nb_hint);
    container = document.getElementById("Container"+nb_hint);
    if (button.title == "Show") {
        container.style.backgroundColor = "white";
        hint.style.visibility = "visible";
        button.title = "Hidde";
    } else {
        container.style.backgroundColor = "silver";
        hint.style.visibility = "hidden";
        button.title = "Show";
    }
}

function valid_flag(level) {
    value_flag = document.getElementById("flag").value
    msg = document.getElementById("flag-msg")
    if (level == "easy") {
        if (value_flag == "$FLAG_{steghide_est_génial}") {
            msg.innerHTML = "Flag correct.";
            msg.style.visibility = "visible";
            msg.style.color = "green";
        } else {
            msg.innerHTML = "Flag incorrect."; 
            msg.style.visibility = "visible";
            msg.style.color = "red";
        }
    }
    if (level == "medium") {
        if (value_flag == "$FLAG_{exiftool_l'est_aussi}") {
            msg.innerHTML = "Flag correct.";
            msg.style.visibility = "visible";
            msg.style.color = "green";
        } else {
            msg.innerHTML = "Flag incorrect."; 
            msg.style.visibility = "visible";
            msg.style.color = "red";
        }
    }
    if (level == "hard") {
        if (value_flag == "$FLAG_{LesFancyBearNeMeFontPasPeur}") {
            msg.innerHTML = "Flag correct.";
            msg.style.visibility = "visible";
            msg.style.color = "green";
        } else {
            msg.innerHTML = "Flag incorrect."; 
            msg.style.visibility = "visible";
            msg.style.color = "red";
        }
    }
    if (level == "advanced") {
        if (value_flag == "$FLAG_{Non,pasTwitter!}") {
            msg.innerHTML = "Flag correct.";
            msg.style.visibility = "visible";
            msg.style.color = "green";
        } else {
            msg.innerHTML = "Flag incorrect."; 
            msg.style.visibility = "visible";
            msg.style.color = "red";
        }
    }
    if (level == "expert") {
        if (value_flag == "$FLAG_{cette nuit}") {
            msg.innerHTML = "Flag correct.";
            msg.style.visibility = "visible";
            msg.style.color = "green";
        } else {
            msg.innerHTML = "Flag incorrect."; 
            msg.style.visibility = "visible";
            msg.style.color = "red";
        }
    }
}