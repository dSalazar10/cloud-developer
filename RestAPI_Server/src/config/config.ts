export const config = {
  'dev': {
    'username': process.env.POSTGRESS_USERNAME,
    'password': process.env.POSTGRESS_PASSWORD,
    'database': process.env.POSTGRESS_DATABASE,
    'host': process.env.POSTGRESS_HOST,
    'dialect': 'postgres',
    'aws_region': process.env.AWS_REGION,
    'aws_profile': process.env.AWS_PROFILE,
    'aws_media_bucket': process.env.AWS_MEDIA_BUCKET
  },
  'prod': {
    'username': process.env.POSTGRESS_USERNAME,
    'password': process.env.POSTGRESS_PASSWORD,
    'database': process.env.POSTGRESS_DATABASE,
    'host': process.env.POSTGRESS_HOST,
    'dialect': 'postgres',
    'aws_region': process.env.AWS_REGION,
    'aws_profile': process.env.AWS_PROFILE,
    'aws_media_bucket': process.env.AWS_MEDIA_BUCKET
  },
  'jwt': {
    'secret': process.env.JWT_SECRET
  },
  'filter': {
    'host': process.env.FILTER_HOST
  },
  'sentry': {
    'dns': process.env.SENTRY
  }
};
