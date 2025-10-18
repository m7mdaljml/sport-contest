type THashMap = {
  en: string;
  ar: string;
};

type TValidationResult = {
  success: boolean;
  message: THashMap;
};

export type { TValidationResult, THashMap };
