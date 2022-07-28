export const isBoolean = (val: any): boolean => {
  if (
    typeof val === 'boolean'
  ) return true
  return false
}

export const isString = (val: any): boolean => {
  if (
    typeof val === 'string'
  ) return true
  return false
}

export const isNumb = (val: any): boolean => {
  if (
    typeof val === 'number' &&
    !Number.isNaN(Number(val))
  ) return true
  return false
}

export const isJSON = (val: any): boolean => {
  if (
    typeof val === 'object' &&
    val !== null &&
    !Array.isArray(val) &&
    !(val instanceof Date)
  ) return true
  return false
}

export const isArray = (val: any): boolean => {
  if (
    typeof val === 'object' &&
    val !== null &&
    !(val instanceof Date) &&
    Array.isArray(val)
  ) return true
  return false
}

export const isDate = (val: any): boolean => {
  if (
    typeof val === 'object' &&
    val !== null &&
    !Array.isArray(val) &&
    val instanceof Date
  ) return true
  return false
}

export const isAnyDate = (val: any): boolean => {
  try {
    if (
      val !== null &&
      val !== undefined &&
      !(isNumb(Number(val)) && Number(val) <= 0) &&
      val !== '' &&
      typeof val !== 'boolean' &&
      !isJSON(val) &&
      !isArray(val) &&
      !Number.isNaN(Number(new Date(val).getTime()))
    ) return true
    return false
  } catch (e) {
    return false
  }
}
