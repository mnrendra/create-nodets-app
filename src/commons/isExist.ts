import { isJSON } from '../lib/validator'

export const isExampleExist = async (Example: any, name: string) => {
  try {
    const exist = await Example.findOne({ name })
    return isJSON(exist)
  } catch (e) {
    throw e
  }
}
