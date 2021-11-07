$(document).ready(function () {

    $(".token-row").on("click", function () {
        var dt = $(this).attr("data-token");
        if (dt) {
            var dtsrc = $(this).find("img").attr("src");
            var dtTokenAbbr = $(this).find(".token-abbr").text();
            // console.log(dt + " " + dtsrc + " " + dtTokenAbbr)
            $("#tokenBtnOne").find("img").attr("src", dtsrc)
            $("#tokenBtnOne").find("span").html(dtTokenAbbr)
            
            $('#tokenSymbol').modal('hide');
        }
        else {
            console.log("seconf one")
            var dtsrc = $(this).find("img").attr("src");
            var dtTokenAbbr = $(this).find(".token-abbr").text();

            $("#tokenBtnTwo").removeClass("select-token-btn").addClass("token-symbol-btn");
            $("#tokenBtnTwo").find(".caret-right-btn").css("display","none")
            $("#tokenBtnTwo").find(".caret-down-btn").css("display","block")

            $("#tokenBtnTwo").find("img").attr("src", dtsrc).css("display","block")
            $("#tokenBtnTwo").find("span").html(dtTokenAbbr)

            $('#tokenSymbol2').modal('hide');
        }


    })
});