import React from "react";
import CustomMarkdown from "@site/src/components/MarkdownToJsx/CustomMarkdown";

export default function MiddlewareMDTable({data}) {
  // 表头
  let markdown = "| Name | Description |\n|---------|-------------|\n";

  // 遍历数据，为每一行添加Markdown格式
  data.forEach((item) => {
    markdown += `| ${item.title} | ${item.description} |\n`;
  });

  return <CustomMarkdown>{markdown}</CustomMarkdown>;
}
