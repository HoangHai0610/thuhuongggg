# Thiệp mời Thu Hương đi chơi

Web tĩnh, không cần cài đặt và không cần backend.

## Xem thử trên máy

Cách nhanh nhất là mở trực tiếp file `index.html` bằng trình duyệt.

Hoặc chạy web server nhỏ để kiểm tra chính xác như khi đăng mạng:

```powershell
python -m http.server 8080
```

Sau đó mở `http://localhost:8080`.

## Chỉnh nội dung

Mở `script.js` và sửa object `CONFIG` ở đầu file:

- `invitee`: tên người nhận.
- `date`: ngày giờ hẹn theo chuẩn ISO.
- `reply`: câu trả lời được chia sẻ khi bấm nút đồng ý.
- `plans`: các mốc giờ trong timeline.

Lời nhắn chính nằm trong `index.html`, ở section có class `letter`.

## Gửi cho người ở xa

Cách ít thao tác nhất là dùng Netlify Drop:

1. Mở `https://app.netlify.com/drop` và đăng nhập.
2. Kéo file `thu-huong-date-site.zip` vào vùng upload.
3. Chờ vài giây để nhận link có đuôi `netlify.app`.
4. Mở link trên điện thoại để thử, sau đó gửi link qua Messenger/Zalo.

Nếu đã chỉnh nội dung sau khi file zip được tạo, hãy nén lại bốn mục `index.html`,
`styles.css`, `script.js` và thư mục `assets` trước khi upload.

Lưu ý: `og:image` chỉ hiện ảnh xem trước đẹp trên ứng dụng chat sau khi trang đã
được host và đường dẫn ảnh được đổi thành URL tuyệt đối của website.
