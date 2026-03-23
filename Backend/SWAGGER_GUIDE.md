# Swagger API Documentation

Tài liệu này mô tả cách sử dụng Swagger UI để xem và kiểm tra API của bạn.

## 🚀 Cài Đặt

Swagger đã được cấu hình và các package cần thiết đã được cài đặt:

```bash
npm install swagger-ui-express swagger-jsdoc
```

## 📚 Các Tập Tin Cấu Hình

### 1. **src/config/swagger.js**

- File cấu hình chính cho Swagger
- Định nghĩa các schema cho User và Project
- Cấu hình thông tin API (title, version, description)
- Định nghĩa base URL của server

### 2. **src/server.js**

- Tích hợp Swagger UI vào Express app
- Route Swagger UI: `/api-docs`

### 3. **src/routes/userRoutes.js**

- Chú thích JSDoc Swagger cho các endpoint Users

### 4. **src/routes/projectRoutes.js**

- Chú thích JSDoc Swagger cho các endpoint Projects

## 🌐 Truy Cập Swagger UI

Sau khi chạy server:

```bash
npm run dev
# hoặc
npm start
```

Mở trình duyệt và truy cập:

```
http://localhost:3001/api-docs
```

## 📋 API Endpoints

### Users (Người Dùng)

| Method | Endpoint         | Mô Tả                           |
| ------ | ---------------- | ------------------------------- |
| GET    | `/api/users`     | Lấy danh sách tất cả người dùng |
| GET    | `/api/users/:id` | Lấy chi tiết một người dùng     |
| POST   | `/api/users`     | Tạo người dùng mới              |
| PUT    | `/api/users/:id` | Cập nhật thông tin người dùng   |
| DELETE | `/api/users/:id` | Xóa người dùng                  |

### Projects (Dự Án)

| Method | Endpoint            | Mô Tả                      |
| ------ | ------------------- | -------------------------- |
| GET    | `/api/projects`     | Lấy danh sách tất cả dự án |
| GET    | `/api/projects/:id` | Lấy chi tiết một dự án     |
| POST   | `/api/projects`     | Tạo dự án mới              |

## 📝 Ví Dụ Request

### Tạo Người Dùng Mới

```json
POST /api/users
Content-Type: application/json

{
  "name": "Nguyễn Văn A",
  "email": "user@example.com",
  "age": 25
}
```

### Tạo Dự Án Mới

```json
POST /api/projects
Content-Type: application/json

{
  "name": "Dự án Web App",
  "description": "Xây dựng ứng dụng web quản lý dự án",
  "status": "pending",
  "owner": "507f1f77bcf86cd799439011"
}
```

## 🔗 Schemas (Mô Hình Dữ Liệu)

### User Schema

```javascript
{
  "_id": "string (MongoDB ID)",
  "name": "string (bắt buộc)",
  "email": "string (bắt buộc, unique)",
  "age": "number (mặc định: 18)",
  "createdAt": "date-time",
  "updatedAt": "date-time"
}
```

### Project Schema

```javascript
{
  "_id": "string (MongoDB ID)",
  "name": "string (bắt buộc)",
  "description": "string",
  "status": "string (pending, in-progress, completed)",
  "startDate": "date-time",
  "owner": "User object (bắt buộc)",
  "createdAt": "date-time",
  "updatedAt": "date-time"
}
```

## ✅ Tính Năng Swagger UI

- 📖 Xem tài liệu đầu đủ cho tất cả endpoints
- 🧪 Kiểm tra API trực tiếp từ UI
- 📤 Gửi request và xem response
- 🔍 Xem chi tiết request/response schema
- 💾 Lưu request đã kiểm tra

## 🛠️ Tùy Chỉnh Swagger

Để thêm endpoint mới:

1. Thêm JSDoc comment phía trước route definition
2. Định nghĩa các parameter, request body, response
3. Swagger sẽ tự động cập nhật

Ví dụ:

```javascript
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Mô tả ngắn
 *     description: Mô tả chi tiết
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Thành công
 */
```

## 📞 Support

Nếu có vấn đề:

1. Kiểm tra console server có lỗi không
2. Xác nhận MongoDB connection
3. Kiểm tra file JSDoc comments có hợp lệ không
