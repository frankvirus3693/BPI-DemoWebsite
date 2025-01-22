document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // มุมมองเริ่มต้น
        locale: 'th', // ตั้งค่าภาษาไทย
        headerToolbar: {
            left: 'prev,next today', // ปุ่มย้อนกลับ/ถัดไป/วันนี้
            center: 'title',         // ตำแหน่งของชื่อเดือน/ปี
            right: 'dayGridMonth,timeGridWeek,timeGridDay' // ตัวเลือกมุมมอง
        },
        titleFormat: { // รูปแบบการแสดงผลวันเดือนปี
            year: 'numeric', // ปี (เช่น 2025)
            month: 'long',   // เดือนแบบเต็ม (เช่น January)
            day: 'numeric'   // วันที่ (เช่น 17)
        },
        buttonText: {
            today: 'วันนี้',
            month: 'เดือน',
            week: 'สัปดาห์',
            day: 'วัน'
        },
        initialDate: new Date(), // วันที่เริ่มต้นเป็นวันนี้
        events: [ // กิจกรรมตัวอย่าง
            {
                title: 'Event 1',
                start: '2025-01-17',
                color: '#4CAF50',    // สีเขียวสำหรับพื้นหลัง
                textColor: '#ffffff' // สีข้อความในกิจกรรม
            },
            {
                title: 'Event 2',
                start: '2025-01-18',
                end: '2025-01-19',
                color: '#607D8B',    // สีเทา
                textColor: '#ffffff' // สีข้อความ
            }
        ],

        // เปลี่ยนสีข้อความในตาราง
        dayCellDidMount: function (info) {
            info.el.style.color = '#000000'; // ตัวหนังสือในเซลล์ตารางเป็นสีดำ
            info.el.style.fontSize = '14px'; // ปรับขนาดตัวหนังสือในเซลล์ตาราง
        },
                // Responsive: เปลี่ยนมุมมองเมื่อหน้าต่างย่อ/ขยาย
                windowResize: function (view) {
                    if (window.innerWidth < 768) {
                        calendar.changeView('timeGridDay'); // เปลี่ยนเป็นมุมมองรายวันในหน้าจอเล็ก
                    } else if (window.innerWidth < 992) {
                        calendar.changeView('timeGridWeek'); // เปลี่ยนเป็นมุมมองรายสัปดาห์ในหน้าจอกลาง
                    } else {
                        calendar.changeView('dayGridMonth'); // กลับเป็นมุมมองรายเดือนในหน้าจอใหญ่
                    }
                }        
        
    });
    

    // เรนเดอร์ปฏิทิน
    calendar.render();

    // ปรับขนาดตัวหนังสือในส่วนต่างๆ
    // ส่วนหัว (Title)
    document.querySelector('.fc-toolbar-title').style.fontSize = '16px'; // ขนาดฟอนต์ของชื่อเดือน/ปี

    // ปุ่ม
    document.querySelectorAll('.fc-button').forEach(function (button) {
        button.style.backgroundColor = '#388E3C'; // สีพื้นหลังปุ่มเป็นสีเขียวเข้ม
        button.style.color = '#ffffff';          // สีข้อความเป็นสีขาว
        button.style.border = 'none';           // ไม่มีขอบปุ่ม
        button.style.fontSize = '14px';         // ขนาดตัวหนังสือของปุ่ม

        // เมื่อ Hover
        button.addEventListener('mouseover', function () {
            button.style.backgroundColor = '#2E7D32'; // สีเขียวเข้มขึ้นเมื่อ Hover
        });

        // เมื่อ Mouseout
        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = '#388E3C'; // กลับเป็นสีเขียวเข้ม
        });
    });
});
