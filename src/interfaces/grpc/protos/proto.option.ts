const protoOption = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [
    './src/interfaces/grpc/protos',
    './src/interfaces/grpc/services',
    './src/interfaces/grpc/services/getMany',
    './src/interfaces/grpc/services/getOne',
    './src/interfaces/grpc/services/postOne',
    './src/interfaces/grpc/services/putOne',
    './src/interfaces/grpc/services/delOne'
  ]
}

export default protoOption
