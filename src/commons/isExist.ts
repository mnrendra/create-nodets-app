import { isJSON } from '../lib/validator'

export const isExampleExist = async (Example: any, name: string): Promise<any> => {
  try {
    const exist = await Example.findOne({ name })
    return isJSON(exist)
  } catch (e: any) {
    throw new Error(e)
  }
}
