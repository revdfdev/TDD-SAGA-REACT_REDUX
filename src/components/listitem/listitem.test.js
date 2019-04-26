import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../Utils";
import ListItem from "./index";

const setUp = (props = {}) => {
  const component = shallow(<ListItem {...props} />);
  return component;
};

describe("ListItem Component", () => {
  describe("Checking propTypes", () => {
    it("Should not throw any warning", () => {
      const expectedProps = {
        title: "Test title",
        desc: "Test description"
      };

      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined;
    });
  });

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Test title",
        desc: "Test description"
      }
      wrapper = setUp(props);
    })
    
    it('Should render list item component without any error', () => {
      const component = findByTestAtrr(wrapper, 'listComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a h2', () => {
      const h2 = findByTestAtrr(wrapper, 'componentTitle');
      expect(h2.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it ('Should not render', () => {
      const component = findByTestAtrr(wrapper, 'lestComponent');
      expect(component.length).toBe(0);
    })
  })
});
