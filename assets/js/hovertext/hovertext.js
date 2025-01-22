document.addEventListener('DOMContentLoaded', function () {
    // เลือกองค์ประกอบที่ต้องการ
    const elements = document.querySelectorAll(
        '.top-nav a, .top-nav button, .main-nav a, .banner img, .banner .carousel-control-prev, .banner .carousel-control-next, .login-link-link, .quick-links a, .news-link-link'
    );

    elements.forEach(element => {
        // ตรวจสอบว่าไม่มี attribute title
        if (!element.hasAttribute('title')) {
            // กรณีของปุ่ม "ก่อนหน้า" และ "ถัดไป" ใน Banner
            if (element.classList.contains('carousel-control-prev')) {
                element.setAttribute('title', 'ก่อนหน้า');
            } else if (element.classList.contains('carousel-control-next')) {
                element.setAttribute('title', 'ถัดไป');
            }
            // กรณีของ Top Navigation
            else if (element.classList.contains('navbar-brand')) {
                const textThai = element.querySelector('.text-thai')?.textContent.trim() || '';
                const textEnglish = element.querySelector('.text-english')?.textContent.trim() || '';
                const combinedText = `${textThai} / ${textEnglish}`; // รวมข้อความ
                if (combinedText) {
                    element.setAttribute('title', combinedText);
                }
            }
            // กรณีของข่าวใน News Section
            else if (element.classList.contains('news-link-link')) {
                const h4 = element.querySelector('.card-title'); // ดึงข้อความจาก h4
                if (h4) {
                    element.setAttribute('title', h4.textContent.trim()); // ตั้งค่า title เป็นข้อความจาก h4
                }
            }
            // กรณีของลิงก์ทั่วไป
            else {
                const text = element.textContent.trim();
                if (text) {
                    element.setAttribute('title', text);
                }
            }
        }
    });

    // เปิดใช้งาน Bootstrap Tooltip
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
