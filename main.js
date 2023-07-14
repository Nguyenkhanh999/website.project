// // // //  var fullName = 'Nguyễn Văn Khánh ';
// // // //  // alert(fullName);
// // // //  /**
// // // //   * một số hàm built-in
// // // //   * alert : hàm bật lên cửa số hộp thoại 
// // // //   * console
// // // //   * confirm : hàm bật lên cửa số hộp thoại
// // // //   * Promt :hàm bật lên cửa số hộp thoại
// // // //   * set time out
// // // //   * set interval
// // // //   */
// // // // console.error(fullName)
// // // // confirm('Xac Nhan Ban Du Tuoi')
// // // // prompt('xác nhận bạn đủ tuổi')
// // // // - setTimeout(function() {
// // // //     alert('Thong Bao ')
// // // // }, 1000)
// // // // set timeout: cho 1 đoạn code chạy sau 1 khoảng thời gian đơn vị được tính bằng mm / s
// // // // setInterval(function() {
// // // //     console.loxg('Đây là Khánh' + Math.random())
// // // // }, 100)
// // // // var number = 9;
// // // // var output = number-- * 2;
// // // // console.log('out: ', output);
// // // // var myFunction = function() {
// // // //     alert('Hii. Xin chao tat ca cac ban');
// // // // }
// // // // myFunction();


// // // // Object Type 
// // // var a = 1;
// // // var b = 6;
// // // var c = 2.5;

// // // //  String Type 
// // // var fullName = 'Khanh Nguyen';

// // // // boolean 
// // // var isSuccess = true;

// // // // undefied 
// // // var age;
// // // console.log(typeof age)

// // // // Null
// // // var isNull = null;
// // // console.log(typeof isNull)

// // // // Symbol
// // // var id = Symbol('id');
// // // var id2 = Symbol('id');
// // // console.log(typeof id)

// // // // function
// // // var myFunction = function() {
// // //     alert('Hii chào các bạn ');
// // // }
// // // console.log(typeof myFunction)

// // // var myObject = {
// // //     name: 'Khanh Nguyen',
// // //     age: 18,
// // //     adress: 'Ha Noi',
// // //     myFunction: function() {

// // //     }

// // // };
// // // console.log(typeof myObject)

// // // myFunction()

// // // var myArray = [
// // //     'Javascrip',
// // //     'PHP',
// // //     'Ruby'
// // // ];
// // // console.log(typeof myArray)
// // var firstName = 'Khanh';
// // var lastName = 'Nguyen';

// // // console.log(` Tôi là: ${firstName} ${lastName}`);



// // Bài 21 làm việc với chuỗi 
// var myString = '      Hoc JS tai F8!             ';

// // 1. Length
// // console.log(myString.length);
// // 2. Find index
// // console.log(myString.lastIndexOf('JS'))
// // 3.Cut String
// // console.log(myString.slice(4, 6))
// // 4. Replace
// // console.log(myString.replace(/JS/g, 'Javascrips'))
// // 5. Convert to upper case
// // console.log(myString.toUpperCase())
// // 6. Convert to lower case
// // console.log(myString.toLowerCase())
// // 7. Trim
// // console.log(myString.length)
// // 8.Split
// // var languages = 'Javascript';
// // console.log(languages.split(''))
// // 9. Get a character by index
// const myString2 = 'Khanh Nguyen';
// console.log(typeof myString2[20])

// Bài 22 SỐ và làm việc với số
/**
 * kiểu số (Number) trong Javascript
 * 1. Tạo giá trị Number
 *  -Các cách tạo
 *  -DÙng các nào ? Tại Sao ?
 *  -Kiểm tra data type ?
 * 2. Làm việc với Number
 *  To String
 * -To Fixed
 */

// Bài 23 Mảng 
/**
 * 1. Tạo manrg
 *  cách tạo
 *  sử dụng cách nào ? tại sao?
 *  kiếm tra data Type
 * 2 Truy xuất mảng 
 *  Độ dài mảng 
 *  Lấy Phần tử theo index
 */
// var languages = [
//     'PyThon',
//     'Javascirpt',
//     'PHP',
//     'PHP',
//     'PHP',

// ];
// console.log(Array.isArray({}))
// var languages = [
//     'PyThon',
//     'Javascirpt',
//     'PHP',
//     'PHP',

// ];
// console.log(languages[3])

// Bài 23 Làm việc với mảng 
/** làm việc với Array
 * 1.To String
 * 2.join
 * 3.Pop: xóa đi phần tử (element) cuối mảng và trả về phần tử đã xóa
 * 4. Push : thêm phần tử vào cuối mảng và trả về độ dài mới của mảng
 * 5. Shift:xóa đi phàn từ đầu mảng và trả về phần tử đã xóa 
 * 6. Unshift: thêm 1 howcj nhiều vào đàu và trả về đọ dài mới 
 * 7. Splipcing : xóa , cắt , chèn phần tử mới (1 : vị trí đặt con trỏ  
 * 2: delete count ( số lượng muốn xóa) 3: element muốn truyền vào 
)
 * 8.Concat: nối 
 * 9.Slicing :cắt element của mảng lọc ra
 */
// var languages = [
//     'Javascript',
//     'C++',
//     'python',
// ];

// console.log(languages.slice(1))

/** Bài 25 Hàm 
 * quy tắc đặt tên hàm 
 * a-x , A-Z ,0-9 , _ , $
 *
 */
// function showDialog() {
//     alert('Hi xin chào tất cả các bạn!');

// }
// showDialog();

/** bài 26 tham số hàm 
 * -truyền tham số
 * -arguments 
 *   đối tượng aguments
 *   giới thiệu vòng for
 */
// function writeLog(message, message2) {
//     if (message) {
//         console.log(message)
//     }
//     if (message) {
//         console.log(message2)
//     }
// }
// writeLog('khánh ', 'Nguyễn');
// function writeLog() {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} -`
//     }
//     console.log(myString)
// }
// writeLog('Khánh', 'Nguyễn', 'Khánh')


// // Bài 27 Return trong hàm
// var isConfirm = confirm('Are you ok?');

// console.log(isConfirm);
// function cong(a, b) {
//     return a + b;
// }
// var result = cong(2, 8);
// console.log(result)


// Bài 28 Hiểu rõ hơn về function
// function showMessage() {
//     function showMessage2() {
//         console.log('Message 2');
//     }

// }
// showMessage();


// Bài 29 Các loại function
// showMessage2();

// function showMessage() {
//     // Delaration Function ( được gọi trước)
//     console.log('Declaration function');
// }
// var showMessage2 = function() {
//     // Expresstion funtion ( không được gọi trước)
//     console.log('Expresstion function');

// }

// Bài 30 Polyfil ?
if (!String.prototype.includes) {
    // nếu không tồn tại string.prototype.includes
    String.prototype.includes = function(search, start) {
        // tự định nghĩa string....
        'use strict';
        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }
        if (start === indefined) { start = 0; }
        return this.indexOf(search, start) !== -1;
    };
}
'Javascript course'.includes('Javascript', 0);

//  bài 53 
// var title = 'Responsive web design';
// console.log(title.includes('design'));

// var courses = ['Java', 'C#', 'PHP']
// console.log(courses.includes('Ruby'));