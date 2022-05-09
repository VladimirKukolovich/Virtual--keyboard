import { createElement } from './createElement';

const { body } = document;
export const monic = () => {
  const wrapper = createElement({
    element: 'div',
    className: 'wrapper',
  });
  const textarea = createElement({
    element: 'textarea',
    className: 'text',
  });
  body.append(wrapper);
  wrapper.append(textarea);
};
