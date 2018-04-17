function require(arr, callback) {
    //该方法可导出模块
    //请写出内部逻辑
    var fun = null;
    if (arr.length === 0) {
        fun = "arr is null"
    } else {
        arr.map(function(v, i) {
            fun = callback(v)
        })
        return fun();
    }


}


function define(arr, callback) {
    //该方法可定义模块
    //请写出内部逻辑

}




define(["jquery"], function($) {

})

require(["index"], function(index) {

})