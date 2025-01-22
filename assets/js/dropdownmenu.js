
    document.addEventListener('DOMContentLoaded', () => {
        // สำหรับจอที่ไม่มี hover (เช่นมือถือ)
        document.querySelectorAll('.dropdown-submenu').forEach(submenu => {
            const toggle = submenu.querySelector('.dropdown-item.dropdown-toggle');

            if (toggle) {
                // คลิกเพื่อเปิด/ปิดเมนูย่อย
                toggle.addEventListener('click', e => {
                    e.preventDefault();
                    const submenuDropdown = toggle.nextElementSibling;

                    if (submenuDropdown) {
                        // สลับ class "show"
                        submenuDropdown.classList.toggle('show');

                        // ปิดเมนูย่อยอื่น ๆ ที่เปิดอยู่
                        document.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(openSubmenu => {
                            if (openSubmenu !== submenuDropdown) {
                                openSubmenu.classList.remove('show');
                            }
                        });
                    }
                });
            }
        });

        // ป้องกันเมนูหลักปิดเองเมื่อคลิกเมนูย่อย
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.addEventListener('click', e => {
                e.stopPropagation();
            });
        });

        // ปิดเมนู dropdown เมื่อคลิกด้านนอก
        document.addEventListener('click', e => {
            if (!e.target.closest('.dropdown-submenu')) {
                document.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(openSubmenu => {
                    openSubmenu.classList.remove('show');
                });
            }
        });
    });
