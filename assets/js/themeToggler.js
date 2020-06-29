function toggleTheme() {
    var S = document.styleSheets;

    // 4 = light
    // 5 = dark
    if (S[5].disabled) {
        S[5].disabled = false;
        S[4].disabled = true;
    }
    else {
        S[4].disabled = false;
        S[5].disabled = true;
    }
}
