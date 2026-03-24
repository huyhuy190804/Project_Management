# Project Management API - Backend

Ứng dụng backend cho hệ thống quản lý dự án, cung cấp các API để quản lý người dùng và dự án.

## 📋 Mục Lục

- [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)
- [Cài Đặt & Chạy Dự Án](#cài-đặt--chạy-dự-án)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [Các Chức Năng API](#các-chức-năng-api)
- [Chi Tiết Endpoints](#chi-tiết-endpoints)
- [Ví Dụ Request & Response](#ví-dụ-request--response)
- [Data Models](#data-models)

## 🛠️ Công Nghệ Sử Dụng

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL Database
- **Mongoose** - ODM cho MongoDB
- **Swagger/OpenAPI** - API Documentation
- **dotenv** - Quản lý environment variables
- **Nodemon** - Auto-reload server during development

## 🚀 Cài Đặt & Chạy Dự Án

### 1. Cài Đặt Dependencies

```bash
npm install
```

### 2. Cấu Hình Environment Variables

Tạo file `.env` trong thư mục Backend:

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/project_management
NODE_ENV=development
```

### 3. Chạy Server

**Mode phát triển (với auto-reload):**

```bash
npm run dev
```

**Mode production:**

```bash
npm start
```

### 4. Truy Cập Swagger UI

Sau khi server chạy, mở trình duyệt và truy cập:

```
http://localhost:3001/api-docs
```

## 📁 Cấu Trúc Dự Án

```
Backend/
├── src/
│   ├── config/
│   │   ├── db.js              # Cấu hình kết nối MongoDB
│   │   └── swagger.js         # Cấu hình Swagger UI
│   ├── controllers/
│   │   ├── userController.js  # Xử lý logic người dùng
│   │   └── projectController.js # Xử lý logic dự án
│   ├── models/
│   │   ├── userModel.js       # Schema người dùng
│   │   └── projectModel.js    # Schema dự án
│   ├── routes/
│   │   ├── userRoutes.js      # Routes người dùng
│   │   └── projectRoutes.js   # Routes dự án
│   ├── services/
│   │   ├── userService.js     # Business logic người dùng
│   │   └── projectService.js  # Business logic dự án
│   ├── utils/
│   │   └── response.js        # Helper responses
│   └── server.js              # Entry point
├── package.json
├── SWAGGER_GUIDE.md           # Hướng dẫn Swagger
└── README.md                  # Tài liệu này
```

## 🎯 Các Chức Năng API

Dự án cung cấp 8 endpoints chính chia thành 2 nhóm chính:

### ✅ Checklist Chức Năng

#### 👥 Quản Lý Người Dùng (Users)

- [x] GET /api/users - Lấy danh sách tất cả người dùng
- [x] GET /api/users/:id - Lấy chi tiết một người dùng
- [x] POST /api/users - Tạo người dùng mới
- [x] PUT /api/users/:id - Cập nhật thông tin người dùng
- [x] DELETE /api/users/:id - Xóa người dùng

#### 📊 Quản Lý Dự Án (Projects)

- [x] GET /api/projects - Lấy danh sách tất cả dự án
- [x] GET /api/projects/:id - Lấy chi tiết một dự án
- [x] POST /api/projects - Tạo dự án mới

---

### 👥 **Quản Lý Người Dùng (Users)** - 5 endpoints

| Method | Endpoint         | Chức Năng                       | Status |
| ------ | ---------------- | ------------------------------- | ------ |
| GET    | `/api/users`     | Lấy danh sách tất cả người dùng | ✅     |
| GET    | `/api/users/:id` | Lấy chi tiết một người dùng     | ✅     |
| POST   | `/api/users`     | Tạo người dùng mới              | ✅     |
| PUT    | `/api/users/:id` | Cập nhật thông tin người dùng   | ✅     |
| DELETE | `/api/users/:id` | Xóa người dùng                  | ✅     |

### 📊 **Quản Lý Dự Án (Projects)** - 3 endpoints

| Method | Endpoint            | Chức Năng                  | Status |
| ------ | ------------------- | -------------------------- | ------ |
| GET    | `/api/projects`     | Lấy danh sách tất cả dự án | ✅     |
| GET    | `/api/projects/:id` | Lấy chi tiết một dự án     | ✅     |
| POST   | `/api/projects`     | Tạo dự án mới              | ✅     |

## 📖 Chi Tiết Endpoints

### 👥 Users Endpoints

#### 1. **GET /api/users** - Lấy danh sách tất cả người dùng

**Mô tả:** Trả về danh sách tất cả người dùng trong hệ thống

**Request:**

```http
GET /api/users
Content-Type: application/json
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Lấy danh sách người dùng thành công",
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Nguyễn Văn A",
      "email": "user1@example.com",
      "age": 25,
      "createdAt": "2026-03-22T10:00:00Z",
      "updatedAt": "2026-03-22T10:00:00Z"
    },
    {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Trần Thị B",
      "email": "user2@example.com",
      "age": 28,
      "createdAt": "2026-03-22T10:05:00Z",
      "updatedAt": "2026-03-22T10:05:00Z"
    }
  ]
}
```

#### 2. **GET /api/users/:id** - Lấy chi tiết một người dùng

**Mô tả:** Trả về thông tin chi tiết của một người dùng theo ID

**Request:**

```http
GET /api/users/507f1f77bcf86cd799439011
Content-Type: application/json
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Lấy chi tiết thành công",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Nguyễn Văn A",
    "email": "user1@example.com",
    "age": 25,
    "createdAt": "2026-03-22T10:00:00Z",
    "updatedAt": "2026-03-22T10:00:00Z"
  }
}
```

**Error Response (404 Not Found):**

```json
{
  "success": false,
  "message": "Không tìm thấy người dùng"
}
```

#### 3. **POST /api/users** - Tạo người dùng mới

**Mô tả:** Tạo một người dùng mới với thông tin cơ bản

**Request:**

```http
POST /api/users
Content-Type: application/json

{
  "name": "Lê Văn C",
  "email": "user3@example.com",
  "age": 30
}
```

**Yêu cầu:**

- `name` (bắt buộc) - Tên người dùng
- `email` (bắt buộc) - Email người dùng
- `age` (tùy chọn) - Tuổi người dùng

**Response (201 Created):**

```json
{
  "success": true,
  "message": "Tạo người dùng thành công",
  "data": {
    "_id": "507f1f77bcf86cd799439013",
    "name": "Lê Văn C",
    "email": "user3@example.com",
    "age": 30,
    "createdAt": "2026-03-22T10:10:00Z",
    "updatedAt": "2026-03-22T10:10:00Z"
  }
}
```

**Error Response (400 Bad Request):**

```json
{
  "success": false,
  "message": "Validation error: Email is required"
}
```

#### 4. **PUT /api/users/:id** - Cập nhật thông tin người dùng

**Mô tả:** Cập nhật thông tin của một người dùng theo ID

**Request:**

```http
PUT /api/users/507f1f77bcf86cd799439011
Content-Type: application/json

{
  "name": "Nguyễn Văn A Updated",
  "email": "newemail@example.com",
  "age": 26
}
```

**Các field có thể cập nhật:**

- `name` - Tên người dùng
- `email` - Email người dùng
- `age` - Tuổi người dùng

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Cập nhật thành công",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Nguyễn Văn A Updated",
    "email": "newemail@example.com",
    "age": 26,
    "createdAt": "2026-03-22T10:00:00Z",
    "updatedAt": "2026-03-22T10:15:00Z"
  }
}
```

#### 5. **DELETE /api/users/:id** - Xóa người dùng

**Mô tả:** Xóa một người dùng theo ID

**Request:**

```http
DELETE /api/users/507f1f77bcf86cd799439011
Content-Type: application/json
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Xóa thành công"
}
```

**Error Response (404 Not Found):**

```json
{
  "success": false,
  "message": "Không tìm thấy người dùng"
}
```

---

### 📊 Projects Endpoints

#### 1. **GET /api/projects** - Lấy danh sách tất cả dự án

**Mô tả:** Trả về danh sách tất cả dự án kèm thông tin người tạo

**Request:**

```http
GET /api/projects
Content-Type: application/json
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Lấy danh sách dự án thành công",
  "data": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Dự án Web App",
      "description": "Xây dựng ứng dụng web quản lý dự án",
      "status": "pending",
      "owner": {
        "_id": "507f1f77bcf86cd799439011",
        "name": "Nguyễn Văn A",
        "email": "user1@example.com"
      },
      "createdAt": "2026-03-22T10:20:00Z",
      "updatedAt": "2026-03-22T10:20:00Z"
    }
  ]
}
```

#### 2. **GET /api/projects/:id** - Lấy chi tiết một dự án

**Mô tả:** Trả về thông tin chi tiết của một dự án theo ID

**Request:**

```http
GET /api/projects/507f1f77bcf86cd799439012
Content-Type: application/json
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Lấy chi tiết thành công",
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Dự án Web App",
    "description": "Xây dựng ứng dụng web quản lý dự án",
    "status": "pending",
    "owner": {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Nguyễn Văn A",
      "email": "user1@example.com"
    },
    "createdAt": "2026-03-22T10:20:00Z",
    "updatedAt": "2026-03-22T10:20:00Z"
  }
}
```

**Error Response (404 Not Found):**

```json
{
  "success": false,
  "message": "Không tìm thấy dự án"
}
```

#### 3. **POST /api/projects** - Tạo dự án mới

**Mô tả:** Tạo một dự án mới với thông tin cơ bản

**Request:**

```http
POST /api/projects
Content-Type: application/json

{
  "name": "Dự án Mobile App",
  "description": "Phát triển ứng dụng mobile iOS/Android",
  "status": "pending",
  "owner": "507f1f77bcf86cd799439011"
}
```

**Yêu cầu:**

- `name` (bắt buộc) - Tên dự án
- `owner` (bắt buộc) - ID của người tạo dự án (User ID)
- `description` (tùy chọn) - Mô tả dự án
- `status` (tùy chọn) - Trạng thái dự án: `pending`, `in-progress`, `completed` (mặc định: `pending`)

**Response (201 Created):**

```json
{
  "success": true,
  "message": "Tạo dự án thành công",
  "data": {
    "_id": "507f1f77bcf86cd799439013",
    "name": "Dự án Mobile App",
    "description": "Phát triển ứng dụng mobile iOS/Android",
    "status": "pending",
    "owner": "507f1f77bcf86cd799439011",
    "createdAt": "2026-03-22T10:25:00Z",
    "updatedAt": "2026-03-22T10:25:00Z"
  }
}
```

**Error Response (400 Bad Request):**

```json
{
  "success": false,
  "message": "Validation error: Name and Owner are required"
}
```

**Error Response (500 Server Error):**

```json
{
  "success": false,
  "message": "Lỗi tạo dự án",
  "error": "Owner with ID not found"
}
```

---

## 📝 Ví Dụ Request & Response

### Quy Trình Thêm Người Dùng và Dự Án

**Bước 1: Tạo người dùng mới**

```bash
curl -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }'
```

**Bước 2: Tạo dự án cho người dùng đó**

```bash
curl -X POST http://localhost:3001/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Website Redesign",
    "description": "Thiết kế lại website công ty",
    "status": "pending",
    "owner": "507f1f77bcf86cd799439013"
  }'
```

**Bước 3: Lấy danh sách tất cả dự án**

```bash
curl -X GET http://localhost:3001/api/projects
```

---

## 📊 Data Models

### User Schema

```javascript
{
  "_id": ObjectId,              // ID tự động được tạo
  "name": String (required),    // Tên người dùng
  "email": String (required),   // Email người dùng
  "age": Number,                // Tuổi (tùy chọn)
  "createdAt": DateTime,        // Thời gian tạo
  "updatedAt": DateTime         // Thời gian cập nhật
}
```

### Project Schema

```javascript
{
  "_id": ObjectId,              // ID tự động được tạo
  "name": String (required),    // Tên dự án
  "description": String,        // Mô tả dự án (tùy chọn)
  "status": String,             // Trạng thái: pending, in-progress, completed
  "owner": ObjectId (ref: User),// ID người tạo dự án
  "createdAt": DateTime,        // Thời gian tạo
  "updatedAt": DateTime         // Thời gian cập nhật
}
```

---

## 📞 Các HTTP Status Codes

| Status  | Ý Nghĩa      | Ví Dụ                                |
| ------- | ------------ | ------------------------------------ |
| **200** | OK           | Lấy dữ liệu hoặc cập nhật thành công |
| **201** | Created      | Tạo tài nguyên mới thành công        |
| **400** | Bad Request  | Dữ liệu không hợp lệ                 |
| **404** | Not Found    | Không tìm thấy tài nguyên            |
| **500** | Server Error | Lỗi xử lý từ server                  |

---

## 🔧 Troubleshooting

### Lỗi kết nối MongoDB

- Kiểm tra MongoDB service đang chạy
- Kiểm tra lại `MONGODB_URI` trong file `.env`

### Port đã được sử dụng

- Thay đổi PORT trong file `.env`

### Module not found

- Chạy lại `npm install`

---

## 📚 Tài Liệu Thêm

- **Swagger UI**: http://localhost:3001/api-docs
- **SWAGGER_GUIDE.md**: Xem hướng dẫn Swagger chi tiết

---

**Được phát triển với ❤️ | 2026**
