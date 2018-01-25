/* eslint-disable no-undef */
/* global expect, it, describe */

import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddTodo from '.';

configure({ adapter: new Adapter() });

describe('AddTodo Component', () => {
  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo submitTodo={submitMock}
      />
    );
  });

  it('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });

  describe('AddTodo button', () => {
    it('should exist', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    });

    it('should call the submitTodo function when clicked', () => {
      component = mount(<AddTodo submitTodo={submitMock} />);
      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });
});

