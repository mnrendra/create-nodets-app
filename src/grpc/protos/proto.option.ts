const protoOption = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [
    './src/grpc/protos',
    './src/grpc/services',
    './src/grpc/services/getMany',
    './src/grpc/services/getOne',
    './src/grpc/services/postOne',
    './src/grpc/services/putOne',
    './src/grpc/services/delOne',
    //
    './build/grpc/protos',
    './build/grpc/services',
    './build/grpc/services/getMany',
    './build/grpc/services/getOne',
    './build/grpc/services/postOne',
    './build/grpc/services/putOne',
    './build/grpc/services/delOne'
  ]
}

export default protoOption
