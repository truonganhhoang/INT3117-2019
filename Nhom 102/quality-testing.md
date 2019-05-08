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
<b> <i> *** Accessibility testing ***</i> </b>
1. <b> Total Validator Tool </b>
  - Total Validator Tool một chương trình được phát triển bởi Total Validator.. Các chương trình  thực thi chính là TotalValidator.exe . Trình cài đặt phần mềm bao gồm 6 tập tin và thường là khoảng 13,87 MB (14.542.955 byte). Hầu hết các máy tính đang chạy hệ điều hành Windows 7 (SP1) cũng như Windows 10. Trong khi khoảng 35% người sử dụng của Total Validator Tool đến từ Hoa Kỳ, nó cũng rất phổ biến ở Đức và Anh.
  - Total Validator là một công cụ dùng để đánh giá khả năng truy cập web. Chương trình là một công cụ kiểm tra 5 in 1, bao gồm cả thẻ sử dụng HTML và XHTML,an Accessibility validator, a CSS validator, a broken links checker, and a spell checker. Những hướng dẫn bao gồm WCAG 2.0—W3C Web Content Accessibility Guidelines 2.0, WCAG 1.0—W3C Web Content Accessibility Guidelines 1.0, Section 508, and the U.S. federal procurement standards.
  - Chương trình có thể được chạy bằng máy tính của bạn,các dòng lệnh, hoặc thông qua Tiện ích Google Chrome hoặc Firefox . Total Validator tự động kiểm tra các trang web đơn, các nhóm của các trang web, và mật khẩu hoặc các hạn chế của trang. Các định dạng được hỗ trợ bao gồm HTML và XHTML. 
  - Trang chủ : https://www.totalvalidator.com
2. <b> Cài đặt và áp dụng</b> vào https://hoclieu.vn ( kết hợp giới thiệu): video:https://www.youtube.com/watch?v=m3pvttG5YWw
3. <b> Kết quả </b>https://hoclieu.vn
  2 Error : HTML [2] 
    - Summary :This element is not recognised
    - Detail: This error is often raised when an old element has been used when validating against a newer HTML specification. Alternatively you may have misspelled the name.
  1 Warning: WCAG2 A[1]
    - Summary: [WCAG2 2.4.1 (A)] Use heading elements to convey structure
    - Detail: Many assistive technologies provide navigation using headings, including skipping navigational links. If your document has any structure you should use heading markup to convey the structure of the content. Even a single header will make it easier for users. See https://www.w3.org/TR/WCAG20-TECHS/H69.html (displayed in new window).

 
