import express from "express";
import { create, getAll, getDetail } from "../controllers/projectController.js";

const router = express.Router();

/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Tạo dự án mới
 *     description: Tạo một dự án mới với thông tin cơ bản
 *     tags:
 *       - Projects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - owner
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Dự án Web App"
 *               description:
 *                 type: string
 *                 example: "Xây dựng ứng dụng web quản lý dự án"
 *               status:
 *                 type: string
 *                 enum: [pending, in-progress, completed]
 *                 example: "pending"
 *               owner:
 *                 type: string
 *                 description: ID của người tạo dự án
 *                 example: "507f1f77bcf86cd799439011"
 *     responses:
 *       201:
 *         description: Tạo dự án thành công
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
 *                   example: "Tạo dự án thành công"
 *                 data:
 *                   $ref: '#/components/schemas/Project'
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       500:
 *         description: Lỗi hệ thống
 */
router.post("/", create);

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Lấy danh sách tất cả dự án
 *     description: Trả về danh sách tất cả dự án kèm thông tin người tạo
 *     tags:
 *       - Projects
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
 *                   example: "Lấy danh sách dự án thành công"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Project'
 *       500:
 *         description: Lỗi hệ thống
 */
router.get("/", getAll);

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Lấy chi tiết dự án
 *     description: Trả về thông tin chi tiết của một dự án theo ID
 *     tags:
 *       - Projects
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của dự án
 *         example: 507f1f77bcf86cd799439012
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
 *                   $ref: '#/components/schemas/Project'
 *       404:
 *         description: Không tìm thấy dự án
 *       500:
 *         description: Lỗi hệ thống
 */
router.get("/:id", getDetail);

export default router;
