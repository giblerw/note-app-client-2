const dev = {
  STRIPE_KEY: "pk_test_JMMcqqv87IWv1yL2pdtrDpLn00Sj8Dzghh",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-t0ckled39zwc"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "http://notes.bluekeel-api.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_KbnVpIWgD",
    APP_CLIENT_ID: "62oost4nt5f33n07h49vshml8b",
    IDENTITY_POOL_ID: "us-east-1:fe9f6260-b4f2-4387-a4ea-f14912376a42"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_JMMcqqv87IWv1yL2pdtrDpLn00Sj8Dzghh",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-c4y843c47qlu"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "http://notes.bluekeel-api.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ii1ujjCZg",
    APP_CLIENT_ID: "Y3f6qlgcissush1k8e8mcqemt04",
    IDENTITY_POOL_ID: "us-east-1:af121ee6-d7ce-4eb2-9d55-4f5351ebc804"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
