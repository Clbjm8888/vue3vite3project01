export const rules = {
  name: [
    {
      required: true,
      message: "用户名必须输~",
      trigger: "blur",
    },
    {
      pattern: /^[a-zA-Z0-9]{6,10}$/,
      message: "用户名必须是6-10位~",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码必须输入~",
      trigger: "blur",
    },
    {
      pattern: /^[a-zA-Z0-9]{3,}$/,
      message: "密码必须3位以上~",
      trigger: "blur",
    },
  ],
};
