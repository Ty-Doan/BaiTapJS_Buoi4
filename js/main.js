document.addEventListener(
        "contextmenu",
        function(e) {
            e.preventDefault();
        }, !1
    ),
    (document.onkeydown = function(e) {
        return 123 != (e = e || window.event).keyCode && (!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && void 0;
    }),
    (document.getElementById("sortNumber").onclick = function() {
        var a = +document.getElementById('inputNum1').value,
            b = +document.getElementById('inputNum2').value,
            c = +document.getElementById('inputNum3').value,
            ketQua = '';
        if (a < b) {
            if (b < c) {
                ketQua = a + ' < ' + b + ' < ' + c;
            } else if (b > c) {
                if (a < c) {
                    ketQua = a + ' < ' + c + ' < ' + b;
                } else {
                    ketQua = c + ' < ' + a + ' < ' + b;
                }
            }
        } else if (a > b) {
            if (b > c) {
                ketQua = c + ' < ' + b + ' < ' + a;
            } else if (b < c) {
                if (a < c) {
                    ketQua = b + ' < ' + a + ' < ' + c;
                } else if (a > c) {
                    ketQua = b + ' < ' + c + ' < ' + a;
                }
            }
        }
        document.getElementById('txtSortNumber').innerHTML = ' ' + ketQua;
    }),
    (document.getElementById("btnHello").onclick = function() {
        var thanhVien = document.getElementById("selUser").value,
            loiChao = '';
        if (thanhVien == 'B') {
            loiChao = 'Xin chào Bố !';
        } else if (thanhVien == 'M') {
            loiChao = 'Xin chào Mẹ !';
        } else if (thanhVien == 'A') {
            loiChao = 'Xin chào Anh Trai !';
        } else if (thanhVien == 'E') {
            loiChao = 'Xin chào Em Gái !'
        } else {
            loiChao = 'Xin chào Người lạ !'
        }
        document.getElementById('txtHello').innerHTML = ' ' + loiChao;
    }),
    (document.getElementById("btnCount").onclick = function() {
        var num1 = document.getElementById("inputCount1").value,
            num2 = document.getElementById("inputCount2").value,
            num3 = document.getElementById("inputCount3").value,
            tongSoChan = 0;
        if (num1 % 2 == 0) { tongSoChan++; }
        if (num2 % 2 == 0) { tongSoChan++; }
        if (num3 % 2 == 0) { tongSoChan++; }
        var tongSoLe = 3 - tongSoChan;
        document.getElementById('txtCount').innerHTML = ' Tổng số chẵn là : ' + tongSoChan + ' // Còn Tổng số lẻ là : ' + tongSoLe;
    }),
    (document.getElementById("btnEdge").onclick = function() {
        var canh1 = +document.getElementById('inputEdge1').value,
            canh2 = +document.getElementById('inputEdge2').value,
            canh3 = +document.getElementById('inputEdge3').value,
            duDoan = '',
            binhPhuongCanh1Canh2 = canh1 * canh1 + canh2 * canh2,
            binhPhuongCanh1Canh3 = canh1 * canh1 + canh3 * canh3,
            binhPhuongCanh2Canh3 = canh2 * canh2 + canh3 * canh3;
        if (canh1 == canh2 && canh1 == canh3) {
            duDoan = 'Đây là tam giác đều !';
        } else if (canh1 == canh2 || canh2 == canh3 || canh1 == canh3) {
            duDoan = 'Đây là tam giác cân !';
        } else if ((canh1 * canh1 === binhPhuongCanh2Canh3) || (canh2 * canh2 == binhPhuongCanh1Canh3) || (canh3 * canh3 == binhPhuongCanh1Canh2)) {
            duDoan = 'Đây là tam giác vuông !';
        } else {
            duDoan = 'Đây là tam giác khác hoặc bình thường !'
        }
        document.getElementById('txtEdge').innerHTML = ' ' + duDoan;
    });