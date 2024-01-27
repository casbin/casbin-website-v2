import React from "react";
import Markdown from "markdown-to-jsx";

export default function AdapterMDTable({data}) {
  // 表头
  let markdown =
    "| Adapter | Type | Author | AutoSave | Description |\n|---------|------|--------|----------|-------------|\n";

  // 遍历数据，为每一行添加Markdown格式
  data.forEach((item) => {
    markdown += `| ${item.title} | ${item.type} | ${item.author} | ${item.autoSave} | ${item.description} |\n`;
  });

  return <Markdown>{markdown}</Markdown>;
}
