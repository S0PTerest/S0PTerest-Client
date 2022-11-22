const boardData = {
  board: [
    {
      uid: 'board_1',
      userId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      title: '대빵긴 보드 제목입니다',
    },
    {
      uid: 'board_2',
      userId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      title: '스노우보드',
    },
    {
      uid: 'board_3',
      userId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      title: '스케이트보드',
    },
    {
      uid: 'board_4',
      userId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      title: '보드라운이불',
    },
    {
      uid: 'board_5',
      userId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      title: '보드을보드을',
    },
    {
      uid: 'board_6',
      userId: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      title: '날아라슈퍼보드',
    },
  ],
};

const board1_pinData = [
  {
    uid: 'board_1',
    title: '이것은 핀 제목이고 엄청나게 길어요',
    creator: {
      uid: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      name: '김유저',
      email: 'email1@domain.com',
      profileImageUrl:
        'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
    },
    imageUrl:
      'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
  },
  {
    uid: 'board_1',
    title: '내가 좋아하는거',
    creator: {
      uid: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      name: '김유저',
      email: 'email1@domain.com',
      profileImageUrl:
        'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
    },
    imageUrl:
      'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
  },
  {
    uid: 'board_1',
    title: '네잎클로버',
    creator: {
      uid: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      name: '김유저',
      email: 'email1@domain.com',
      profileImageUrl:
        'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
    },
    imageUrl:
      'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
  },
  {
    uid: 'board_1',
    title: '곰돌이',
    creator: {
      uid: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      name: '김유저',
      email: 'email1@domain.com',
      profileImageUrl:
        'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
    },
    imageUrl:
      'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
  },
];
const board2_pinData = [
  {
    uid: 'board_2',
    title: '이것은 핀 제목이고 엄청나게 길어요',
    creator: {
      uid: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      name: '김유저',
      email: 'email1@domain.com',
      profileImageUrl:
        'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
    },
    imageUrl:
      'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
  },
  {
    uid: 'board_2',
    title: '내가 좋아하는거',
    creator: {
      uid: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      name: '김유저',
      email: 'email1@domain.com',
      profileImageUrl:
        'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
    },
    imageUrl:
      'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
  },
  {
    uid: 'board_2',
    title: '네잎클로버',
    creator: {
      uid: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      name: '김유저',
      email: 'email1@domain.com',
      profileImageUrl:
        'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
    },
    imageUrl:
      'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
  },
  {
    uid: 'board_2',
    title: '곰돌이',
    creator: {
      uid: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      name: '김유저',
      email: 'email1@domain.com',
      profileImageUrl:
        'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
    },
    imageUrl:
      'https://insopt-bucket222.s3.ap-northeast-2.amazonaws.com/aws+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png',
  },
];

export { boardData, board1_pinData, board2_pinData };
