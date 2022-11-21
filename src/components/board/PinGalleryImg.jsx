import React from 'react';
import styled from 'styled-components';

function PinGalleryImg() {
  const galleryAgenda = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      title: '제목1',
      profile: '프로필 사진',
      userId: '사용자',
    },
    {
      img: 'https://img.insight.co.kr/static/2020/06/15/700/h4ubvce2f6vz4znnbnmw.jpg',
      title: '제목2',
      profile: '프로필 사진',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFnvgVUdi16OJAXTkdTIZVPYNWMzoNp-B2Q&usqp=CAU',
      title: '제목3',
      profile: '프로필 사진',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-GkQErCAJUJ95ZP-g9Bf77rmCX6Su5HX_Q&usqp=CAU',
      title: '제목4',
      profile: '프로필 사진',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5K2hHft7N_Wac201KXS7S_WwPSFUWm6Rnrw&usqp=CAU',
      title: '제목5',
      profile: '프로필 사진',
      userId: '사용자',
    },
    {
      img: 'https://mblogthumb-phinf.pstatic.net/20160408_268/chadol0000_146009711879167ocW_JPEG/google_co_kr_20160408_152734.jpg?type=w2',
      title: '제목6',
      profile: '프로필 사진',
      userId: '사용자',
    },
    // 이미지 주소 복사로 임의의 사진을 배열로 추가함. 추후 사진 데이터를 받아와야함.
    ,
  ];

  return (
    <StyledRoot>
      {galleryAgenda.map((galleryData, index) => {
        return (
          <StyledGalleryImg>
            <img src={galleryData.img} />
            <StyledInform>
              {galleryData.title}
              {galleryData.profile}
              {galleryData.userId}
            </StyledInform>
          </StyledGalleryImg>
        );
      })}
    </StyledRoot>
  );
}

export default PinGalleryImg;

const StyledRoot = styled.div`
  column-count: 5;
  column-gap: 2.1em;
`;

const StyledGalleryImg = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.4em;
  cursor: pointer;

  &:hover {
    filter: grayscale(0.4);
  }

  img {
    width: 28.8rem;
  }
`;

const StyledInform = styled.div``;
