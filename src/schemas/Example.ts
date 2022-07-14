import Joi from 'joi'

const Example = Joi.object({
  name: Joi
    .string()
    .min(1)
    .max(64)
    .regex(/^[a-zA-Z0-9 ]*$/m)
    .required(),
  // price: Joi
  //   .number()
  //   .min(0)
  //   .max(999999999)
  //   .required(),
  // image: Joi
  //   .string()
  //   .trim()
  //   .regex(/^(http|https):\/\/([^:/\s]+)([/|.|\w|-])*\.(jpg|jpeg|png)((\?.*)$|$)/m)
  //   .default(null)
})


export const validateExample = async (val: any) => {
  try {
    const validValue = await Example.validateAsync(val)
    return validValue
  } catch (e) {
    throw e
  }
}
