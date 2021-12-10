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
  test('追加したボードを削除', () => {
    const { getByRole, getByTestId } = renderResult;
    expect(getByTestId('boards-wrap')).toBeEmptyDOMElement();
    userEvent.click(getByRole('button', { name: /追加/ }));
    userEvent.type(getByRole('textbox'), 'サンプルボード1');
    userEvent.click(getByRole('button', { name: /ボードを追加/ }));
    userEvent.click(getByTestId('delete-button'));
    userEvent.click(getByRole('button', { name: /はい/ }));
    expect(getByTestId('boards-wrap')).toBeEmptyDOMElement();
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

describe('タスクの追加と削除', () => {
  test('タスクの追加', () => {
    const { getByRole, getByText } = renderResult;
    userEvent.click(getByRole('button', { name: 'ボード追加' }));
    userEvent.type(getByRole('textbox'), 'サンプルボード1');
    userEvent.click(getByRole('button', { name: 'ボードを追加' }));
    userEvent.type(getByRole('textbox'), 'タスク1');
    userEvent.click(getByRole('button', { name: '追加' }));
    expect(getByText('タスク1')).toBeInTheDocument();
    expect(getByRole('checkbox')).not.toBeChecked();
  });
  test('タスクの削除', () => {
    const { queryByText, getByRole, getByTestId, getByText } = renderResult;
    userEvent.click(getByRole('button', { name: 'ボード追加' }));
    userEvent.type(getByRole('textbox'), 'サンプルボード1');
    userEvent.click(getByRole('button', { name: 'ボードを追加' }));
    userEvent.type(getByRole('textbox'), 'タスク1');
    userEvent.click(getByRole('button', { name: '追加' }));
    expect(getByText('タスク1')).toBeInTheDocument();
    expect(getByRole('checkbox')).not.toBeChecked();
    userEvent.click(getByRole('checkbox'));
    expect(getByTestId('delete-task')).toBeInTheDocument();
    userEvent.click(getByTestId('delete-task'));
    expect(queryByText('タスク1')).not.toBeInTheDocument();
  });
});
