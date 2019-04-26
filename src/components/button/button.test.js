import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../Utils";
import ShareButton from "./index";

describe('Share Button', () => {
  describe('Checking propTypes', () => {
    it('Should not throw warning', () => {
      const expectedProps = {
        buttonText: "Test button",
        emitEvent: () => {

        },
      };

      const propsErr = checkProps(ShareButton, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Test Button",
        emitEvent: mockFunc,
      };
      wrapper = shallow(<ShareButton {...props} />);
    });

    it('Should render a button', () => {
      const button = findByTestAtrr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });

    it('Should simulate click, and return a callback', () => {
      const button = findByTestAtrr(wrapper, 'buttonComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
