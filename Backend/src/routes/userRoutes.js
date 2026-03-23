import express from "express";
// Import các hàm xử lý từ controller (có đuôi .js)
import {
  create,
  getAll,
  getDetail,
  update,
  remove,
} from "../controllers/userController.js";

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lấy danh sách tất cả người dùng
 *     description: Trả về danh sách tất cả người dùng trong hệ thống
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lấy danh sách thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Lấy danh sách người dùng thành công"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       500:
 *         description: Lỗi hệ thống
 */
// Định nghĩa các route
// GET /api/users
router.get("/", getAll);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Lấy chi tiết người dùng
 *     description: Trả về thông tin chi tiết của một người dùng theo ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của người dùng
 *         example: 507f1f77bcf86cd799439011
 *     responses:
 *       200:
 *         description: Lấy chi tiết thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Lấy chi tiết thành công"
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       404:
 *         description: Không tìm thấy người dùng
 *       500:
 *         description: Lỗi hệ thống
 */
// GET /api/users/:id
router.get("/:id", getDetail);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Tạo người dùng mới
 *     description: Tạo một người dùng mới với thông tin cơ bản
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Nguyễn Văn A"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               age:
 *                 type: number
 *                 example: 25
 *     responses:
 *       201:
 *         description: Tạo người dùng thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Tạo người dùng thành công"
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       500:
 *         description: Lỗi hệ thống
 */
// POST /api/users
router.post("/", create);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Cập nhật thông tin người dùng
 *     description: Cập nhật thông tin của một người dùng theo ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của người dùng
 *         example: 507f1f77bcf86cd799439011
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Nguyễn Văn B"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "newemail@example.com"
 *               age:
 *                 type: number
 *                 example: 26
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Cập nhật thành công"
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       404:
 *         description: Không tìm thấy người dùng
 *       500:
 *         description: Lỗi hệ thống
 */
// PUT /api/users/:id
router.put("/:id", update);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Xóa người dùng
 *     description: Xóa một người dùng theo ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của người dùng
 *         example: 507f1f77bcf86cd799439011
 *     responses:
 *       200:
 *         description: Xóa thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Xóa thành công"
 *       404:
 *         description: Không tìm thấy người dùng
 *       500:
 *         description: Lỗi hệ thống
 */
// DELETE /api/users/:id
router.delete("/:id", remove);

export default router;
