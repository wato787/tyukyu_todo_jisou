export type todoli =
{
  id: string;
  text: string;
  // statusに”未着手””着手”を設定したらエラーになりました。。
  status: string;
  // 1, todoに編集中かどうか判別できるフラグを持たせると簡単に実装できそうですかね。
  isEdit: boolean;
};
