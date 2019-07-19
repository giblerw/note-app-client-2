export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "my-note-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://m6g7p6ukw5.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_OXEm7IlOL",
    APP_CLIENT_ID: "io2ss9365lu8f22l5j71u4kev",
    IDENTITY_POOL_ID: "us-east-1:6898e448-817f-494a-afd4-0c0c953db40c"
  }
};
