import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoApp from 'components/totoapp/TodoApp';

let renderResult: RenderResult;
beforeEach(() => {
  renderResult = render(<TodoApp />);
});
afterEach(() => {
  renderResult.unmount();
});

describe('初期状態', () => {
  test('ボードが一つも表示されていない', () => {
    const { getByTestId } = renderResult;
    const boardWrap = getByTestId('boards-wrap');
    expect(boardWrap).toBeEmptyDOMElement();
  });
  test('クリアボタンが非活性状態になっている', () => {
    const onClick = jest.fn();
    const { getByRole } = renderResult;
    const button = getByRole('button', { name: /クリア/ });
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
    expect(button).toHaveClass('pointer-events-none');
  });
});

describe('ボートの追加と全て削除', () => {
  test('ボードを一つ追加', () => {
    const { getByRole, getByTestId } = renderResult;
    expect(getByTestId('boards-wrap')).toBeEmptyDOMElement();
    userEvent.click(getByRole('button', { name: /追加/ }));
    userEvent.type(getByRole('textbox'), 'サンプルボード1');
    userEvent.click(getByRole('button', { name: /ボードを追加/ }));
    expect(getByTestId('boards-wrap')).not.toBeEmptyDOMElement();
  });
  test('ボードをすべて削除', () => {
    const { getByRole, getByTestId } = renderResult;
    userEvent.click(getByRole('button', { name: /追加/ }));
    userEvent.type(getByRole('textbox'), 'サンプルボード1');
    userEvent.click(getByRole('button', { name: /ボードを追加/ }));
    expect(getByTestId('boards-wrap')).not.toBeEmptyDOMElement();
    userEvent.click(getByRole('button', { name: /クリア/ }));
    userEvent.click(getByRole('button', { name: /はい/ }));
    expect(getByTestId('boards-wrap')).toBeEmptyDOMElement();
  });
});
