let userAction = "ontouchend" in window ? "touchend" : "click";
$(document).on(userAction, "i", function() {
    $(this).on(userAction, function() {
        let rows = [];
        $(this).closest(".code").find("ol li").each(function() {
            rows.push($(this).text())
        });
        // copy contents of rows_array as a joined text with break separater between each value
        navigator.clipboard.writeText(rows.join("\n"));
        // $(this).addClass("isClicked").delay(2000).queue(next => {
        //     $(this).removeClass("isClicked");
        //     next();
        // })
        new Promise(resolve => {
            $(this).addClass("isClicked");
            resolve();
        }).then(() => {
            setTimeout(() => {
                $(this).removeClass("isClicked");
            }, 1000)
        })
    })
})