import { createElement } from './createElement';
import { Abc, RuAbc, RuABC } from './state';
import { monic } from './monic';

let language = Abc;
const { body } = document;

export const virtualKeyboards = () => {
  const keyBoards = createElement({
    element: 'div',
    className: 'keyboards',
  });
  for (let i = 0; i < 5; i += 1) {
    const keysRow = createElement({
      element: 'div',
      className: 'key-row',
    });
    type Assa = {
      value:string, className: string, data: string,
    };

    language[i].forEach(({ value, className, data }: Assa) => {
      const button = createElement({
        element: 'div',
        className: `button ${className}`,
        innerHtml: value,
        data,
      });
      keysRow.append(button);
    });
    keyBoards.append(keysRow);
  }
  body.append(keyBoards);
};
const capsLock = document.querySelector('.caps_lock');
body.addEventListener('keydown', (e) => {
  console.log(e.code);
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    language = RuABC;
  }
  if (e.code === 'CapsLock') {
    language = RuABC;
    capsLock?.classList.toggle('active');
  }
  body.innerHTML = '';
  monic();
  virtualKeyboards();
});
body.addEventListener('keyup', (e) => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    language = RuAbc;
  }
  body.innerHTML = '';
  monic();
  virtualKeyboards();
});
const text: string[] = [];
let output = '';
const outputTextarea = (t:string[]) => t.filter((e) => e.length === 1).join('');
body.addEventListener('keyup', (e) => {
  text.push(e.key);
  const textArea = document.querySelector('.text');
  output = outputTextarea(text);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  textArea.innerHTML = output;
  // console.log(e.key);
  // if (textArea) {
  // }
});

// console.log(capsLock);
// capsLock?.addEventListener('click', () => {
//   capsLock.classList.toggle('active');
//   language = RuABC;
// });
