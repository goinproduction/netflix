import React, { useState } from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

export default function Home(props) {
  const [activeState, setActiveState] = useState(false);
  const [inputValue, setInputValue] = useState('');
  var opacity;

  function emailValidated(value) {
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(value) ? undefined : 'Vui lòng nhập email hợp lệ';
  }
  var result = emailValidated(inputValue);
  if (result === 'Vui lòng nhập email hợp lệ') {
    opacity = true;
  } else {
    opacity = false;
  }
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Chương trình truyền hình, phim không giới hạn và nhiều nội dung
            khác.
          </Feature.Title>
          <Feature.SubTitle>
            Xem ở mọi nơi. Hủy bất kỳ lúc nào.
          </Feature.SubTitle>
          <OptForm.Text>
            Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư
            cách thành viên của bạn.
          </OptForm.Text>
          <OptForm>
            <OptForm.WrapDescription
              active={activeState}
              onClick={() => setActiveState(true)}
              setInputValue={setInputValue}
            >
              <OptForm.ErrorMessage
                getOpacity={opacity}
                activeState={activeState}
              >
                {result}
              </OptForm.ErrorMessage>
            </OptForm.WrapDescription>
            {props.childrens}
            <OptForm.Button
              onClick={() => {
                setActiveState(true);
              }}
            >
              Bắt đầu
            </OptForm.Button>
            <OptForm.Break />
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
