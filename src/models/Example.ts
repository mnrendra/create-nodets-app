import mongoose from 'mongoose'

const Example = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 1,
    maxlength: 64,
    match: /^[a-zA-Z0-9 ]*$/m,
    required: true
  }
  // price: {
  //   type: Number,
  //   min: 0,
  //   max: 999999999,
  //   required: true
  // },
  // image: {
  //   type: String,
  //   trim: true,
  //   match: /^(http|https):\/\/([^:/\s]+)([/|.|\w|-])*\.(jpg|jpeg|png)((\?.*)$|$)/m,
  //   default: null
  // }
}, {
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated'
  }
})

export default mongoose.model('Example', Example)
