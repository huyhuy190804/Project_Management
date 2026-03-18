import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Project Management API",
      version: "1.0.0",
      description: "API để quản lý dự án và người dùng",
      contact: {
        name: "API Support",
      },
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          required: ["name", "email"],
          properties: {
            _id: {
              type: "string",
              description: "Mã định danh của người dùng",
            },
            name: {
              type: "string",
              description: "Tên người dùng",
            },
            email: {
              type: "string",
              format: "email",
              description: "Email của người dùng",
            },
            age: {
              type: "number",
              description: "Tuổi của người dùng",
              default: 18,
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Thời gian tạo",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Thời gian cập nhật",
            },
          },
        },
        Project: {
          type: "object",
          required: ["name", "owner"],
          properties: {
            _id: {
              type: "string",
              description: "Mã định danh của dự án",
            },
            name: {
              type: "string",
              description: "Tên dự án",
            },
            description: {
              type: "string",
              description: "Mô tả dự án",
            },
            status: {
              type: "string",
              enum: ["pending", "in-progress", "completed"],
              default: "pending",
              description: "Trạng thái dự án",
            },
            startDate: {
              type: "string",
              format: "date-time",
              description: "Ngày bắt đầu dự án",
            },
            owner: {
              type: "object",
              description: "Người tạo dự án",
              properties: {
                _id: {
                  type: "string",
                },
                name: {
                  type: "string",
                },
                email: {
                  type: "string",
                },
              },
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Thời gian tạo",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Thời gian cập nhật",
            },
          },
        },
        ApiResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
            },
            message: {
              type: "string",
            },
            data: {
              type: "object",
            },
            error: {
              type: "string",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/userRoutes.js", "./src/routes/projectRoutes.js"],
};

export const specs = swaggerJsdoc(options);
