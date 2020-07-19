var include = {
    head : {
        title : function(tit){
            document.write('<title>' + tit + '</title>');
        },
        meta :function () {
            document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
        },
        styles : function(tit) {
            document.write('<link rel="stylesheet" href="css/reset.css">');
            document.write('<link rel="stylesheet" href="css/common.css">');
            document.write('<link rel="stylesheet" href="css/profile.css">');
        },
        scripts : function() {
            document.write('<script src="js/vendor/jquery-3.4.0.min.js"></script>');
            document.write('<script src="js/vendor/p5.min.js"></script>');
            document.write('<script src="js/grm.js"></script>');
            document.write('<script src="js/gdata.js"></script>');
            document.write('<script src="js/profile.js"></script>');
            document.write('<script src="js/front-ui-min.js"></script>');
        }
    },
    footer : {
        scripts : function(){
            document.write('<script src="js/draw-visual.js"></script>');
        }
    }

}