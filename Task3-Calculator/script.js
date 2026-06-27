const display = document.getElementById("display");
function appendValue(value) {

    if (display.value === "Invalid") {

        display.value = "";

    }

    display.value += value;

}
function clearDisplay() {

    display.value = "";

}
function deleteLast() {

    display.value = display.value.slice(0, -1);

}
function calculate() {

    try {

        if (display.value === "") return;

        display.value = eval(display.value);

    }

    catch {

        display.value = "Invalid";

        setTimeout(() => {

            display.value = "";

        }, 1000);

    }

}
function changeSign() {

    if (display.value) {

        display.value = Number(display.value) * -1;

    }

}

document.addEventListener("keydown", function (e) {

    const key = e.key;

    if (
        "0123456789+-*/.%".includes(key)
    ) {
        appendValue(key);
    }

    else if(key==="Enter" || key==="=") {

        calculate();

    }

    else if (key === "Backspace") {

        deleteLast();

    }

    else if (key === "Escape") {

        clearDisplay();

    }

});