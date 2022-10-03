import isAlphanumeric from "validator/lib/isAlphanumeric";
import isBoolean from "validator/lib/isBoolean";
import isDecimal from "validator/lib/isDecimal";
import isEmail from "validator/lib/isEmail";
import isURL from "validator/lib/isURL";
import isStrongPassword from "validator/lib/isStrongPassword";

export function checkPasswordStrength(
  value,
  {
    minLength = 0,
    minLowercase = 0,
    minNumbers = 0,
    minSymbols = 0,
    minUppercase = 0,
    minScore = 0,
  }
) {
  const options = {
    minLength,
    minLowercase,
    minNumbers,
    minSymbols,
    minUppercase,
    minScore,
  };

  const res = isStrongPassword(value, options);

  return res;
}

export function checkPasswordLength(value, amount) {
  return isStrongPassword(value, {
    minLength: amount,
    minLowercase: 0,
    minNumbers: 0,
    minSymbols: 0,
    minUppercase: 0,
  });
}
export function checkPasswordLowercase(value, amount) {
  return isStrongPassword(value, {
    minLength: 0,
    minLowercase: amount,
    minNumbers: 0,
    minSymbols: 0,
    minUppercase: 0,
  });
}
export function checkPasswordUppercase(value, amount) {
  return isStrongPassword(value, {
    minLength: 0,
    minLowercase: 0,
    minNumbers: 0,
    minSymbols: 0,
    minUppercase: amount,
  });
}
export function checkPasswordNumbers(value, amount) {
  return isStrongPassword(value, {
    minLength: 0,
    minLowercase: 0,
    minNumbers: amount,
    minSymbols: 0,
    minUppercase: 0,
  });
}
export function checkPasswordSymbols(value, amount) {
  return isStrongPassword(value, {
    minLength: 0,
    minLowercase: 0,
    minNumbers: 0,
    minSymbols: amount,
    minUppercase: 0,
  });
}

export function checkByType({ type = "", value = "", options = {} }) {
  switch (type) {
    case "password":
      return checkPasswordStrength(value, options);
    case "email":
      return isEmail(value, options);

    default:
      return true;
  }
}
