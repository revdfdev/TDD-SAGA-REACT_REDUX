import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../Utils";
import Headline from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />)
  return component;
}

describe('Headline Component', () => {
  describe('Checking prop types', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: "Test header",
        desc: "Test desc"
      }

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined()
    });
  });

  describe('Have props', () => {
    
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test desc"
      }
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it('Should render a h1', () => {
      const h1 = findByTestAtrr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAtrr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Should not render', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});