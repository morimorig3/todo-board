# ToDo Board

複数のTodoListを持つことができるToDoアプリです。

[デモ](https://todo-board-app.netlify.app/)

## 技術目標

1. create-react-appを使用したReactアプリが制作できる。
2. tailwindcssを使用したスタイルをあてることができる。
3. localStorageを使用したデータの永続化する。
4. Hooksを使用してロジック部分を分ける。
5. ESLintなどリンターに触れる。
6. ユーザビリティを意識したフォームのコーディングを行う。
7. TypeScriptに触れる。
8. テストを書く

## Update

### 2022-02-09

Reduxを導入した。導入方法はreeux toolkitを使用した。従来の書き方よりもコードの行数もつくるファイル数も減っているため、とても書きやすいし理解もしやすい。反面、中で何が起きているかは少しわかりづらくなっている。既存プロジェクトだと、toolkitを使用していない案件もあるはずなので、従来の書き方も書けるようになるべきだと感じる。

Reduxを導入したことで、データの処理がかなりきれいになった。今まではルートコンポーネントからデータやデータを追加するための関数をバケツリレーしていたのでコードの見通が悪かった。TodoApp->Board->TaskList->TaskとdeleteTask関数を受け渡していたのが、Taskコンポーネントに直接deleteTaskを読み込ませることができるようになったのがいい。

個人的にかなりハードルが高いと思っていたReduxもデータの流れを理解できれば小さなアプリでも積極的に使っていくのもアリだと感じた。

### 2021-12-10

みようみまねでテストを追加。実装の詳細をテストしないという考えを意識して記述した。とりあえず動くテストを書くことができた。Jestの基本的な書き方を理解しきれていないため、繰り返し同じ記述をしてしまっているので多分ダメなパターンになってしまっている。

テストのコードを見ることとテストを書き続けていくことでテストコードの質向上とテストしやすいコンポーネント設計ができるように精進していきたい。

### 2021-11-30

*達成項目*

* ~~Hooksを使用してロジック部分を分ける。~~
* ~~ユーザビリティを意識したフォームのコーディングを行う。~~
* ~~TypeScriptに触れる。~~

#### 所感

Hooksを使用して、ロジック部分を抽出することができた。当初はロジックとUIがごちゃ混ぜになっており、非常に読みにくいソースコードだったのが、少しだけ読みやすいくなった気がする。まだ雰囲気で使ってるので、活用箇所や仕組みの研究が必要。そのためのReact理解が不足していると感じる。具体的にはどのタイミングレンダリングが行われるのかなど、ライフサイクルのことを理解し切れていない。

入力フォーム周りのコーディングを行う際にユーザビリティを高められるよう意識したコーディングをすることができた。

* タスク追加時:タスク名入力後、追加ボタンを押さなくてもエンターキーでのタスク追加
* 完了チェックボックス:チェックボックスはもちろん、タスク名やチェックボックスとタスク名の間のマージンをクリックしてもチェックできるようにした
* ボード追加時:ボード追加フォームを表示した時、入力欄にフォーカスが当たるようにした

TypeScriptを書くこと自体には慣れることができてきた。できていることはコンパイルを通すことで、できていないことは効果的に使えているのかわからないということ。今回はBoardやTaskという型を複数のコンポーネント間で使いまわしていたので、1つのファイルにまとめてインポートして使用したが、それが良いパターンなのかどうかも判断できていないので、使用していく上で改善していく必要あり。

*未達成項目*

* ESLintなどリンターに触れる。

### 2021-08-19

*達成項目*

* ~~create-react-appを使用したReactアプリが制作できる。~~
* ~~tailwindcssを使用したスタイルをあてることができる。~~
* ~~localStorageを使用したデータの永続化する。~~

#### 所感

create-react-appを使用して、Reactアプリを作成することができた。create-react-appはさまざまな制作ツールがラッピングされているので、ステップアップのためにはcreate-react-appに頼らず開発環境を構築できるようになる必要があると感じる。

tailwindを使用したスタイルを当てることができた。last-childのような擬似セレクターは設定ファイルに記述することで使用可能になるが、公式のドキュメントを読むことで難なく設定することができた。とても自由度の高いCSSフレームワーク？で使用感は素晴らしい。デザイン制約がある時に、ユーザー定義セレクターが増えてしまうという障害が発生してしまうように感じる。

localStorageを使用してブラウザをリロードしても、データを保持し続けることができた。現在は追加や削除の度にローカルストレージへアクセスしているのでパフォーマンス上に影響があるのではないかと思う。

*未達成項目*

* Hooksを使用してロジック部分を分ける。
* ESLintなどリンターに触れる。
* ユーザビリティを意識したフォームのコーディングを行う。
* TypeScriptに触れる。