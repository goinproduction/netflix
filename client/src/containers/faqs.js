import React, { useState } from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs';

export function FaqsContainer() {
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
    <Accordion>
      <Accordion.Title>Câu hỏi thường gặp</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm.Text>
        Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách
        thành viên của bạn.
      </OptForm.Text>
      <OptForm>
        <OptForm.WrapDescription
          active={activeState}
          onClick={() => setActiveState(true)}
          setInputValue={setInputValue}
        >
          <OptForm.ErrorMessage getOpacity={opacity} activeState={activeState}>
            {result}
          </OptForm.ErrorMessage>
        </OptForm.WrapDescription>
        <OptForm.Button
          onClick={() => {
            setActiveState(true);
          }}
        >
          Bắt đầu
        </OptForm.Button>
        <OptForm.Break />
      </OptForm>
    </Accordion>
  );
}
