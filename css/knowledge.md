> span元素换行
```css
/* span元素中连续的英文字母与数字是无法自动换行的，要强制换行 */
span{
  display:block;
  word-wrap:break-word;
  white-space:normal;
}
```