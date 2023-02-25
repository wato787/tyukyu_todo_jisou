export type todoli =
{
  id: string;
  text: string;
  // 大方、問題ないかと思います。一点アドバイスするならばstatusは多くても3～4種類の文字列だと思うので、
  // status: "done" | "doing" | "yet"
  // みたいな感じで設定しておくとよいと思います！↑は文字列のdone,doing,yetのどれかしか入らないという意味です。

  // statusに”未着手””着手”を設定したらエラーになりました。。
  status: string;
  // 1, todoに編集中かどうか判別できるフラグを持たせると簡単に実装できそうですかね。
  isEdit: boolean;
};
