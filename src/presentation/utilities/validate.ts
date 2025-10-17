type THashMap = {
  en: string;
  ar: string;
};

type TValidationResult = {
  success: boolean;
  message: THashMap;
};

const USERNAME_MIN_LENGTH = 3;
const PASSWORD_MIN_LENGTH = 6;

const users = {
  user1: "123456",
  user2: "123456",
};

const validate = (username: string, password: string): TValidationResult => {
  if (!username || !password) {
    return {
      success: false,
      message: {
        en: "Username and password are required.",
        ar: "اسم المستخدم وكلمة المرور مطلوبان.",
      },
    };
  }

  if (username.length < USERNAME_MIN_LENGTH) {
    return {
      success: false,
      message: {
        en: `Username must be at least ${USERNAME_MIN_LENGTH} characters long.`,
        ar: `يجب أن يكون اسم المستخدم على الأقل ${USERNAME_MIN_LENGTH} أحرف.`,
      },
    };
  }

  if (password.length < PASSWORD_MIN_LENGTH) {
    return {
      success: false,
      message: {
        en: `Password must be at least ${PASSWORD_MIN_LENGTH} characters long.`,
        ar: `يجب أن تكون كلمة المرور على الأقل ${PASSWORD_MIN_LENGTH} أحرف.`,
      },
    };
  }

  const storedPassword = users[username as keyof typeof users];
  if (!storedPassword) {
    return {
      success: false,
      message: {
        en: "User not found.",
        ar: "المستخدم غير موجود.",
      },
    };
  }

  if (storedPassword !== password) {
    return {
      success: false,
      message: {
        en: "Incorrect password.",
        ar: "كلمة المرور غير صحيحة.",
      },
    };
  }

  return {
    success: true,
    message: {
      en: "Login successful.",
      ar: "تم تسجيل الدخول بنجاح.",
    },
  };
};

export type { TValidationResult, THashMap };
export { validate };
