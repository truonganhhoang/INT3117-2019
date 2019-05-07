<i> Nhóm 102 - Vũ Duy Mạnh - Nguyễn Tuấn Bình - Phạm Thị Linh </i>
<br>
<br>
<br>
<big><b> Báo cáo quality testing: https://hoclieu.vn </b></big>
<br>
<br>
<b> <i> *** Security testing ***</i> </b>
<br>
1. <b> Probely testing tool </b>:
  - <b>Probely</b> là phần mềm kiểm tra bảo mật ứng dụng Web( security testing tool) đã được phát triển từ 2016 đến nay, có trụ sở tại Lisbon, Bồ Đào Nha. Probely cung cấp API và đặc biệt cho phép thực hiện testing thông qua website. Cùng với giao diện dễ dùng, tiện ích,  Probely liên tục quét kiểm tra lỗ hổng trong ứng dụng Web của ta, và cho phép ta quản lý vòng đời của các lỗ hổng, tiến trình phát triển hệ thống và còn chỉ có thể chỉ rõ lỗ hổng và đặc biệt cung cấp cho ta phương pháp để xử lý. Probely hiện đang được đánh giá ở vị trí cao trong bảng xếp hạng các security testing tool: https://www.guru99.com/top-5-penetration-testing-tools.html, https://www.softwaretestinghelp.com/penetration-testing-tools/.
  - Các tính năng tiêu biểu của Probely:
    - Quét tìm SQL, XSS, OWASP TOP10 và hơn 5000 lỗ hổng, bao gồm 1000 lỗ hổng WordPress và Joomla
    - API đầy đủ
    - Tích hợp với các công cụ CI, Slack và Jira
    - Thành viên nhóm không giới hạn
    - Báo cáo PDF
    - Cho phép quét đa dạng 
    - Nhiều mục tiêu môi trường - Phát triển (quét không xâm nhập) và Thử nghiệm (quét xâm nhập và quét hoàn chỉnh)
  - Trang chủ https://probely.com/
2. <b>Cài đặt và áp dụng</b> vào https://hoclieu.vn ( kết hợp giới thiệu): video: https://youtu.be/6UpjhahzMqU
3. <big> <b> <i> Kết quả </i> </b> </big>
  - Phát hiện 4 lỗ hổng ở trang https://hoclieu.vn:
    - Referrer policy not defined
    - Missing clickjacking protection
    - HSTS header not enforced
    - Browser content sniffing allowed
  - Phát hiện 5 lỗ hổng ở trang https://hoclieu.sachmem.vn:
    - Referrer policy not defined
    - Missing clickjacking protection
    - HSTS header not enforced
    - Browser content sniffing allowed
    - Outdated TLS protocol version 1.0 supported
 
<br>
<br>

 
 
