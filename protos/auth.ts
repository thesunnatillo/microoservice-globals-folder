// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.1
//   protoc               v5.27.3
// source: protos/auth.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "auth";

export interface SignUpDto {
  fullname: string;
  email: string;
  password: string;
  role: string;
}

export interface SignInDto {
  email: string;
  password: string;
}

export interface LogOutDto {
  token: string;
}

export interface GetMeDto {
  token: string;
}

export interface SignUpResponse {
  accessToken: string;
  refreshToken: string;
  message: string;
}

export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
  message: string;
}

export interface LogOutResponse {
  message: string;
}

export interface GetMeResponse {
  fullname: string;
  email: string;
  password: string;
  role: string;
  message: string;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthServiceClient {
  signUp(request: SignUpDto): Observable<SignUpResponse>;

  signIn(request: SignInDto): Observable<SignInResponse>;

  logOut(request: LogOutDto): Observable<LogOutResponse>;

  getMe(request: GetMeDto): Observable<GetMeResponse>;
}

export interface AuthServiceController {
  signUp(request: SignUpDto): Promise<SignUpResponse> | Observable<SignUpResponse> | SignUpResponse;

  signIn(request: SignInDto): Promise<SignInResponse> | Observable<SignInResponse> | SignInResponse;

  logOut(request: LogOutDto): Promise<LogOutResponse> | Observable<LogOutResponse> | LogOutResponse;

  getMe(request: GetMeDto): Promise<GetMeResponse> | Observable<GetMeResponse> | GetMeResponse;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["signUp", "signIn", "logOut", "getMe"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_SERVICE_NAME = "AuthService";
