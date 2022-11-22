import React from 'react';
import { ReactComponent as IMenu } from '../../assets/iMenu.svg';
import { ReactComponent as IDimMenu } from '../../assets/iDimMenu.svg';
import { pinterestColors } from '../../styles/color';
import styled from 'styled-components';

function PinGalleryImg() {
  const galleryAgenda = [
    // 이미지 주소 복사로 임의의 사진을 배열로 추가함. 추후 사진 데이터를 받아와야함.
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      title: '타이틀 영역 가나다라마바사아자차카타파하가나두 줄이 될 수도 있음',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://img.insight.co.kr/static/2020/06/15/700/h4ubvce2f6vz4znnbnmw.jpg',
      title: '제목2',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFnvgVUdi16OJAXTkdTIZVPYNWMzoNp-B2Q&usqp=CAU',
      title: '제목3',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-GkQErCAJUJ95ZP-g9Bf77rmCX6Su5HX_Q&usqp=CAU',
      title: '제목4',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5K2hHft7N_Wac201KXS7S_WwPSFUWm6Rnrw&usqp=CAU',
      title: '제목5',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://mblogthumb-phinf.pstatic.net/20160408_268/chadol0000_146009711879167ocW_JPEG/google_co_kr_20160408_152734.jpg?type=w2',
      title: '제목6',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      title: '타이틀 영역 가나다라마바사아자차카타파하가나두 줄이 될 수도 있음',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://img.insight.co.kr/static/2020/06/15/700/h4ubvce2f6vz4znnbnmw.jpg',
      title: '제목2',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFnvgVUdi16OJAXTkdTIZVPYNWMzoNp-B2Q&usqp=CAU',
      title: '제목3',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-GkQErCAJUJ95ZP-g9Bf77rmCX6Su5HX_Q&usqp=CAU',
      title: '제목4',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5K2hHft7N_Wac201KXS7S_WwPSFUWm6Rnrw&usqp=CAU',
      title: '제목5',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://mblogthumb-phinf.pstatic.net/20160408_268/chadol0000_146009711879167ocW_JPEG/google_co_kr_20160408_152734.jpg?type=w2',
      title: '제목6',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      title: '타이틀 영역 가나다라마바사아자차카타파하가나두 줄이 될 수도 있음',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://img.insight.co.kr/static/2020/06/15/700/h4ubvce2f6vz4znnbnmw.jpg',
      title: '제목2',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFnvgVUdi16OJAXTkdTIZVPYNWMzoNp-B2Q&usqp=CAU',
      title: '제목3',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-GkQErCAJUJ95ZP-g9Bf77rmCX6Su5HX_Q&usqp=CAU',
      title: '제목4',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5K2hHft7N_Wac201KXS7S_WwPSFUWm6Rnrw&usqp=CAU',
      title: '제목5',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://mblogthumb-phinf.pstatic.net/20160408_268/chadol0000_146009711879167ocW_JPEG/google_co_kr_20160408_152734.jpg?type=w2',
      title: '제목6',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      title: '타이틀 영역 가나다라마바사아자차카타파하가나두 줄이 될 수도 있음',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://img.insight.co.kr/static/2020/06/15/700/h4ubvce2f6vz4znnbnmw.jpg',
      title: '제목2',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFnvgVUdi16OJAXTkdTIZVPYNWMzoNp-B2Q&usqp=CAU',
      title: '제목3',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-GkQErCAJUJ95ZP-g9Bf77rmCX6Su5HX_Q&usqp=CAU',
      title: '제목4',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5K2hHft7N_Wac201KXS7S_WwPSFUWm6Rnrw&usqp=CAU',
      title: '제목5',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
    {
      img: 'https://mblogthumb-phinf.pstatic.net/20160408_268/chadol0000_146009711879167ocW_JPEG/google_co_kr_20160408_152734.jpg?type=w2',
      title: '제목6',
      profile:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkg_TB2-0KHCCWMsu6zK6C6iVdxKBXzn05Q&usqp=CAU',
      userId: '사용자',
    },
  ];

  return (
    <StyledRoot>
      {galleryAgenda.map(({ img, title, profile, userId }, index) => {
        return (
          <StyledGalleryImg>
            <StyledDim>
              <div>
                <span>
                  <h1>모든 핀</h1>
                  <IDimMenu />
                </span>
                <span>저장</span>
              </div>
            </StyledDim>
            <img src={img} alt="갤러리 이미지" />
            <div className="dimMenu">
              <IMenu />
            </div>
            <StyledTitle>{title}</StyledTitle>
            <StyledUser>
              <img src={profile} alt="유저 이미지 " />
              <span>{userId}</span>
            </StyledUser>
          </StyledGalleryImg>
        );
      })}
    </StyledRoot>
  );
}

export default PinGalleryImg;

const StyledRoot = styled.div`
  margin-top: 2.7rem;
  column-count: 5;
  column-gap: 2.1em;
  .dimMenu {
    position: absolute;
    margin-top: -6rem;
    margin-left: 23.1rem;
  }
`;

const StyledGalleryImg = styled.div`
  display: inline-block;
  flex-direction: column;
  margin-bottom: 3.4em;

  & > img {
    width: 28.8rem;
    border-radius: 1.6rem;
    cursor: pointer;
    position: relative;
    z-index: 0;

    &:hover {
      filter: grayscale(0.4);
    }
  }
`;

const StyledTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.7rem;
  max-width: 26.8rem;
  margin-top: 1.4rem;
  margin-left: 0.6rem;
  cursor: default;
`;

const StyledUser = styled.div`
  margin-top: 0.6rem;
  margin-bottom: 3.4em;
  display: flex;
  cursor: default;

  span {
    margin-block: auto;
    margin-left: 0.8rem;
    font-size: 1.4rem;
    font-weight: 500;
  }
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
`;

const StyledDim = styled.div`
  position: absolute;
  font-weight: 600;
  font-size: 18px;
  color: ${pinterestColors.white};
  line-height: 22px;
  align-items: center;
  z-index: 1;

  & > div:nth-child(1) {
    display: flex;
    margin: 2rem 0 0 2.4rem;

    h1 {
      margin-right: 1.2rem;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span:nth-child(2) {
      border-radius: 6rem;
      background-color: #e60024;
      padding: 10px 16px 9px 16px;
      cursor: pointer;
      margin-left: 10.5rem;
    }
  }
`;
