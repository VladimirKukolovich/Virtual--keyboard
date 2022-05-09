type Boba = {
  element:string, className:string, innerHtml?: string, data?: string,
};
export const createElement = ({
  element, className, innerHtml, data,
}:Boba) => {
  const elem = document.createElement(element);
  elem.className = className;
  if (innerHtml) {
    elem.innerHTML = innerHtml;
  }
  if (data) {
    elem.dataset.keyCode = data;
  }
  return elem;
};
// data-key-code
