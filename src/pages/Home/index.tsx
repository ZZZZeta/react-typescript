import React, { FC } from 'react';
import { Form } from 'react-final-form';
import { Row, Col, Button } from 'antd';
import Field, { components } from '../../components/Form';

const Home: FC = () => {
  return (
    <Form
      onSubmit={(values) => console.log(values)}
      render={(formProps) => {
        const { handleSubmit } = formProps;

        return (
          <Row align="middle" style={{ height: '100%' }}>
            <Col span={8} offset={8}>
              <form onSubmit={handleSubmit}>
                <Row justify="center">
                  <Col span={20} offset={2} style={{ paddingTop: '16px' }}>
                    <Field
                      name="email"
                      component={components.input}
                      placeholder="Email"
                      validate={(value) => {
                        if (!value) return 'This field is required';
                      }}
                    />
                  </Col>
                  <Col span={20} offset={2} style={{ paddingTop: '16px' }}>
                    <Field
                      name="password"
                      component={components.input}
                      placeholder="Password"
                      validate={(value) => {
                        if (!value) return 'This field is required';
                        if (value.toString().length < 8)
                          return 'Password must contain at least 8 characters';
                      }}
                    />
                  </Col>
                  <Col
                    span={20}
                    offset={2}
                    style={{ paddingTop: '16px' }}
                    flex="flex"
                  >
                    <Button type="primary" htmlType="submit">
                      Log in
                    </Button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        );
      }}
    />
  );
};

export default Home;
